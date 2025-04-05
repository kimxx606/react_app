import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarSGGenerationExtra = () => (
  <div className="sidebar-sg-generation-extra sidebar-extra-content">
    <h3>설문 생성 가이드</h3>
    <ul>
      <li>목적별 설문 설계 방법</li>
      <li>질문 유형과 구성</li>
      <li>효과적인 응답 척도</li>
    </ul>
    <div className="sg-generation-extra-info">
      <h4>설문 설계 팁</h4>
      <p>질문의 수와 복잡성이 응답률에 미치는 영향을 고려하세요.</p>
      <p>질문 순서와 그룹화가 응답 품질에 중요한 영향을 미칩니다.</p>
    </div>
    <div className="sg-generation-extra-links">
      <h4>추천 템플릿</h4>
      <div className="report-links">
        <a href="#" className="report-link">고객 만족도 설문</a>
        <a href="#" className="report-link">제품 피드백 설문</a>
        <a href="#" className="report-link">시장 조사 설문</a>
      </div>
    </div>
  </div>
);

const Service_SG_Generation = ({ serviceId = "sg-generation", SidebarContent }) => {
  const SERVICE_NAME = "Survey Genius - 설문 생성 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ 설문 생성 서비스</strong><br>
Survey Genius 설문 생성 서비스는 사용자의 목적과 대상에 최적화된 설문지를 AI 기술을 활용하여 자동으로 설계하고 생성하는 서비스입니다. 목표와 주제만 입력하면 효과적인 설문 구조와 질문들을 제안받을 수 있습니다.</p>

<ul>
  <li>맞춤형 설문 설계 : 조사 목적과 대상에 맞는 최적의 설문 구조 제안</li>
  <li>질문 자동 생성 : 다양한 유형의 질문과 응답 옵션 자동 생성</li>
  <li>설문 최적화 : 응답률과 데이터 품질을 높이는 설문 구성 제안</li>
</ul>

<p>사용자는 생성된 설문을 검토하고 필요에 따라 수정한 후, 다양한 형식(웹 폼, PDF, 문서 등)으로 내보내 활용할 수 있습니다.</p>
 
<p><strong>▶ 고급 설문 기능</strong><br>
단순 질문 나열을 넘어 논리적 흐름과 조건부 분기를 갖춘 지능형 설문을 설계할 수 있습니다.<br>
응답자의 이전 답변에 따라 후속 질문이 달라지는 적응형 설문, 질문 간 상관관계를 고려한 구조화된 설문 등 고급 기능을 지원합니다.<br>
또한 다국어 지원과 문화적 맥락을 고려한 국제화 기능, 접근성을 고려한 설계로 모든 응답자가 쉽게 참여할 수 있는 포용적 설문을 구현합니다.</p>

<h3>설문 유형</h3>
<p>다양한 목적과 대상에 맞는 설문 유형 제공</p>
<table>
    <colgroup>
        <col style="width: 16%">
        <col style="width: 4%">
        <col style="width: 40%">
        <col style="width: 40%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2">설문 유형</td>
            <td>적용 분야</td>
            <td>특징</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">지원 유형</td>
            <td>1</td>
            <td>고객 만족도 조사</td>
            <td>서비스/제품 경험 평가, NPS 측정</td>
        </tr>
        <tr>
            <td>2</td>
            <td>시장 조사</td>
            <td>소비자 선호도, 시장 동향 파악</td>
        </tr>
        <tr>
            <td>3</td>
            <td>제품 피드백</td>
            <td>사용자 경험, 개선점 도출</td>
        </tr>
        <tr>
            <td>4</td>
            <td>직원 만족도 조사</td>
            <td>조직 문화, 업무 환경 평가</td>
        </tr>
        <tr>
            <td>5</td>
            <td>이벤트 평가</td>
            <td>행사/교육 만족도, 개선점</td>
        </tr>
        <tr>
            <td>6</td>
            <td>학술 연구</td>
            <td>가설 검증, 데이터 수집</td>
        </tr>
        <tr>
            <td>7</td>
            <td>커뮤니티 의견 수렴</td>
            <td>지역/그룹 니즈 파악, 의사결정</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>생성하고자 하는 설문의 목적, 대상, 주제 등을 상세히 설명해주세요.</li>
  <li>특별히 포함하고 싶은 질문 유형이나 주제가 있다면 함께 알려주세요.</li>
  <li>생성된 설문에 대한 수정 요청이나 구체적인 부분에 대한 조정도 가능합니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "고객 만족도 조사를 위한 설문지를 만들어주세요",
    "20대 여성을 대상으로 한 화장품 선호도 조사 설문을 제안해주세요",
    "사내 업무환경 개선을 위한 직원 의견 수렴 설문을 만들어주세요",
    "학술 연구용 심리 성향 측정 설문지는 어떻게 구성해야 할까요?"
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

export default Service_SG_Generation; 