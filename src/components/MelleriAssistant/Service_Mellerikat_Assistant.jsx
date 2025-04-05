import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarMellerikatAssistantExtra = () => (
  <div className="sidebar-mellerikat-assistant-extra sidebar-extra-content">
    <h3>Mellerikat 도움말</h3>
    <ul>
      <li>Mellerikat 기본 기능</li>
      <li>사용 가능한 명령어</li>
      <li>자주 묻는 질문</li>
    </ul>
    <div className="mellerikat-assistant-extra-info">
      <h4>주요 기능 안내</h4>
      <p>Mellerikat은 다양한 질문에 답변하고 업무를 지원합니다.</p>
      <p>데이터 분석, 정보 검색, 내용 요약 등 다양한 작업을 수행합니다.</p>
    </div>
    <div className="mellerikat-assistant-extra-links">
      <h4>추천 리소스</h4>
      <div className="report-links">
        <a href="#" className="report-link">사용자 가이드</a>
        <a href="#" className="report-link">기능 소개 영상</a>
        <a href="#" className="report-link">활용 사례 모음</a>
      </div>
    </div>
  </div>
);

const Service_Mellerikat_Assistant = ({ serviceId = "melleri-assistant", SidebarContent }) => {
  const SERVICE_NAME = "Mellerikat Assistant 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ Mellerikat Assistant 서비스</strong><br>
Mellerikat Assistant는 사용자의 다양한 업무 질문에 답변하고 지원하는 AI 기반 서비스입니다. 자연어 질의를 통해 정보 검색, 콘텐츠 생성, 데이터 분석 등 폭넓은 영역에서 도움을 제공합니다.</p>

<p>이 서비스를 통해 다음과 같은 항목에 대한 질의가 가능합니다:</p>
<ul>
  <li>업무 관련 정보 검색 및 답변</li>
  <li>문서 요약 및 분석</li>
  <li>콘텐츠 생성 및 편집</li>
  <li>데이터 분석 및 인사이트 도출</li>
</ul>

<p><strong>▶ 서비스 특징</strong><br>
Mellerikat Assistant는 최신 AI 기술을 활용하여 사용자의 질문에 정확하고 유용한 답변을 제공합니다.<br>
다양한 업무 분야에 특화된 지식을 바탕으로 맞춤형 응답을 생성하며, 복잡한 질문에도 체계적인 답변을 제공합니다.<br>
사용자 피드백을 통해 지속적으로 개선되어 더 나은 서비스를 제공합니다.</p>

<h3>데이터 설명</h3>
<p>Mellerikat Assistant는 다양한 소스의 데이터를 활용하여 응답을 생성합니다.</p>
<table>
    <colgroup>
        <col style="width: 16%">
        <col style="width: 4%">
        <col style="width: 40%">
        <col style="width: 40%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2">데이터 소스</td>
            <td>데이터 유형</td>
            <td>설명</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5">데이터 유형</td>
            <td>1</td>
            <td>일반 지식</td>
            <td>다양한 분야의 기본 지식 정보</td>
        </tr>
        <tr>
            <td>2</td>
            <td>업무 지식</td>
            <td>비즈니스 및 전문 분야 정보</td>
        </tr>
        <tr>
            <td>3</td>
            <td>최신 동향</td>
            <td>최신 트렌드 및 업데이트된 정보</td>
        </tr>
        <tr>
            <td>4</td>
            <td>분석 도구</td>
            <td>데이터 분석 및 처리 기능</td>
        </tr>
        <tr>
            <td>5</td>
            <td>사용자 맞춤 정보</td>
            <td>사용자 컨텍스트에 맞는 정보</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>궁금한 내용이나 도움이 필요한 업무에 대해 자연어로 질문해주세요.</li>
  <li>더 정확한 답변을 위해 가능한 구체적인 질문을 작성하는 것이 좋습니다.</li>
  <li>이전 대화 내용을 참조한 후속 질문도 가능합니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "Mellerikat의 주요 기능에 대해 알려줘",
    "효과적인 회의 진행을 위한 팁을 알려줄래?",
    "마케팅 전략 수립을 위한 프레임워크를 추천해줘"
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

export default Service_Mellerikat_Assistant; 