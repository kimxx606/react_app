import React, { useState } from 'react';
import { useSession } from '../../contexts/SessionContext';
import LanguageSelector from '../UI/LanguageSelector';
import ResetButton from '../UI/ResetButton';
import { SidebarB2BQueryExtra } from '../B2B/Service_B2B_Query';
import { SidebarD2CExtra } from '../D2C/Service_D2C_Sales';
import { SidebarD2CFalloutExtra } from '../D2C/Service_D2C_Fallout';

const Sidebar = ({ serviceId, onSelectPage, activePage }) => {
  const { sessionState } = useSession();
  const [isPage2MenuOpen, setIsPage2MenuOpen] = useState(activePage === 'page-d2c-main' || activePage === 'page-d2c-sales' || activePage === 'page-d2c-account');
  
  // 사이드바 안내 정보
  const SIDEBAR_SEARCHING_GUIDE = `
    <p>이 서비스를 통해 다양한 질문을 할 수 있습니다.</p>
  `;

  const handlePage2Click = () => {
    // 하위 메뉴 토글 (펼치거나 접기)
    setIsPage2MenuOpen(!isPage2MenuOpen);
    // D2C 메인 페이지로 이동
    onSelectPage('page-d2c-main');
  };

  const isPage2Active = activePage === 'page-d2c-main' || activePage === 'page-d2c-sales' || activePage === 'page-d2c-account';
  const isPage2Active_sub = activePage === 'page-d2c-sales' || activePage === 'page-d2c-account';

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Service</h2>
      </div>

      {/* ✅ 페이지 전환 메뉴 */}
      <div className="sidebar-section service-menu">
        <ul className="sidebar-menu">
          <li
            className={activePage === 'page-b2b-query' ? 'active' : ''}
            onClick={() => onSelectPage('page-b2b-query')}
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
                    className={activePage === 'page-d2c-sales' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-d2c-sales');
                    }}
                  >
                    D2C - Sales Status
                  </li>
                  <li 
                    className={activePage === 'page-d2c-account' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-d2c-account');
                    }}
                  >
                    D2C - Fallout Analysis
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

      {/* 설정 영역 - B2B Query 또는 DX Automation for D2C의 하위 메뉴가 선택되었을 때 표시 */}
      {(activePage === 'page-b2b-query' || isPage2Active_sub) && (
        <div className="sidebar-section settings">
          <h3>설정</h3>
          <div className="setting-item">
            <LanguageSelector serviceId={serviceId} />
          </div>
          <div className="setting-item">
            <ResetButton serviceId={serviceId} />
          </div>
        </div>
      )}

      {/* 각 페이지에 해당하는 사이드바 내용 표시 */}
      {activePage === 'page-b2b-query' && (
        <div className="sidebar-section page-b2b-query-extra">
          <SidebarB2BQueryExtra />
        </div>
      )}
      
      {activePage === 'page-d2c-sales' && (
        <div className="sidebar-section page-d2c-extra">
          <SidebarD2CExtra />
        </div>
      )}
      
      {activePage === 'page-d2c-account' && (
        <div className="sidebar-section page-d2c-fallout-extra">
          <SidebarD2CFalloutExtra />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
