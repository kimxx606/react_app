import React from 'react';
import './D2CPages.css';

const WorkspacePage = () => {
  return (
    <div className="d2c-page workspace-page">
      <div className="page-header">
        <h1>D2C Workspace</h1>
        <p className="subtitle">효율적인 D2C 분석을 위한 작업 환경</p>
      </div>
      
      <div className="section">
        <h2>워크스페이스 관리</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">📁</div>
            <h3>프로젝트 관리</h3>
            <p>데이터 분석 프로젝트를 생성하고 관리할 수 있습니다.</p>
            <button className="action-button">프로젝트 생성</button>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>팀 협업</h3>
            <p>팀원들과 협업하여 분석 결과를 공유할 수 있습니다.</p>
            <button className="action-button">팀원 초대</button>
          </div>
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>데이터 시각화</h3>
            <p>고객 데이터를 다양한 형태로 시각화하여 인사이트를 얻을 수 있습니다.</p>
            <button className="action-button">대시보드 생성</button>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>최근 작업</h2>
        <div className="recent-list">
          <div className="recent-item">
            <div className="recent-icon">📑</div>
            <div className="recent-content">
              <h3>고객 세그먼트 분석</h3>
              <p>마지막 수정: 2023-06-15</p>
            </div>
            <button className="open-button">열기</button>
          </div>
          <div className="recent-item">
            <div className="recent-icon">📑</div>
            <div className="recent-content">
              <h3>구매 패턴 분석</h3>
              <p>마지막 수정: 2023-06-12</p>
            </div>
            <button className="open-button">열기</button>
          </div>
          <div className="recent-item">
            <div className="recent-icon">📑</div>
            <div className="recent-content">
              <h3>마케팅 성과 분석</h3>
              <p>마지막 수정: 2023-06-10</p>
            </div>
            <button className="open-button">열기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage; 