import React from 'react';
import './D2CPages.css';

const AccountPage = () => {
  return (
    <div className="d2c-page account-page">
      <div className="page-header">
        <h1>계정 설정</h1>
        <p className="subtitle">D2C 서비스 계정을 관리하세요</p>
      </div>
      
      <div className="section">
        <h2>계정 정보</h2>
        <div className="account-info">
          <div className="profile-section">
            <div className="profile-image">👤</div>
            <div className="profile-details">
              <h3>홍길동</h3>
              <p>user@example.com</p>
              <p>마지막 로그인: 2023-06-15 14:30</p>
            </div>
            <button className="action-button">프로필 수정</button>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>설정</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🔒</div>
            <h3>보안 설정</h3>
            <p>비밀번호 변경 및 2단계 인증 설정을 관리할 수 있습니다.</p>
            <button className="action-button">보안 관리</button>
          </div>
          <div className="card">
            <div className="card-icon">🔔</div>
            <h3>알림 설정</h3>
            <p>이메일, 앱 내 알림 등의 알림 설정을 관리할 수 있습니다.</p>
            <button className="action-button">알림 관리</button>
          </div>
          <div className="card">
            <div className="card-icon">🔑</div>
            <h3>API 키 관리</h3>
            <p>서비스 연동을 위한 API 키를 생성하고 관리할 수 있습니다.</p>
            <button className="action-button">API 키 생성</button>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>구독 정보</h2>
        <div className="subscription-info">
          <div className="plan-card active">
            <div className="plan-header">
              <h3>프로 플랜</h3>
              <div className="plan-badge">현재 사용중</div>
            </div>
            <div className="plan-features">
              <p>✓ 무제한 프로젝트</p>
              <p>✓ 고급 분석 기능</p>
              <p>✓ 우선 기술지원</p>
              <p>✓ 팀 협업 기능</p>
            </div>
            <div className="plan-price">
              <span className="price">$49</span> / 월
            </div>
            <button className="open-button">플랜 변경</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage; 