import { useState, useEffect, useRef, useCallback } from 'react';
import { useSession } from '../contexts/SessionContext';
import { askB2BQueryApi } from '../services/b2bQueryApiService';

/**
 * B2B Query 채팅 기능을 관리하는 커스텀 훅
 * @param {string} serviceId - 서비스 식별자
 * @returns {Object} 채팅 관련 상태와 함수
 */
const useB2BQuery = (serviceId) => {
  const { sessionState, updateSessionState } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);

  const messages = sessionState[`${serviceId}_messages`] || [];
  const language = sessionState[`${serviceId}_language`] || 'ko';

  const saveMessages = (newMessages) => {
    updateSessionState(`${serviceId}_messages`, newMessages);
  };

  const setLanguage = (newLanguage) => {
    updateSessionState(`${serviceId}_language`, newLanguage);
  };

  const clearMessages = () => {
    saveMessages([]);
  };

  const scrollToBottom = useCallback(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
    const t1 = setTimeout(scrollToBottom, 100);
    const t2 = setTimeout(scrollToBottom, 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = async (query) => {
    if (!query.trim()) return;

    const userMessage = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];
    saveMessages(updatedMessages);

    setIsLoading(true);
    try {
      // B2B Query 전용 API 사용
      const result = await askB2BQueryApi(query, language);

      const assistantMessage = {
        role: 'assistant',
        content: result.success
          ? result.data.result || 'B2B Query 응답을 받지 못했습니다.'
          : `오류가 발생했습니다: ${result.error || '알 수 없는 오류'}`,
        isError: !result.success,
        // B2B Query 관련 추가 메타데이터가 있다면 여기에 추가
        metadata: result.success && result.data.sources ? {
          sources: result.data.sources
        } : undefined
      };

      saveMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error('B2B Query 메시지 전송 중 오류:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'B2B Query API 통신 중 오류가 발생했습니다. 나중에 다시 시도해주세요.',
        isError: true
      };
      saveMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSampleQuestion = (question) => {
    sendMessage(question);
  };

  return {
    messages,
    isLoading,
    language,
    chatContainerRef,
    bottomRef,
    sendMessage,
    clearMessages,
    setLanguage,
    handleSampleQuestion
  };
};

export default useB2BQuery; 