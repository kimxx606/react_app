from flask import Flask, request, jsonify
import os
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 모든 출처에서의 요청 허용

# LLM API 엔드포인트 (환경 변수에서 가져오거나 기본값 사용)
DEFAULT_LLM_ENDPOINT = "http://localhost:8081/api/llm"
LLM_ENDPOINT = os.environ.get("LLM_API_ENDPOINT", DEFAULT_LLM_ENDPOINT)

@app.route('/api/llm', methods=['POST'])
def ask_llm():
    """
    LLM API와 통신하는 엔드포인트
    """
    data = request.json
    query = data.get('query')
    language = data.get('language', 'ko')
    additional_params = {k: v for k, v in data.items() if k not in ['query', 'language']}
    
    try:
        # API 요청 데이터 준비
        payload = {
            "query": query,
            "language": language
        }
        
        # 추가 파라미터가 있으면 페이로드에 추가
        if additional_params:
            payload.update(additional_params)
        
        # API 호출
        response = requests.post(
            LLM_ENDPOINT,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=30  # 30초 타임아웃 설정
        )
        
        if response.status_code == 200:
            return jsonify(response.json()), 200
        else:
            return jsonify({
                "success": False, 
                "error": f"API 오류: {response.status_code}", 
                "details": response.text
            }), response.status_code
            
    except requests.exceptions.Timeout:
        return jsonify({
            "success": False, 
            "error": "API 요청 시간이 초과되었습니다. 나중에 다시 시도해주세요."
        }), 504
    except requests.exceptions.ConnectionError:
        return jsonify({
            "success": False, 
            "error": "API 서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요."
        }), 503
    except Exception as e:
        return jsonify({
            "success": False, 
            "error": f"오류가 발생했습니다: {str(e)}"
        }), 500

# 개발 환경에서 직접 실행 시
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port) 