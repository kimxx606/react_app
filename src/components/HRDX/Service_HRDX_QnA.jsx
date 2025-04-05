import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarHRDXQnAExtra = () => (
  <div className="sidebar-hrdx-qna-extra sidebar-extra-content">
    <h3>HRDX 가이드</h3>
    <ul>
      <li>업무 경험 분석 방법</li>
      <li>성과 요약 활용법</li>
      <li>HR 데이터 활용 가이드</li>
    </ul>
    <div className="hrdx-qna-extra-info">
      <h4>데이터 분석 방법</h4>
      <p>개인 업무 경험 데이터는 과거 업무 이력을 기반으로 합니다.</p>
      <p>업무 성과는 평가 결과와 프로젝트 산출물을 종합적으로 분석합니다.</p>
    </div>
    <div className="hrdx-qna-extra-links">
      <h4>추천 참고 자료</h4>
      <div className="report-links">
        <a href="#" className="report-link">업무 경험 분석 가이드</a>
        <a href="#" className="report-link">HR 데이터 활용 사례</a>
        <a href="#" className="report-link">직무 역량 분석 방법론</a>
      </div>
    </div>
  </div>
);

const Service_HRDX_QnA = ({ serviceId = "llo-hrdx-qna", SidebarContent }) => {
  const SERVICE_NAME = "HRDX 질의 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ HRDX 질의 서비스</strong><br>
HR portal, EC 등에 산재한 나의 HR데이터를 종합해 경력, 강점/보완점, 소속 부서 핵심업무 등을 찾아볼 수 있는 개인 HR데이터 검색 서비스입니다.</p>

<p>이 서비스를 통해 다음과 같은 항목에 대한 질의가 가능합니다:</p>
<ul>
  <li>개인 업무 경험 요약 및 분석</li>
  <li>업무 성과 요약 및 평가</li>
  <li>직무 역량 분석</li>
  <li>소속 부서 핵심 업무 파악</li>
</ul>

<p><strong>▶ 서비스 특징</strong><br>
HRDX 질의 서비스는 HR 데이터를 통합적으로 분석하여 개인화된 결과를 제공합니다.<br>
여러 HR 시스템에 산재되어 있는 데이터를 종합해 자연어 질의를 통해 쉽게 검색할 수 있으며, 다양한 관점에서 분석 결과를 확인할 수 있습니다.<br>
이를 통해 개인의 경력 개발과 성장에 필요한 인사이트를 얻을 수 있습니다.</p>

<h3>데이터 설명</h3>
<p>HR Portal과 EC 시스템에서 추출한 개인 HR 데이터(2020년부터 현재까지)</p>
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
            <td>Department</td>
            <td>소속 부서</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Project History</td>
            <td>프로젝트 이력</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Performance Rating</td>
            <td>성과 평가</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Competency</td>
            <td>직무 역량</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Work Output</td>
            <td>업무 산출물</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>HR 데이터 중 찾고자 하는 정보의 특성을 명시하고, 원하는 정보를 질문해주세요. 이전의 질의 결과에 대한 후속 질문도 가능합니다.</li>
  <li>개인 경력, 업무 경험, 성과, 역량, 소속 부서 핵심 업무 등에 대해 질문할 수 있습니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "지난 3년간 내 업무 경험을 요약해줘",
    "소속 부서의 핵심 업무는 무엇인가요?",
    "나의 주요 강점과 보완해야 할 점은 무엇인가요?",
    "최근 수행한 프로젝트의 성과는 어떤가요?"
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

export default Service_HRDX_QnA; 