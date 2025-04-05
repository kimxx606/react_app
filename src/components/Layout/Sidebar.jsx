import React, { useState } from 'react';
import { useSession } from '../../contexts/SessionContext';
import LanguageSelector from '../UI/LanguageSelector';
import ResetButton from '../UI/ResetButton';
import { SidebarB2BQueryExtra } from '../B2B/Service_B2B_Query';
import { SidebarD2CExtra } from '../D2C/Service_D2C_Sales';
import { SidebarD2CFalloutExtra } from '../D2C/Service_D2C_Fallout';
import { SidebarHRDXQnAExtra } from '../HRDX/Service_HRDX_QnA';
import { SidebarHRDXRecommandExtra } from '../HRDX/Service_HRDX_Recommand';
import { SidebarMellerikatAssistantExtra } from '../MelleriAssistant/Service_Mellerikat_Assistant';
import { SidebarMelleriSearchRegisterExtra } from '../MelleriSearch/Service_MelleriSearch_Register';
import { SidebarMelleriSearchSearchExtra } from '../MelleriSearch/Service_MelleriSearch_Search';
import { SidebarSGAnalysisExtra } from '../SurveyGenius/Service_SG_Analysis';
import { SidebarSGGenerationExtra } from '../SurveyGenius/Service_SG_Generation';
import { SidebarVOCAnalysisExtra } from '../VOCAnalysis/Service_VOC_Analysis';
import { SidebarChatbotGenerationExtra } from '../ChatbotGeneration/Service_Chatbot_Generation';
import { SidebarYourChatbotExtra } from '../YourChatbot/Service_Your_Chatbot';

