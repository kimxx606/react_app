import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarHRDXRecommandExtra = () => (
  <div className="sidebar-hrdx-recommand-extra sidebar-extra-content">
    <h3>교육 추천 가이드</h3>
    <ul>
      <li>역량 기반 교육 추천</li>
      <li>경력 개발 계획 수립</li>
      <li>교육 이력 활용 방법</li>
    </ul>
    <div className="hrdx-recommand-extra-info">
      <h4>교육 추천 알고리즘</h4>
      <p>업무 경험과 역량을 분석하여 최적의 교육을 추천합니다.</p>
      <p>유사 직무 직원들의 교육 패턴을 참고하여 효과적인 학습 경로를 제시합니다.</p>
    </div>
    <div className="hrdx-recommand-extra-links">
      <h4>추천 학습 자료</h4>
      <div className="report-links">
        <a href="#" className="report-link">역량 개발 가이드</a>
        <a href="#" className="report-link">교육 플랫폼 활용법</a>
        <a href="#" className="report-link">자기주도학습 방법론</a>
      </div>
    </div>
  </div>
);

const Service_HRDX_Recommand = ({ serviceId = "llo-hrdx-recommand", SidebarContent }) => {
  const SERVICE_NAME = "HRDX 교육 추천 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ HRDX 교육 추천 서비스</strong><br>
HR portal, EC 등에 산재한 개인의 업무 경험과 역량 데이터를 활용하여 최적화된 교육 과정을 추천하는 맞춤형 교육 추천 서비스입니다.</p>

<p>이 서비스를 통해 다음과 같은 항목에 대한 질의가 가능합니다:</p>
<ul>
  <li>개인 역량 강화를 위한 교육 추천</li>
  <li>경력 개발 계획에 맞는 학습 경로 제안</li>
  <li>직무별 추천 교육 과정 안내</li>
  <li>신기술 습득을 위한 학습 리소스 제공</li>
</ul>

<p><strong>▶ 서비스 특징</strong><br>
HRDX 교육 추천 서비스는 개인의 업무 경험과 역량을 분석하여 맞춤형 교육 과정을 제안합니다.<br>
유사 직무 직원들의 교육 패턴과 성과를 분석하여 효과적인 학습 경로를 제시하며, 개인의 경력 목표에 맞는 교육 계획을 수립할 수 있습니다.<br>
이를 통해 자기 주도적인 학습과 역량 개발을 지원합니다.</p>

<h3>데이터 설명</h3>
<p>HR Portal과 EC 시스템에서 추출한 개인 업무 경험 및 교육 이력 데이터(2020년부터 현재까지)</p>
<table>
    <colgroup>
        <col style="width: 16%">
        <col style="width: 4%">
        <col style="width: 40%">
        <col style="width: 40%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2">데이터 테이블</td>
            <td>데이터 Column</td>
            <td>설명</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">데이터 컬럼</td>
            <td>1</td>
            <td>Employee ID</td>
            <td>직원 ID</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Work Experience</td>
            <td>업무 경험 내역</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Competencies</td>
            <td>보유 역량</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Learning History</td>
            <td>교육 이수 이력</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Career Goals</td>
            <td>경력 개발 목표</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Job Family</td>
            <td>직무 군</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Learning Preferences</td>
            <td>선호하는 학습 방식</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>개발하고 싶은 역량이나 관심 있는 교육 분야에 대해 질문해주세요.</li>
  <li>경력 목표, 현재 업무, 관심 분야 등을 함께 언급하면 더 맞춤화된 교육 추천을 받을 수 있습니다.</li>
  <li>이전 추천 결과에 대한 후속 질문도 가능합니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "내 업무 경험을 바탕으로 추천 교육과정을 알려줘",
    "데이터 분석 역량을 키우기 위한 교육 과정은 무엇이 있나요?",
    "현재 직무에서 성장하기 위해 필요한 역량과 관련 교육을 추천해주세요",
    "리더십 역량 강화를 위한 교육 프로그램은 무엇이 있나요?"
  ];

  const {
    messages,
    isLoading,
    chatContainerRef,
    bottomRef,
    sendMessage,
    handleSampleQuestion
  } = useChat(serviceId);

  return (
    <div className="service-container">
      {/* 상단 제목 */}
      <div className="service-header">
        <h2 className="main-title">{SERVICE_NAME}</h2>
        <div 
          className="service-description" 
          dangerouslySetInnerHTML={{ __html: SERVICE_DESCRIPTION.ko }}
        />
      </div>

      <div className="chat-main-area">
        {/* 💬 채팅 메시지 영역 */}
        <div className="chat-container" ref={chatContainerRef}>
          {(
            <SampleQuestions
              questions={SAMPLE_QUESTIONS}
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

export default Service_HRDX_Recommand; 