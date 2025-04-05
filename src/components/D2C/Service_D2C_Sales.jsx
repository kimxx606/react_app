import React, { useState, useEffect } from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import './Service_D2C_Sales.css';

const Service_D2C_Sales = ({ serviceId, SidebarContent }) => {
  const SERVICE_NAME = {'ko': "D2C - Sales Status 서비스", "en": "D2C - Sales Status Service"};
  
  const SERVICE_DESCRIPTION = {
    "ko": `
<h3>서비스 개요</h3>
<p>해외법인에서 운영하는 OBS(Online Brand Shop)에서 수집되는 데이터를 기반으로 OBS 매출현황과 판매량을 법인 / 제품군 / 모델 단위로 집계 및 비교할 수 있는 서비스</p>

<h3>데이터 설명</h3>
<p><strong>해외영업본부</strong>에서 관리하고 <strong>EAP에 적재되어 있는 해외 OBS 판매데이터 정보</strong>를 결합하고 전처리하여, 제품의 모델코드별로 매출실적과 판매량을 집계함</p>

<table>
<thead>
  <tr>
    <td colspan="2" rowspan="2">데이터<br>테이블</td>
    <td colspan="3" style="text-align:center">재료(Raw)데이터</td>
    <td rowspan="7" style="text-align:center">→</td>
    <td style="text-align:center">전처리(CL2)데이터</td>
  </tr>
  <tr>
    <td>SALES_ORDER</td>
    <td>SALES_ORDER_ITEM</td>
    <td>SALES_ORDER_STATUS_HISTORY</td>
    <td>SALES_STATUS</td>
  </tr>
  <tr>
    <td rowspan="5">데이터 컬럼</td>
    <td>1</td>
    <td>STORE_NAME</td>
    <td>ORDER_ID</td>
    <td>STATUS</td>
    <td>MODEL_CODE</td>
  </tr>
  <tr>
    <td>2</td>
    <td>ENTITY_ID</td>
    <td>MODEL_CODE</td>
    <td>PARENT_ID</td>
    <td>CURRENCY_CODE</td>
  </tr>
  <tr>
    <td>3</td>
    <td>STATUS</td>
    <td>SALES_TOTAL</td>
    <td>CREATED_AT</td>
    <td>SALES_TOTAL</td>
  </tr>
  <tr>
    <td>4</td>
    <td>CREATED_AT</td>
    <td>CREATED_AT</td>
    <td>&nbsp;</td>
    <td>SALES_COUNT</td>
  </tr>
  <tr>
    <td>5</td>
    <td>CURRENCY_CODE</td>
    <td>CURRENCY_CODE</td>
    <td>&nbsp;</td>
    <td>DATE</td>
  </tr>
</thead>
</table>

<h3>사용 방법</h3>
<p>🔍 DX Automation for D2C 서비스 구현에 참여하고 싶으신 분들을 위해 <a href="http://mod.lge.com/hub/cx-llm/dx_d2c" target="_blank">개발 가이드</a>를 제공합니다.</p>

<p>본 서비스는 현재 <strong>2023년 6월 6일부터 2025년 2월 28일까지</strong>의 <strong>영국 법인의 매출 정보</strong>에 대해 질문할 수 있습니다.</p>
`,
    "en": `
<h3>Service Overview</h3>
<p>A service that can aggregate and compare OBS sales status and sales volume by corporation / product group / model unit based on data collected from OBS (Online Brand Shop) operated by overseas corporations.</p>

<h3>Data Description</h3>
<p>Managed by the <strong>Overseas Sales & Marketing Company</strong>, the overseas OBS sales data stored in <strong>EAP</strong> is combined and preprocessed to aggregate sales performance and volume by product model code.</p>

<table>
<thead>
  <tr>
    <td colspan="2" rowspan="2">Data<br>Table</td>
    <td colspan="3" style="text-align:center">Raw Data</td>
    <td rowspan="7" style="text-align:center">→</td>
    <td style="text-align:center">Preprocessed Data</td>
  </tr>
  <tr>
    <td>SALES_ORDER</td>
    <td>SALES_ORDER_ITEM</td>
    <td>SALES_ORDER_STATUS_HISTORY</td>
    <td>SALES_STATUS</td>
  </tr>
  <tr>
    <td rowspan="5">Data Columns</td>
    <td>1</td>
    <td>STORE_NAME</td>
    <td>ORDER_ID</td>
    <td>STATUS</td>
    <td>MODEL_CODE</td>
  </tr>
  <tr>
    <td>2</td>
    <td>ENTITY_ID</td>
    <td>MODEL_CODE</td>
    <td>PARENT_ID</td>
    <td>CURRENCY_CODE</td>
  </tr>
  <tr>
    <td>3</td>
    <td>STATUS</td>
    <td>SALES_TOTAL</td>
    <td>CREATED_AT</td>
    <td>SALES_TOTAL</td>
  </tr>
  <tr>
    <td>4</td>
    <td>CREATED_AT</td>
    <td>CREATED_AT</td>
    <td>&nbsp;</td>
    <td>SALES_COUNT</td>
  </tr>
  <tr>
    <td>5</td>
    <td>CURRENCY_CODE</td>
    <td>CURRENCY_CODE</td>
    <td>&nbsp;</td>
    <td>DATE</td>
  </tr>
</thead>
</table>

<h3>How to Use</h3>
<p>🔍 We provide a <a href="http://mod.lge.com/hub/cx-llm/dx_d2c" target="_blank">development guide</a> for those who wish to participate in the implementation of DX Automation for D2C services.</p>

<p>This service currently allows inquiries about <strong>UK sales information from November 2024 to February 2025.</strong></p>
`
  };

  const SAMPLE_QUESTIONS = {
    "ko":[
    "2024년 11월 셋째 주 제품군별 매출현황 보여줘.",
    "2024년 10월 대비 11월에 50인치 이상 TV 매출에 대해 제품 별로 비교해줘",
    "2024년 11월 셋째 주 일별로 제품군별 매출현황 보여줘.",
    "2024년 11월 둘째 주와 셋째 주 제품군별 매출현황을 비교해줘.",
    ], 
    "en":[
    "Show the daily corporate total sales status for the third week of November 2024.",
    "Compare the total sales volume on November 17, 2024, with the sales volume on November 16, 2024.",
    "Show the sales status by product category for each day of the third week of November 2024.",
    "Compare the sales status by product category for the second and third weeks of November 2024.",
    ]
};

  const {
    messages,
    isLoading,
    language,
    chatContainerRef,
    bottomRef,
    sendMessage,
    handleSampleQuestion,
    clearMessages,
    setLanguage
  } = useChat(serviceId || 'page-d2c-sales');
  
  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  const handleReset = () => {
    const confirmMessage = language === 'ko' ? 
      '대화 내용을 모두 초기화하시겠습니까?' : 
      'Are you sure you want to clear all conversations?';
    
    if (window.confirm(confirmMessage)) {
      clearMessages();
    }
  };

  return (
    <div className="service-d2c-sales-container">
      {/* 상단 제목 */}
      <div className="service-header">
        <div className="title-with-lang-toggle">
          <h2 className="main-title">{SERVICE_NAME[language]}</h2>
          <div className="header-controls">
            <button 
              className="lang-toggle-btn" 
              onClick={toggleLanguage}
              title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
            <button 
              className="reset-button"
              onClick={handleReset}
              title={language === 'ko' ? '대화 초기화' : 'Clear conversation'}
            >
              {language === 'ko' ? '초기화' : 'Reset'}
            </button>
          </div>
        </div>
        <div 
          className="service-description" 
          dangerouslySetInnerHTML={{ __html: SERVICE_DESCRIPTION[language] }}
        />
      </div>

      <div className="chat-main-area">
        {/* 💬 채팅 메시지 영역 */}
        <div className="chat-container" ref={chatContainerRef}>
          {(
            <SampleQuestions
              questions={SAMPLE_QUESTIONS[language]}
              onSelectQuestion={handleSampleQuestion}
              isLoading={isLoading}
            />
          )}

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
              isError={message.isError}
            />
          ))}

          {isLoading && (
            <div className="loading-message">
              <Spinner />
            </div>
          )}

          {/* 자동 스크롤 포인트 */}
          <div ref={bottomRef} />
        </div>

        {/* 🔧 각 페이지 전용 사이드바 내용 (선택적 렌더링) */}
        {SidebarContent && (
          <div className="chat-sidebar-extra">
            {SidebarContent}
          </div>
        )}
      </div>

      {/* 🧾 입력창: 항상 하단 고정 */}
      <div className="chat-input-container">
        <ChatInput
          onSendMessage={sendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Service_D2C_Sales; 