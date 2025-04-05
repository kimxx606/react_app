import React from 'react';
import './D2CMainPage.css';

const D2CMainPage = () => {
  return (
    <div className="d2c-main-page">
      <div className="page-header">
        <h1>DX Automation for D2C</h1>
        <p className="subtitle">데이터 기반 고객 관계 자동화 솔루션</p>
      </div>

      <div className="feature-section">
        <h2>주요 기능</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>고객 데이터 통합</h3>
            <p>다양한 소스의 고객 데이터를 통합하여 단일 뷰에서 관리할 수 있습니다.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔄</div>
            <h3>자동화 워크플로우</h3>
            <p>복잡한 고객 여정을 자동화하여 효율적인 마케팅 운영이 가능합니다.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📱</div>
            <h3>옴니채널 경험</h3>
            <p>모든 접점에서 일관된 고객 경험을 제공하도록 설계되었습니다.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🧠</div>
            <h3>AI 기반 분석</h3>
            <p>고급 AI 알고리즘을 활용하여 고객 행동을 예측하고 인사이트를 도출합니다.</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>효과적인 D2C 전략</h2>
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-value">42%</span>
            <span className="stat-label">고객 유지율 증가</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3.5x</span>
            <span className="stat-label">ROI 향상</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">67%</span>
            <span className="stat-label">마케팅 자동화 효율</span>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>지금 시작해보세요</h2>
        <p>DX Automation for D2C 솔루션으로 고객 중심의 비즈니스 혁신을 경험해보세요.</p>
        <button className="demo-button">데모 요청하기</button>
      </div>
    </div>
  );
};

export default D2CMainPage; 