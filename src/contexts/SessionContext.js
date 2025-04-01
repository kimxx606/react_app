import React, { createContext, useContext, useState, useEffect } from 'react';

// 세션 컨텍스트 생성
const SessionContext = createContext();

// 로컬 스토리지 키
const STORAGE_KEY = 'intellytics-session';

// 세션 제공자 컴포넌트
export const SessionProvider = ({ children }) => {
  // 로컬 스토리지에서 세션 상태 로드 또는 초기 상태 설정
  const [sessionState, setSessionState] = useState(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : {};
    } catch (error) {
      console.error('로컬 스토리지에서 세션 데이터를 로드하는 중 오류:', error);
      return {};
    }
  });

  // 세션 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionState));
    } catch (error) {
      console.error('세션 데이터를 로컬 스토리지에 저장하는 중 오류:', error);
    }
  }, [sessionState]);

  // 세션 상태 업데이트 함수
  const updateSessionState = (key, value) => {
    setSessionState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  // 세션 상태 초기화 함수 (특정 키만 또는 전체)
  const resetSessionState = (key = null) => {
    if (key) {
      setSessionState(prevState => {
        const newState = { ...prevState };
        delete newState[key];
        return newState;
      });
    } else {
      setSessionState({});
    }
  };

  // 컨텍스트 값
  const contextValue = {
    sessionState,
    updateSessionState,
    resetSessionState
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

// 세션 컨텍스트를 사용하기 위한 커스텀 훅
export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession은 SessionProvider 내에서 사용해야 합니다');
  }
  return context;
}; 