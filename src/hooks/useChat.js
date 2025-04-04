// import { useState, useEffect, useRef } from 'react';
// import { useSession } from '../contexts/SessionContext';
// import { askLLMApi } from '../services/apiService';

// /**
//  * 채팅 기능을 관리하는 커스텀 훅
//  * @param {string} serviceId - 서비스 식별자
//  * @returns {Object} 채팅 관련 상태와 함수
//  */
// const useChat = (serviceId) => {
//   const { sessionState, updateSessionState } = useSession();
//   const [isLoading, setIsLoading] = useState(false);
//   const chatContainerRef = useRef(null);
  
//   // 세션 스토리지에서 메시지 가져오기 또는 기본값 설정
//   const messages = sessionState[`${serviceId}_messages`] || [];
//   const language = sessionState[`${serviceId}_language`] || 'ko';
  
//   // 메시지 저장 함수
//   const saveMessages = (newMessages) => {
//     updateSessionState(`${serviceId}_messages`, newMessages);
//   };
  
//   // 언어 변경 함수
//   const setLanguage = (newLanguage) => {
//     updateSessionState(`${serviceId}_language`, newLanguage);
//   };
  
//   // 메시지 초기화 함수
//   const clearMessages = () => {
//     saveMessages([]);
//   };
  
//   // 스크롤 기능
//   useEffect(() => {
//     const scrollToBottom = () => {
//       if (chatContainerRef.current) {
//         const scrollHeight = chatContainerRef.current.scrollHeight;
//         chatContainerRef.current.scrollTop = scrollHeight;
//       }
//     };

//     // 즉시 실행
//     scrollToBottom();

//     // DOM 업데이트 후 다시 실행
//     const timer1 = setTimeout(scrollToBottom, 0);
//     // 콘텐츠 로드 후 실행
//     const timer2 = setTimeout(scrollToBottom, 100);
//     // 더 긴 시간 후 다시 실행 (느린 렌더링, 이미지 로드 등 대비)
//     const timer3 = setTimeout(scrollToBottom, 500);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, [messages, isLoading]);
  
//   // 메시지 전송 함수
//   const sendMessage = async (query) => {
//     if (!query.trim()) return;
    
//     // 사용자 메시지 추가
//     const userMessage = { role: 'user', content: query };
//     const updatedMessages = [...messages, userMessage];
//     saveMessages(updatedMessages);
    
//     // 사용자 메시지 추가 후 스크롤
//     setTimeout(() => {
//       if (chatContainerRef.current) {
//         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//       }
//     }, 0);
    
//     // API 호출
//     setIsLoading(true);
//     try {
//       const result = await askLLMApi(query, language);
      
//       if (result.success) {
//         // 성공 응답 처리
//         const assistantMessage = {
//           role: 'assistant',
//           content: result.data.result || '응답을 받지 못했습니다.'
//         };
//         saveMessages([...updatedMessages, assistantMessage]);
        
//         // 응답 메시지 추가 후 스크롤
//         setTimeout(() => {
//           if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//           }
//         }, 0);
//       } else {
//         // 오류 응답 처리
//         const errorMessage = {
//           role: 'assistant',
//           content: `오류가 발생했습니다: ${result.error || '알 수 없는 오류'}`,
//           isError: true
//         };
//         saveMessages([...updatedMessages, errorMessage]);
        
//         // 오류 메시지 추가 후 스크롤
//         setTimeout(() => {
//           if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//           }
//         }, 0);
//       }
//     } catch (error) {
//       console.error('메시지 전송 중 오류:', error);
//       const errorMessage = {
//         role: 'assistant',
//         content: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
//         isError: true
//       };
//       saveMessages([...updatedMessages, errorMessage]);
      
//       // 오류 메시지 추가 후 스크롤
//       setTimeout(() => {
//         if (chatContainerRef.current) {
//           chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//         }
//       }, 0);
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   // 대표 질문 처리 함수
//   const handleSampleQuestion = (question) => {
//     sendMessage(question);
//   };
  
//   return {
//     messages,
//     isLoading,
//     language,
//     chatContainerRef,
//     sendMessage,
//     clearMessages,
//     setLanguage,
//     handleSampleQuestion
//   };
// };

// export default useChat; 

// import { useState, useEffect, useRef, useCallback } from 'react';
// import { useSession } from '../contexts/SessionContext';
// import { askLLMApi } from '../services/apiService';

// /**
//  * 채팅 기능을 관리하는 커스텀 훅
//  * @param {string} serviceId - 서비스 식별자
//  * @returns {Object} 채팅 관련 상태와 함수
//  */
// const useChat = (serviceId) => {
//   const { sessionState, updateSessionState } = useSession();
//   const [isLoading, setIsLoading] = useState(false);
//   const chatContainerRef = useRef(null);

//   const messages = sessionState[`${serviceId}_messages`] || [];
//   const language = sessionState[`${serviceId}_language`] || 'ko';

//   const saveMessages = (newMessages) => {
//     updateSessionState(`${serviceId}_messages`, newMessages);
//   };

//   const setLanguage = (newLanguage) => {
//     updateSessionState(`${serviceId}_language`, newLanguage);
//   };

//   const clearMessages = () => {
//     saveMessages([]);
//   };

//   // ✅ 하단 자동 스크롤 함수
//   const scrollToBottom = useCallback(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, []);