const Sidebar = ({ serviceId, onSelectPage, activePage }) => {
  const { sessionState } = useSession();
  const [isPage2MenuOpen, setIsPage2MenuOpen] = useState(activePage === 'page-d2c-main' || activePage === 'page-d2c-sales' || activePage === 'page-d2c-account');
  const [isHRDXMenuOpen, setIsHRDXMenuOpen] = useState(activePage === 'page-hrdx-main' || activePage === 'page-hrdx-qna' || activePage === 'page-hrdx-recommand');
  const [isMelleriSearchMenuOpen, setIsMelleriSearchMenuOpen] = useState(activePage === 'page-melleri-search' || activePage === 'page-melleri-search-register' || activePage === 'page-melleri-search-search');
  const [isSGMenuOpen, setIsSGMenuOpen] = useState(activePage === 'page-survey-genius' || activePage === 'page-sg-analysis' || activePage === 'page-sg-generation');
  
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

  const handleHRDXClick = () => {
    // 하위 메뉴 토글 (펼치거나 접기)
    setIsHRDXMenuOpen(!isHRDXMenuOpen);
    // HRDX 메인 페이지로 이동
    onSelectPage('page-hrdx-main');
  };

  const handleMelleriSearchClick = () => {
    // 하위 메뉴 토글 (펼치거나 접기)
    setIsMelleriSearchMenuOpen(!isMelleriSearchMenuOpen);
    // MelleriSearch 메인 페이지로 이동
    onSelectPage('page-melleri-search');
  };

  const handleSGClick = () => {
    // 하위 메뉴 토글 (펼치거나 접기)
    setIsSGMenuOpen(!isSGMenuOpen);
    // Survey Genius 메인 페이지로 이동
    onSelectPage('page-survey-genius');
  };

  const isPage2Active = activePage === 'page-d2c-main' || activePage === 'page-d2c-sales' || activePage === 'page-d2c-account';
  const isPage2Active_sub = activePage === 'page-d2c-sales' || activePage === 'page-d2c-account';
  
  const isHRDXActive = activePage === 'page-hrdx-main' || activePage === 'page-hrdx-qna' || activePage === 'page-hrdx-recommand';
  const isHRDXActive_sub = activePage === 'page-hrdx-qna' || activePage === 'page-hrdx-recommand';
  
  const isMelleriSearchActive = activePage === 'page-melleri-search' || activePage === 'page-melleri-search-register' || activePage === 'page-melleri-search-search';
  const isMelleriSearchActive_sub = activePage === 'page-melleri-search-register' || activePage === 'page-melleri-search-search';
  
  const isSGActive = activePage === 'page-survey-genius' || activePage === 'page-sg-analysis' || activePage === 'page-sg-generation';
  const isSGActive_sub = activePage === 'page-sg-analysis' || activePage === 'page-sg-generation';

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
            className={activePage === 'page-voc-analysis' ? 'active' : ''}
            onClick={() => onSelectPage('page-voc-analysis')}
          >
            VOC Analysis
          </li>
          <li
            className={activePage === 'page-mellerikat-assistant' ? 'active' : ''}
            onClick={() => onSelectPage('page-mellerikat-assistant')}
          >
            Mellerikat Assistant
          </li>
          <li
            className={`submenu-parent ${isSGActive ? 'active' : ''}`}
            onClick={handleSGClick}
          >
            <div className="menu-header">
              <span>Survey Genius</span>
              <span className={`menu-arrow ${isSGMenuOpen ? 'open' : ''}`}>
                ▼
              </span>
            </div>
          </li>
          
          {/* Survey Genius 하위 메뉴 */}
          {isSGMenuOpen && (
            <div className="submenu-container">
              <div className={`submenu ${isSGMenuOpen ? 'open' : ''}`}>
                <ul>
                  <li 
                    className={activePage === 'page-sg-generation' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-sg-generation');
                    }}
                  >
                    Survey Genius - 설문 생성 서비스
                  </li>
                  <li 
                    className={activePage === 'page-sg-analysis' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-sg-analysis');
                    }}
                  >
                    Survey Genius - 설문 결과 분석 서비스
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          <li
            className={`submenu-parent ${isMelleriSearchActive ? 'active' : ''}`}
            onClick={handleMelleriSearchClick}
          >
            <div className="menu-header">
              <span>MelleriSearch</span>
              <span className={`menu-arrow ${isMelleriSearchMenuOpen ? 'open' : ''}`}>
                ▼
              </span>
            </div>
          </li>
          
          {/* MelleriSearch 하위 메뉴 */}
          {isMelleriSearchMenuOpen && (
            <div className="submenu-container">
              <div className={`submenu ${isMelleriSearchMenuOpen ? 'open' : ''}`}>
                <ul>
                  <li 
                    className={activePage === 'page-melleri-search-search' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-melleri-search-search');
                    }}
                  >
                    MelleriSearch - 검색 서비스
                  </li>
                  <li 
                    className={activePage === 'page-melleri-search-register' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-melleri-search-register');
                    }}
                  >
                    MelleriSearch - 데이터 등록
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          <li
            className={`submenu-parent ${isHRDXActive ? 'active' : ''}`}
            onClick={handleHRDXClick}
          >
            <div className="menu-header">
              <span>HRDX</span>
              <span className={`menu-arrow ${isHRDXMenuOpen ? 'open' : ''}`}>
                ▼
              </span>
            </div>
          </li>
          
          {/* HRDX 하위 메뉴 */}
          {isHRDXMenuOpen && (
            <div className="submenu-container">
              <div className={`submenu ${isHRDXMenuOpen ? 'open' : ''}`}>
                <ul>
                  <li 
                    className={activePage === 'page-hrdx-qna' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-hrdx-qna');
                    }}
                  >
                    HRDX - 질의 서비스
                  </li>
                  <li 
                    className={activePage === 'page-hrdx-recommand' ? 'active' : ''}
                    onClick={(e) => {
                      e.stopPropagation(); // 상위 메뉴 클릭 이벤트 전파 방지
                      onSelectPage('page-hrdx-recommand');
                    }}
                  >
                    HRDX - 교육 추천 서비스
                  </li>
                </ul>
              </div>
            </div>
          )}
          
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
          
          {/* D2C 하위 메뉴 */}
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

      <div className="sidebar-header">
        <h2>TOOL</h2>
      </div>

      {/* TOOL 아래 메뉴 */}
      <div className="sidebar-section tool-menu">
        <ul className="sidebar-menu">
          <li
            className={activePage === 'page-chatbot-generation' ? 'active' : ''}
            onClick={() => onSelectPage('page-chatbot-generation')}
          >
            Chatbot Generation
          </li>
          <li
            className={activePage === 'page-your-chatbot' ? 'active' : ''}
            onClick={() => onSelectPage('page-your-chatbot')}
          >
            Your Chatbot
          </li>
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
      {(activePage === 'page-b2b-query' || isPage2Active_sub || isHRDXActive_sub || activePage === 'page-mellerikat-assistant' || isMelleriSearchActive_sub || isSGActive_sub || activePage === 'page-voc-analysis' || activePage === 'page-chatbot-generation' || activePage === 'page-your-chatbot') && (
        <div className="sidebar-section settings">
          <h3>설정</h3>
          <div className="setting-item">
            <LanguageSelector serviceId={
              activePage === 'page-hrdx-qna' ? 'llo-hrdx-qna' : 
              activePage === 'page-hrdx-recommand' ? 'llo-hrdx-recommand' : 
              activePage === 'page-mellerikat-assistant' ? 'melleri-assistant' : 
              activePage === 'page-melleri-search-register' ? 'melleri-search-register-demo' : 
              activePage === 'page-melleri-search-search' ? 'melleri-search-demo' : 
              activePage === 'page-sg-analysis' ? 'sg-analysis' : 
              activePage === 'page-sg-generation' ? 'sg-generation' : 
              activePage === 'page-voc-analysis' ? 'voc-analysis' : 
              activePage === 'page-chatbot-generation' ? 'chatbot-generation' : 
              activePage === 'page-your-chatbot' ? 'your-chatbot' : 
              serviceId
            } />
          </div>
          <div className="setting-item">
            <ResetButton serviceId={
              activePage === 'page-hrdx-qna' ? 'llo-hrdx-qna' : 
              activePage === 'page-hrdx-recommand' ? 'llo-hrdx-recommand' : 
              activePage === 'page-mellerikat-assistant' ? 'melleri-assistant' : 
              activePage === 'page-melleri-search-register' ? 'melleri-search-register-demo' : 
              activePage === 'page-melleri-search-search' ? 'melleri-search-demo' : 
              activePage === 'page-sg-analysis' ? 'sg-analysis' : 
              activePage === 'page-sg-generation' ? 'sg-generation' : 
              activePage === 'page-voc-analysis' ? 'voc-analysis' : 
              activePage === 'page-chatbot-generation' ? 'chatbot-generation' : 
              activePage === 'page-your-chatbot' ? 'your-chatbot' : 
              serviceId
            } />
          </div>
        </div>
      )}

      {/* 각 페이지에 해당하는 사이드바 내용 표시 */}
      {activePage === 'page-b2b-query' && (
        <div className="sidebar-section page-b2b-query-extra">
          <SidebarB2BQueryExtra />
        </div>
      )}
      
      {activePage === 'page-voc-analysis' && (
        <div className="sidebar-section page-voc-analysis-extra">
          <SidebarVOCAnalysisExtra />
        </div>
      )}
      
      {activePage === 'page-chatbot-generation' && (
        <div className="sidebar-section page-chatbot-generation-extra">
          <SidebarChatbotGenerationExtra />
        </div>
      )}
      
      {activePage === 'page-your-chatbot' && (
        <div className="sidebar-section page-your-chatbot-extra">
          <SidebarYourChatbotExtra />
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
      
      {activePage === 'page-hrdx-qna' && (
        <div className="sidebar-section page-hrdx-qna-extra">
          <SidebarHRDXQnAExtra />
        </div>
      )}
      
      {activePage === 'page-hrdx-recommand' && (
        <div className="sidebar-section page-hrdx-recommand-extra">
          <SidebarHRDXRecommandExtra />
        </div>
      )}

      {activePage === 'page-mellerikat-assistant' && (
        <div className="sidebar-section page-mellerikat-assistant-extra">
          <SidebarMellerikatAssistantExtra />
        </div>
      )}
      
      {activePage === 'page-melleri-search-search' && (
        <div className="sidebar-section page-melleri-search-search-extra">
          <SidebarMelleriSearchSearchExtra />
        </div>
      )}
      
      {activePage === 'page-melleri-search-register' && (
        <div className="sidebar-section page-melleri-search-register-extra">
          <SidebarMelleriSearchRegisterExtra />
        </div>
      )}
      
      {activePage === 'page-sg-analysis' && (
        <div className="sidebar-section page-sg-analysis-extra">
          <SidebarSGAnalysisExtra />
        </div>
      )}
      
      {activePage === 'page-sg-generation' && (
        <div className="sidebar-section page-sg-generation-extra">
          <SidebarSGGenerationExtra />
        </div>
      )}

    </aside>
  );
};

export default Sidebar;
