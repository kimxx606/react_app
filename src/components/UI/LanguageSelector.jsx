import React from 'react';
import { useSession } from '../../contexts/SessionContext';

const LanguageSelector = ({ serviceId }) => {
  const { sessionState, updateSessionState } = useSession();
  
  // 현재 언어 가져오기 (기본값: 한국어)
  const currentLanguage = sessionState[`${serviceId}_language`] || 'ko';
  
  // 언어 변경 핸들러
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    updateSessionState(`${serviceId}_language`, newLanguage);
  };
  
  return (
    <div className="language-selector">
      <label htmlFor="language-select">언어 선택:</label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector; 