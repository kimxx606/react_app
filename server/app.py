from flask import Flask, request, jsonify
import os
import requests
from urllib.parse import urlencode
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 모든 출처에서의 요청 허용

# LLM API 엔드포인트 (환경 변수에서 가져오거나 기본값 사용)
DEFAULT_LLM_ENDPOINT = "https://melleri-assistant.mkdev-kic.intellytics.lge.com/api/ask_chat"
LLM_ENDPOINT = os.environ.get("LLM_API_ENDPOINT", DEFAULT_LLM_ENDPOINT)

@app.route('/api/llm', methods=['POST'])
def ask_llm():
# def ask_llm(query, language="ko"):
    """
    LLM API와 통신하는 엔드포인트
    """
    data = request.json
    query = data.get('query')
    language = data.get('language', 'ko')
    # additional_params = {k: v for k, v in data.items() if k not in ['query', 'language']}

    if not query:
        return jsonify({"success": False, "error": "질문(query)이 비어 있습니다."}), 400

    try:
        # # 쿼리스트링 구성
        # params = {
        #     "question": query,
        #     "language": language
        # }
        # if additional_params:
        #     params.update(additional_params)

        # query_string = urlencode(params)
        # api_url = f"{DEFAULT_LLM_ENDPOINT}?{query_string}"
        api_url = f"{DEFAULT_LLM_ENDPOINT}?question={requests.utils.quote(query)}"

        # API 호출
        response = requests.post(
            api_url,
            headers={"accept": "application/json"},
            timeout=30,  # 30초 타임아웃 설정
        )
        print("리스판스 테스트:", response)

        # api_url = f"{endpoint}?question={requests.utils.quote(query)}"
        # # print(f"요청 URL: {api_url}")  # 디버깅용
        
        # # API 호출 (Body가 아닌 URL 파라미터로 전송)
        # response = requests.post(
        #     api_url,
        #     headers={"accept": "application/json"},
        #     timeout=30  # 30초 타임아웃 설정
        # ) 

        if response.status_code == 200:
            # 전체 응답 확인
            data = response.json()
            # print("리스판스 테스트2:", data)
            # print(f"API 응답: {data}")  # 디버깅용
            
            # 응답에서 직접 "answer" 필드 추출
            answer = data.get("answer", "응답에 answer 필드가 없습니다.")
            sources = data.get("sources", [])
            print("리스판스 테스트2:", answer)
            
            # 응답 구성
            return {
                "success": True,
                "data": {
                    "result": answer,
                    "sources": sources
                }
            }
            # return {"success": True, "data": response.json()}
        else:
            return {
                "success": False, 
                "error": f"API 오류: {response.status_code}", 
                "details": response.text
            }
            
    except requests.exceptions.Timeout:
        return {"success": False, "error": "API 요청 시간이 초과되었습니다. 나중에 다시 시도해주세요."}
    except requests.exceptions.ConnectionError:
        return {"success": False, "error": "API 서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요."}
    except Exception as e:
        return {"success": False, "error": f"오류가 발생했습니다: {str(e)}"}

    #     if response.status_code == 200:
    #         data = response.json()
    #         answer = data.get("answer", "응답에 answer 필드가 없습니다.")
    #         sources = data.get("sources", [])
    #         return jsonify({
    #             "success": True,
    #             "data": {
    #                 "result": answer,
    #                 "sources": sources
    #             }
    #         }), 200
    #     else:
    #         return jsonify({
    #             "success": False,
    #             "error": f"API 오류: {response.status_code}",
    #             "details": response.text
    #         }), response.status_code

    # except requests.exceptions.Timeout:
    #     return jsonify({
    #         "success": False,
    #         "error": "API 요청 시간이 초과되었습니다. 나중에 다시 시도해주세요."
    #     }), 504
    # except requests.exceptions.ConnectionError:
    #     return jsonify({
    #         "success": False,
    #         "error": "API 서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요."
    #     }), 503
    # except Exception as e:
    #     return jsonify({
    #         "success": False,
    #         "error": f"오류가 발생했습니다: {str(e)}"
    #     }), 500

# 개발 환경에서 직접 실행 시
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
