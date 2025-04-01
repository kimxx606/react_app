import React from 'react';
import { useSession } from '../../contexts/SessionContext';
import LanguageSelector from '../UI/LanguageSelector';
import ResetButton from '../UI/ResetButton';

const Sidebar = ({ serviceId }) => {
  const { sessionState } = useSession();
  
  // 사이드바 안내 정보
  const SIDEBAR_SEARCHING_GUIDE = `
    <p>이 서비스를 통해 다양한 질문을 할 수 있습니다.</p>
    <p>질문을 입력하거나 대표 질문을 선택하여 시작하세요.</p>
    <p><strong>원하는 정보를 구체적으로 요청할수록 더 정확한 답변을 받을 수 있습니다.</strong></p>
  `;
  
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>서비스 가이드</h2>
      </div>
      
      <div className="sidebar-content">
        <div className="sidebar-section guide">
          <div 
            className="sidebar-guide-text"
            dangerouslySetInnerHTML={{ __html: SIDEBAR_SEARCHING_GUIDE }}
          />
        </div>
        
        <div className="sidebar-section settings">
          <h3>설정</h3>
          <div className="setting-item">
            <LanguageSelector serviceId={serviceId} />
          </div>
          <div className="setting-item">
            <ResetButton serviceId={serviceId} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 