//   // 메시지나 로딩 상태 바뀔 때마다 스크롤
//   useEffect(() => {
//     scrollToBottom();
//     const timer1 = setTimeout(scrollToBottom, 0);
//     const timer2 = setTimeout(scrollToBottom, 100);
//     const timer3 = setTimeout(scrollToBottom, 300);
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, [messages, isLoading, scrollToBottom]);

//   const sendMessage = async (query) => {
//     if (!query.trim()) return;

//     const userMessage = { role: 'user', content: query };
//     const updatedMessages = [...messages, userMessage];
//     saveMessages(updatedMessages);
//     scrollToBottom();

//     setIsLoading(true);
//     try {
//       const result = await askLLMApi(query, language);

//       const assistantMessage = {
//         role: 'assistant',
//         content: result.success
//           ? result.data.result || '응답을 받지 못했습니다.'
//           : `오류가 발생했습니다: ${result.error || '알 수 없는 오류'}`,
//         isError: !result.success
//       };

//       saveMessages([...updatedMessages, assistantMessage]);
//       scrollToBottom();
//     } catch (error) {
//       console.error('메시지 전송 중 오류:', error);
//       const errorMessage = {
//         role: 'assistant',
//         content: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
//         isError: true
//       };
//       saveMessages([...updatedMessages, errorMessage]);
//       scrollToBottom();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSampleQuestion = (question) => {
//     sendMessage(question);
//   };

//   return {
//     messages,
//     isLoading,
//     language,
//     chatContainerRef,
//     sendMessage,
//     clearMessages,
//     setLanguage,
//     handleSampleQuestion
//   };
// };

// export default useChat;

// import { useState, useEffect, useRef, useCallback } from 'react';
// import { useSession } from '../contexts/SessionContext';
// import { askLLMApi } from '../services/apiService';

// /**
//  * 채팅 기능을 관리하는 커스텀 훅
//  * @param {string} serviceId - 서비스 식별자
//  * @returns {Object} 채팅 관련 상태와 함수
//  */
// const useChat = (serviceId) => {
//   const { sessionState, updateSessionState } = useSession();
//   const [isLoading, setIsLoading] = useState(false);
//   const chatContainerRef = useRef(null);

//   const messages = sessionState[`${serviceId}_messages`] || [];
//   const language = sessionState[`${serviceId}_language`] || 'ko';

//   const saveMessages = (newMessages) => {
//     updateSessionState(`${serviceId}_messages`, newMessages);
//   };

//   const setLanguage = (newLanguage) => {
//     updateSessionState(`${serviceId}_language`, newLanguage);
//   };

//   const clearMessages = () => {
//     saveMessages([]);
//   };

//   /**
//    * 하단 자동 스크롤 (force: true일 때는 무조건 스크롤)
//    */
//   const scrollToBottom = useCallback((force = false) => {
//     const container = chatContainerRef.current;
//     if (container) {
//       const isNearBottom =
//         container.scrollHeight - container.scrollTop - container.clientHeight < 100;

//       if (force || isNearBottom) {
//         container.scrollTop = container.scrollHeight;
//       }
//     }
//   }, []);

//   /**
//    * 메시지 추가될 때 하단 스크롤
//    */
//   useEffect(() => {
//     scrollToBottom();
//     const timer = setTimeout(() => scrollToBottom(), 100);
//     return () => clearTimeout(timer);
//   }, [messages, isLoading, scrollToBottom]);

//   const sendMessage = async (query) => {
//     if (!query.trim()) return;

//     const userMessage = { role: 'user', content: query };
//     const updatedMessages = [...messages, userMessage];
//     saveMessages(updatedMessages);
//     scrollToBottom(true); // 무조건 스크롤

//     setIsLoading(true);
//     try {
//       const result = await askLLMApi(query, language);

//       const assistantMessage = {
//         role: 'assistant',
//         content: result.success
//           ? result.data.result || '응답을 받지 못했습니다.'
//           : `오류가 발생했습니다: ${result.error || '알 수 없는 오류'}`,
//         isError: !result.success
//       };

//       saveMessages([...updatedMessages, assistantMessage]);
//       scrollToBottom(true); // 무조건 스크롤
//     } catch (error) {
//       console.error('메시지 전송 중 오류:', error);
//       const errorMessage = {
//         role: 'assistant',
//         content: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
//         isError: true
//       };
//       saveMessages([...updatedMessages, errorMessage]);
//       scrollToBottom(true); // 무조건 스크롤
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSampleQuestion = (question) => {
//     sendMessage(question);
//   };

//   return {
//     messages,
//     isLoading,
//     language,
//     chatContainerRef,
//     sendMessage,
//     clearMessages,
//     setLanguage,
//     handleSampleQuestion
//   };
// };

// export default useChat;

import { useState, useEffect, useRef, useCallback } from 'react';
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
  const bottomRef = useRef(null); // ✅ 추가

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
      const result = await askLLMApi(query, language);

      const assistantMessage = {
        role: 'assistant',
        content: result.success
          ? result.data.result || '응답을 받지 못했습니다.'
          : `오류가 발생했습니다: ${result.error || '알 수 없는 오류'}`,
        isError: !result.success
      };

      saveMessages([...updatedMessages, assistantMessage]);
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

  const handleSampleQuestion = (question) => {
    sendMessage(question);
  };

  return {
    messages,
    isLoading,
    language,
    chatContainerRef,
    bottomRef, // ✅ 추가
    sendMessage,
    clearMessages,
    setLanguage,
    handleSampleQuestion
  };
};

export default useChat;
