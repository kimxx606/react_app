import React, { useState } from 'react';
import { useSession } from '../../contexts/SessionContext';
import LanguageSelector from '../UI/LanguageSelector';
import ResetButton from '../UI/ResetButton';
import { SidebarPage1Extra, SidebarPage2Extra } from '../Chat/ChatInterface';

const Sidebar = ({ serviceId, onSelectPage, activePage }) => {
  const { sessionState } = useSession();
  const [isPage2MenuOpen, setIsPage2MenuOpen] = useState(activePage === 'page2-workspace' || activePage === 'page2-account');
  
  // 사이드바 안내 정보
  const SIDEBAR_SEARCHING_GUIDE = `
    <p>이 서비스를 통해 다양한 질문을 할 수 있습니다.</p>
    <p>질문을 입력하거나 대표 질문을 선택하여 시작하세요.</p>
    <p><strong>원하는 정보를 구체적으로 요청할수록 더 정확한 답변을 받을 수 있습니다.</strong></p>
  `;

  const handlePage2Click = () => {
    // 하위 메뉴 토글 (펼치거나 접기)
    setIsPage2MenuOpen(!isPage2MenuOpen);
    // 현재 메뉴가 활성화되어 있지 않은 경우에만 페이지 이동
    if (!isPage2Active) {
      onSelectPage('page2-workspace');
    }
  };

  const isPage2Active = activePage === 'page2-workspace' || activePage === 'page2-account';

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Service</h2>
      </div>

      {/* ✅ 페이지 전환 메뉴 */}
      <div className="sidebar-section service-menu">
        <ul className="sidebar-menu">
          <li
            className={activePage === 'page1' ? 'active' : ''}
            onClick={() => onSelectPage('page1')}
          >
            B2B Query
          </li>
          <li
            className={`submenu-parent ${isPage2Active ? 'active' : ''}`}
            onClick={handlePage2Click}
          >
            <div className="menu-header">
              <span>DX Automation for D2C</span>
              <span className={`menu-arrow ${isPage2MenuOpen ? 'open' : ''}`}>
                ▼
              </span>
            </div>
          </li>
          
          {/* 하위 메뉴 - 부모 li 외부로 이동 */}
          {isPage2MenuOpen && (
            <div className="submenu-container">
              <div className={`submenu ${isPage2MenuOpen ? 'open' : ''}`}>
                <ul>
                  <li 
                    className={activePage === 'page2-workspace' ? 'active' : ''}
                    onClick={(e) => {
                      onSelectPage('page2-workspace');
                    }}
                  >
                    Workspace
                  </li>
                  <li 
                    className={activePage === 'page2-account' ? 'active' : ''}
                    onClick={(e) => {
                      onSelectPage('page2-account');
                    }}
                  >
                    Account
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </div>

      {/* 안내 텍스트 */}
      {/* <div className="sidebar-section guide">
        <div
          className="sidebar-guide-text"
          dangerouslySetInnerHTML={{ __html: SIDEBAR_SEARCHING_GUIDE }}
        />
      </div> */}

      {/* 설정 영역 */}
      <div className="sidebar-section settings">
        <h3>설정</h3>
        <div className="setting-item">
          <LanguageSelector serviceId={serviceId} />
        </div>
        <div className="setting-item">
          <ResetButton serviceId={serviceId} />
        </div>
      </div>

      {/* 각 페이지에 해당하는 사이드바 내용 표시 */}
      {activePage === 'page1' && (
        <div className="sidebar-section page1-extra">
          <SidebarPage1Extra />
        </div>
      )}
      
      {isPage2Active && (
        <div className="sidebar-section page2-extra">
          <SidebarPage2Extra />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
