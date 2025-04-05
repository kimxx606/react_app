import React from 'react';
import './D2CMainPage.css';

// 제목과 부제목, 섹션 제목들을 상수로 분리하여 정의하고 내보냅니다
export const PAGE_TITLE = "DX Automation for D2C";
export const PAGE_SUBTITLE = "D2C 매출 현황 및 원인 분석 도구";

// 섹션 제목들도 상수로 분리
export const SECTION_TITLES = {
  SERVICE_OVERVIEW: "서비스 개요",
  MAIN_FEATURES: "주요 기능"
};

// 푸터 정보를 상수로 분리
export const FOOTER_INFO = "© 2025 Intellytics AI Agent | 버전 1.0.0 | DX센터 AI빅데이터담당 AX기술팀";

// 서비스 설명을 상수로 분리
export const SERVICE_DESCRIPTION = 
  "해외법인에서 운영하는 OBS (Online Brand Shop)에서 수집되는 매출 및 고객웹행동 데이터를 기반으로 " +
  "매출현황과 판매량을 법인전체/제품군/모델 단위로 파악하고, 매출하락 등의 이슈에 대한 원인을 OBS Funnel 단계 " +
  "및 OBS 유입 채널 관점에서 파악하고 해결방안을 제시합니다.";

// 서비스 기능 카드 데이터를 상수로 분리
export const FEATURE_CARDS = [
  {
    icon: "📊",
    title: "Sales Status",
    description: [
      "법인전체 매출현황/판매량 파악",
      "제품군별 매출현황/판매량 파악",
      "모델별 매출현황/판매량 파악",
      "기간 단위(일, 주, 월, 년)별 집계 및 비교"
    ]
  },
  {
    icon: "🔍",
    title: "Fallout Analysis",
    description: [
      "OBS Funnel 단계 관점 원인 분석",
      "OBS 유입 채널 관점 원인 분석",
      "주요 원인 별 해결방안 제시"
    ]
  }
];

const D2CMainPage = () => {
  // 기능 카드 표시 여부
  const showFeatureCards = true;

  return (
    <div className="d2c-main-page">
      <div className="page-header">
        <h1>{PAGE_TITLE}</h1>
        <p className="subtitle">{PAGE_SUBTITLE}</p>
      </div>

      <div className="feature-section">
        <h2>{SECTION_TITLES.SERVICE_OVERVIEW}</h2>
        <div className="service-description-container">
          <p className="service-description">{SERVICE_DESCRIPTION}</p>
          <div className="service-tags">
            <span className="service-tag">매출 분석</span>
            <span className="service-tag">OBS Funnel</span>
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

export default D2CMainPage; 