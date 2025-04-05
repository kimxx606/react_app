import React from 'react';
import './MelleriSearchMainPage.css';

// 제목과 부제목, 섹션 제목들을 상수로 분리하여 정의하고 내보냅니다
export const PAGE_TITLE = "MelleriSearch";
export const PAGE_SUBTITLE = "지능형 데이터 검색 및 분석 시스템";

// 섹션 제목들도 상수로 분리
export const SECTION_TITLES = {
  SERVICE_OVERVIEW: "서비스 개요",
  MAIN_FEATURES: "주요 기능"
};

// 푸터 정보를 상수로 분리
export const FOOTER_INFO = "© 2025 Mellerikat AI Technologies | 버전 1.2.0 | 검색 빅데이터 연구소";

// 서비스 설명을 상수로 분리
export const SERVICE_DESCRIPTION = 
  "MelleriSearch는 복잡한 기업 데이터를 쉽고 빠르게 검색하고 분석할 수 있는 지능형 검색 시스템입니다. " +
  "자연어 기반 검색과 강력한 분석 기능을 통해 비정형 데이터의 패턴을 발견하고, 실시간으로 통찰력 있는 정보를 제공합니다. " +
  "다양한 데이터 소스를 통합 관리하며 사용자 친화적인 인터페이스로 빠른 의사결정을 지원합니다.";

// 서비스 기능 카드 데이터를 상수로 분리
export const FEATURE_CARDS = [
  {
    icon: "🔍",
    title: "지능형 검색",
    description: [
      "자연어 기반 검색 기능",
      "다국어 지원 및 의미 분석",
      "컨텍스트 기반 검색 결과 제공",
      "실시간 검색 제안 및 자동 완성"
    ]
  },
  {
    icon: "📊",
    title: "데이터 분석",
    description: [
      "통합 데이터 대시보드",
      "트렌드 및 패턴 시각화",
      "맞춤형 리포트 생성",
      "예측 분석 및 인사이트 도출"
    ]
  },
  {
    icon: "🔄",
    title: "데이터 통합",
    description: [
      "다양한 데이터 소스 연결",
      "실시간 데이터 동기화",
      "구조화/비구조화 데이터 처리",
      "안전한 데이터 접근 관리"
    ]
  }
];

const MelleriSearchMainPage = () => {
  // 기능 카드 표시 여부
  const showFeatureCards = true;

  return (
    <div className="melleri-search-main-page">
      <div className="page-header">
        <h1>{PAGE_TITLE}</h1>
        <p className="subtitle">{PAGE_SUBTITLE}</p>
      </div>

      <div className="feature-section">
        <h2>{SECTION_TITLES.SERVICE_OVERVIEW}</h2>
        <div className="service-description-container">
          <p className="service-description">{SERVICE_DESCRIPTION}</p>
          <div className="service-tags">
            <span className="service-tag">지능형 검색</span>
            <span className="service-tag">데이터 분석</span>
            <span className="service-tag">통합 대시보드</span>
            <span className="service-tag">자연어 처리</span>
            <span className="service-tag">실시간 인사이트</span>
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

export default MelleriSearchMainPage; 