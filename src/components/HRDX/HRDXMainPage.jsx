import React from 'react';
import './HRDXMainPage.css';

// 제목과 부제목, 섹션 제목들을 상수로 분리하여 정의하고 내보냅니다
export const PAGE_TITLE = "HRDX";
export const PAGE_SUBTITLE = "HR 질의 및 교육 추천 서비스";

// 섹션 제목들도 상수로 분리
export const SECTION_TITLES = {
  SERVICE_OVERVIEW: "서비스 개요",
  MAIN_FEATURES: "주요 기능"
};

// 푸터 정보를 상수로 분리
export const FOOTER_INFO = "© 2025 Intellytics AI Agent | 버전 1.0.0 | DX센터 AI빅데이터담당 AX기술팀";

// 서비스 설명을 상수로 분리
export const SERVICE_DESCRIPTION = 
  "HR portal, EC 등에 산재한 나의 HR데이터를 종합해 경력, 강점/보완점, 소속 부서 핵심업무 등을 찾아볼 수 있는 개인 HR데이터 검색 서비스 API로서, 이를 이용해 더욱 고도의 HR서비스를 구현할 수 있습니다.";

// 서비스 기능 카드 데이터를 상수로 분리
export const FEATURE_CARDS = [
  {
    icon: "💬",
    title: "HRDX 질의",
    description: [
      "개인 업무 경험 요약",
      "개인 업무 성과 요약"
    ]
  },
  {
    icon: "🌱",
    title: "HRDX 교육 추천",
    description: [
      "업무 경험 기반 교육 추천"
    ]
  }
];

const HRDXMainPage = () => {
  // 기능 카드 표시 여부
  const showFeatureCards = true;

  return (
    <div className="hrdx-main-page">
      <div className="page-header">
        <h1>{PAGE_TITLE}</h1>
        <p className="subtitle">{PAGE_SUBTITLE}</p>
      </div>

      <div className="feature-section">
        <h2>{SECTION_TITLES.SERVICE_OVERVIEW}</h2>
        <div className="service-description-container">
          <p className="service-description">{SERVICE_DESCRIPTION}</p>
          <div className="service-tags">
            <span className="service-tag">인력 분석</span>
            <span className="service-tag">이직 예측</span>
            <span className="service-tag">원인 분석</span>
            <span className="service-tag">해결방안 제시</span>
          </div>
        </div>
      </div>

      <div className="feature-section">
        <h2>{SECTION_TITLES.MAIN_FEATURES}</h2>
        <div className="feature-grid">
          {FEATURE_CARDS.map((card, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <ul className="feature-list">
                {card.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <footer className="page-footer">
        <p>{FOOTER_INFO}</p>
      </footer>
    </div>
  );
};

export default HRDXMainPage; 