import React from 'react';
import './SGMainPage.css';

// 제목과 부제목, 섹션 제목들을 상수로 분리하여 정의하고 내보냅니다
export const PAGE_TITLE = "Survey Genius";
export const PAGE_SUBTITLE = "지능형 설문조사 생성 및 분석 도구";

// 섹션 제목들도 상수로 분리
export const SECTION_TITLES = {
  SERVICE_OVERVIEW: "서비스 개요",
  MAIN_FEATURES: "주요 기능"
};

// 푸터 정보를 상수로 분리
export const FOOTER_INFO = "© 2025 Survey Genius | 버전 1.0.0 | DX센터 AI빅데이터담당 AX기술팀";

// 서비스 설명을 상수로 분리
export const SERVICE_DESCRIPTION = 
  "Survey Genius는 인공지능을 활용하여 설문조사를 쉽고 효과적으로 생성, 배포, 분석할 수 있는 도구입니다. " +
  "사용자의 목적과 대상에 최적화된 설문지를 자동으로 생성하고, 수집된 데이터를 심층적으로 분석하여 " +
  "의미 있는 인사이트를 도출해냅니다. 복잡한 설문조사 과정을 간소화하고 보다 정확한 결과를 얻을 수 있습니다.";

// 서비스 기능 카드 데이터를 상수로 분리
export const FEATURE_CARDS = [
  {
    icon: "📝",
    title: "설문지 생성",
    description: [
      "목적 기반 맞춤형 설문 생성",
      "다양한 질문 유형 및 템플릿",
      "반응형 설문지 자동 생성",
      "다국어 지원 및 국제화"
    ]
  },
  {
    icon: "📊",
    title: "결과 분석",
    description: [
      "실시간 응답 모니터링",
      "데이터 시각화 및 리포트",
      "AI 기반 인사이트 도출",
      "교차 분석 및 세그먼트 분석"
    ]
  },
  {
    icon: "🔍",
    title: "고급 기능",
    description: [
      "감정 분석 및 텍스트 마이닝",
      "응답자 행동 패턴 분석",
      "맞춤형 추천 방안 제시",
      "데이터 기반 의사결정 지원"
    ]
  }
];

const SGMainPage = () => {
  // 기능 카드 표시 여부
  const showFeatureCards = true;

  return (
    <div className="sg-main-page">
      <div className="page-header">
        <h1>{PAGE_TITLE}</h1>
        <p className="subtitle">{PAGE_SUBTITLE}</p>
      </div>

      <div className="feature-section">
        <h2>{SECTION_TITLES.SERVICE_OVERVIEW}</h2>
        <div className="service-description-container">
          <p className="service-description">{SERVICE_DESCRIPTION}</p>
          <div className="service-tags">
            <span className="service-tag">설문 생성</span>
            <span className="service-tag">데이터 분석</span>
            <span className="service-tag">인사이트 도출</span>
            <span className="service-tag">의사결정 지원</span>
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

export default SGMainPage; 