import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: '/api',
  timeout: 30000//, // 30초
  // headers: {
  //   'Content-Type': 'application/json'
  // }
});

/**
 * LLM API와 통신하는 함수
 * @param {string} query - 사용자 질의 내용
 * @param {string} language - 언어 코드 (기본값: "ko")
 * @param {Object} additionalParams - 서비스별 추가 파라미터
 * @returns {Promise<Object>} API 응답 결과
 */
export const askLLMApi = async (query, language = "ko") => {
  try {
    // API 요청 데이터 준비
    query = query.replace("\n", "")
    const payload = {
      query,
      language
      // language,
      // ...additionalParams
    };
    
    // API 호출
    console.log("🔥 API 호출전");
    const response = await api.post('/llm', payload);
    // const response = await api.post('/llm', { query, language });
    console.log("📥 응답:", response.data);
    console.log("✅ response.data:", response.data.data);
    return { success: true, data: response.data.data };
    // return { success: true, data: response.data };
  } catch (error) {
    // console.error(response)
    console.error("🔥 전체 에러:", error);
    console.error("📦 error.response:", error.response);
    console.error("📡 error.request:", error.request);
    
    // 오류 유형에 따른 메시지 생성
    let errorMessage = '알 수 없는 오류가 발생했습니다.';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = 'API 요청 시간이 초과되었습니다. 나중에 다시 시도해주세요.';
    } else if (error.response) {
      // 서버에서 응답을 받았지만 오류 상태 코드가 반환된 경우
      errorMessage = `서버 오류: ${error.response.status}`;
      if (error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
    } else if (error.request) {
      // 요청이 이루어졌지만 응답을 받지 못한 경우
      errorMessage = 'API 서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.apiService2';
    }
    
    return { success: false, error: errorMessage };
  }
};

// export default {
//   askLLMApi
// }; 

const apiService = {
  askLLMApi
};

export default apiService;