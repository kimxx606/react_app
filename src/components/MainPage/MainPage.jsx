import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page-container">
        <div className="main-header">
          <h1>Intellytics AI Agent</h1>
          <p className="subtitle">LLM 기반 인텔리전트 서비스 테스트 플랫폼</p>
        </div>

        <div className="main-section">
          <h2>서비스 개요</h2>
          <p>
            이 프론트엔드는 DX센터 AI빅데이터담당에서 개발되는 다양한 LLM 서비스 API를 테스트하고 검증하기 위한 
            용도로 제작되었습니다. 현재 개발 중인 테스트 및 데모 목적의 내부 검증용 도구이며, 최종 사용자 배포용이 아닙니다.
          </p>
        </div>
        
        <div className="main-section">
          <h2>서비스 가이드</h2>
          
          <div className="guide-subsection">
            <h3>사용 방법</h3>
            <ol>
              <li>좌측 사이드바에서 원하는 서비스를 선택합니다.</li>
              <li>선택한 서비스의 테스트 화면으로 이동하여 사용자 질문을 입력합니다.</li>
              <li>전송하기 버튼을 눌러 해당 서비스의 API 요청을 실행합니다.</li>
              <li>결과를 확인하고 필요한 피드백을 제공합니다.</li>
            </ol>
          </div>
          
          <div className="guide-subsection">
            <h3>주의 사항</h3>
            <ul>
              <li>본 프론트엔드는 내부 검증용으로만 사용됩니다.</li>
              <li>테스트 중 발생하는 오류 및 서비스 응답 시간을 점검하며, 피드백을 남겨 주세요.</li>
              <li>API 연결 상태는 변경될 수 있으며, 일부 기능이 제한될 수 있습니다.</li>
            </ul>
          </div>
        </div>

        <div className="services-section">
          <h2>제공 서비스</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>B2B Query</h3>
              <p>비즈니스 검색 및 분석을 위한 특화된 질의응답 서비스</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>DX Automation for D2C</h3>
              <p>고객 경험 자동화 및 직접 소비자 연결 솔루션</p>
            </div>
          </div>
        </div>

        <footer className="main-footer">
          <p>© 2025 Intellytics AI Agent | 버전 1.0.0 | DX센터 AI빅데이터담당</p>
        </footer>
      </div>
    </div>
  );
};

export default MainPage; 