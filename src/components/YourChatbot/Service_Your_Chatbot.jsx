import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarYourChatbotExtra = () => (
  <div className="sidebar-your-chatbot-extra sidebar-extra-content">
    <h3>나만의 챗봇 가이드</h3>
    <ul>
      <li>맞춤형 챗봇 활용 방법</li>
      <li>챗봇 성능 향상 팁</li>
      <li>챗봇 관리 및 업데이트</li>
    </ul>
    <div className="your-chatbot-extra-info">
      <h4>챗봇 활용 사례</h4>
      <p>개인 비서형 챗봇: 일정 관리, 할 일 목록, 리마인더 등 개인 업무 지원</p>
      <p>지식 관리형 챗봇: 개인/팀 문서, 정보, 자료를 체계화하고 필요할 때 검색</p>
    </div>
    <div className="your-chatbot-extra-links">
      <h4>추천 리소스</h4>
      <div className="resource-links">
        <a href="#" className="resource-link">챗봇 활용 모범 사례</a>
        <a href="#" className="resource-link">챗봇 커스터마이징 가이드</a>
        <a href="#" className="resource-link">챗봇 통합 API 문서</a>
      </div>
    </div>
  </div>
);

const Service_Your_Chatbot = ({ serviceId = "your-chatbot", SidebarContent }) => {
  const SERVICE_NAME = "Your Chatbot";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ 나만의 개인화된 챗봇 서비스</strong><br>
Your Chatbot은 개인 또는 소규모 팀을 위한 맞춤형 챗봇 서비스로, 개인의 취향과 업무 스타일에 최적화된 AI 비서를 제공합니다. 기존에 생성한 챗봇을 관리하고 개선하며, 일상 업무와 커뮤니케이션을 효율적으로 지원합니다.</p>

<ul>
  <li>개인화 챗봇 : 사용자의 성향, 선호도, 업무 패턴을 학습하여 맞춤형 서비스 제공</li>
  <li>지속적 개선 : 사용 패턴과 피드백을 통해 지속적으로 진화하는 챗봇 경험</li>
  <li>다양한 통합 : 개인 캘린더, 메일, 메모 앱 등 다양한 도구와의 연동 지원</li>
</ul>

<p>Your Chatbot은 단순한 질의응답을 넘어 사용자의 맥락을 이해하고 장기적인 대화 이력을 기억하여 더욱 자연스러운 상호작용을 제공합니다. 또한 시간이 지날수록 사용자의 선호도와 업무 패턴을 학습하여 더욱 효율적인 지원을 제공합니다.</p>
 
<p><strong>▶ Your Chatbot 특징</strong><br>
Your Chatbot은 이미 생성된 챗봇을 관리하고, 기능을 강화하며, 다양한 환경에 통합할 수 있는 기능을 제공합니다.<br>
사용자 피드백 분석, 대화 성과 지표 모니터링, 지속적인 학습 데이터 개선을 통해 챗봇의 성능을 지속적으로 향상시킬 수 있습니다.<br>
API 연동, 웹훅 설정, 인증 관리 등 다양한 기술적 지원을 통해 기존 시스템과의 원활한 통합을 지원합니다.</p>

<h3>주요 기능</h3>
<table>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 80%">
    </colgroup>
    <thead>
        <tr>
            <td>기능</td>
            <td>설명</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>챗봇 관리</td>
            <td>기존 챗봇의 성능 모니터링, 대화 이력 분석, 성능 최적화</td>
        </tr>
        <tr>
            <td>지식 베이스 확장</td>
            <td>새로운 정보와 문서를 지속적으로 추가하여 챗봇의 지식 영역 확장</td>
        </tr>
        <tr>
            <td>개인화 설정</td>
            <td>사용자 선호도, 응답 스타일, 대화 주제 등 세부 설정 커스터마이징</td>
        </tr>
        <tr>
            <td>통합 및 연동</td>
            <td>개인 생산성 도구, 업무 관리 시스템 등과의 API 연동</td>
        </tr>
        <tr>
            <td>분석 및 인사이트</td>
            <td>챗봇 사용 패턴 분석, 인기 질문, 응답 품질 평가 등 다양한 인사이트 제공</td>
        </tr>
    </tbody>
</table>

<h3>챗봇 활용 분야</h3>
<ul>
  <li><strong>개인 생산성 향상</strong> - 일정 관리, 알림 설정, 정보 검색 및 요약</li>
  <li><strong>지식 관리</strong> - 개인 문서, 메모, 연구 자료 등의 체계적 관리와 검색</li>
  <li><strong>학습 지원</strong> - 맞춤형 학습 자료 추천, 퀴즈 생성, 학습 진도 관리</li>
  <li><strong>작업 자동화</strong> - 반복적인 작업, 데이터 처리, 보고서 생성 등 자동화</li>
  <li><strong>소규모 팀 지원</strong> - 팀 일정, 작업 할당, 진행 상황 모니터링 지원</li>
</ul>

<h3>사용 방법</h3>
<ul>
  <li>관리하고자 하는 챗봇의 ID 또는 이름을 입력하세요.</li>
  <li>챗봇의 성능 개선, 기능 확장, 통합 설정 등에 관한 질문이나 요청을 입력하세요.</li>
  <li>챗봇 사용 데이터와 성과 지표를 분석하여 최적화 방안을 도출하세요.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "내 챗봇의 응답 정확도를 높이려면 어떻게 해야 하나요?",
    "개인 일정 관리와 연동할 수 있는 방법이 있나요?",
    "챗봇 대화 기록을 분석하여 자주 묻는 질문을 파악하고 싶어요",
    "특정 주제에 대한 지식을 강화하려면 어떤 데이터를 추가해야 할까요?"
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

export default Service_Your_Chatbot; 