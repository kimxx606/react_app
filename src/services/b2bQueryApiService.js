import axios from 'axios';

// B2B Query 전용 axios 인스턴스 생성
const b2bQueryApi = axios.create({
  baseURL: 'https://b2b-query.mkdev-kic.intellytics.lge.com',
  timeout: 30000, // 30초
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * B2B Query API와 통신하는 함수
 * @param {string} query - 사용자 질의 내용
 * @param {string} language - 언어 코드 (기본값: "ko")
 * @param {Object} additionalParams - 서비스별 추가 파라미터
 * @returns {Promise<Object>} API 응답 결과
 */
export const askB2BQueryApi = async (query, language = "ko", additionalParams = {}) => {
  try {
    // API 요청 데이터 준비
    query = query.replace("\n", "");
    const payload = {
      query,
      language,
      ...additionalParams
    };
    
    // API 호출 (B2B Query 엔드포인트로 직접 연결)
    console.log("🔍 B2B Query API 호출");
    const response = await b2bQueryApi.post('/b2b_query', payload);
    console.log("📥 B2B Query 응답:", response.data);
    
    // 응답 데이터 처리 - API 응답 형태에 맞게 필요시 수정
    return { 
      success: true, 
      data: {
        result: response.data.answer || response.data.result || response.data,
        sources: response.data.sources || []
      } 
    };
  } catch (error) {
    console.error("🔥 B2B Query API 에러:", error);
    console.error("📦 error.response:", error.response);
    console.error("📡 error.request:", error.request);
    
    // 오류 유형에 따른 메시지 생성
    let errorMessage = '알 수 없는 오류가 발생했습니다.';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = 'B2B Query API 요청 시간이 초과되었습니다. 나중에 다시 시도해주세요.';
    } else if (error.response) {
      // 서버에서 응답을 받았지만 오류 상태 코드가 반환된 경우
      errorMessage = `B2B Query 서버 오류: ${error.response.status}`;
      if (error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
    } else if (error.request) {
      // 요청이 이루어졌지만 응답을 받지 못한 경우
      errorMessage = 'B2B Query API 서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.';
    }
    
    return { success: false, error: errorMessage };
  }
};

// B2B Query API 서비스 객체 정의
const b2bQueryApiService = {
  askB2BQueryApi
};

export default b2bQueryApiService; 