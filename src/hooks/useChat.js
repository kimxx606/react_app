import { useState, useEffect, useRef } from 'react';
import { useSession } from '../contexts/SessionContext';
import { askLLMApi } from '../services/apiService';

/**
 * 채팅 기능을 관리하는 커스텀 훅
 * @param {string} serviceId - 서비스 식별자
 * @returns {Object} 채팅 관련 상태와 함수
 */
const useChat = (serviceId) => {
  const { sessionState, updateSessionState } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);
  
  // 세션 스토리지에서 메시지 가져오기 또는 기본값 설정
  const messages = sessionState[`${serviceId}_messages`] || [];
  const language = sessionState[`${serviceId}_language`] || 'ko';
  
  // 메시지 저장 함수
  const saveMessages = (newMessages) => {
    updateSessionState(`${serviceId}_messages`, newMessages);
  };
  
  // 언어 변경 함수
  const setLanguage = (newLanguage) => {
    updateSessionState(`${serviceId}_language`, newLanguage);
  };
  
  // 메시지 초기화 함수
  const clearMessages = () => {
    saveMessages([]);
  };
  
  // 스크롤 기능
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // 메시지 전송 함수
  const sendMessage = async (query) => {
    if (!query.trim()) return;
    
    // 사용자 메시지 추가
    const userMessage = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];
    saveMessages(updatedMessages);
    
    // API 호출
    setIsLoading(true);
    try {
      const result = await askLLMApi(query, language);
      
      if (result.success) {
        // 성공 응답 처리
        const assistantMessage = {
          role: 'assistant',
          content: result.data.result || '응답을 받지 못했습니다.'
        };
        saveMessages([...updatedMessages, assistantMessage]);
      } else {
        // 오류 응답 처리
        const errorMessage = {
          role: 'assistant',
          content: `오류가 발생했습니다: ${result.error || '알 수 없는 오류'}`,
          isError: true
        };
        saveMessages([...updatedMessages, errorMessage]);
      }
    } catch (error) {
      console.error('메시지 전송 중 오류:', error);
      const errorMessage = {
        role: 'assistant',
        content: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
        isError: true
      };
      saveMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // 대표 질문 처리 함수
  const handleSampleQuestion = (question) => {
    sendMessage(question);
  };
  
  return {
    messages,
    isLoading,
    language,
    chatContainerRef,
    sendMessage,
    clearMessages,
    setLanguage,
    handleSampleQuestion
  };
};

export default useChat; 