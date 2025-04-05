import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarChatbotGenerationExtra = () => (
  <div className="sidebar-chatbot-generation-extra sidebar-extra-content">
    <h3>챗봇 생성 가이드</h3>
    <ul>
      <li>맞춤형 챗봇 설계 방법</li>
      <li>대화 시나리오 구성 요령</li>
      <li>데이터 학습 최적화 팁</li>
    </ul>
    <div className="chatbot-generation-extra-info">
      <h4>대화 품질 향상을 위한 팁</h4>
      <p>다양한 질문 표현을 준비하고, 사용자 의도를 명확히 정의하세요.</p>
      <p>자연스러운 대화 흐름을 위해 챗봇의 응답 톤과 스타일을 일관되게 유지하세요.</p>
    </div>
    <div className="chatbot-generation-extra-links">
      <h4>추천 가이드</h4>
      <div className="guide-links">
        <a href="#" className="guide-link">챗봇 성능 평가 지표</a>
        <a href="#" className="guide-link">대화 시나리오 템플릿</a>
        <a href="#" className="guide-link">챗봇 응답 최적화 방법</a>
      </div>
    </div>
  </div>
);

const Service_Chatbot_Generation = ({ serviceId = "chatbot-generation", SidebarContent }) => {
  const SERVICE_NAME = "Chatbot Generation 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ 맞춤형 챗봇 생성 서비스</strong><br>
Chatbot Generation 서비스는 사용자의 요구사항에 맞는 맞춤형 챗봇을 손쉽게 생성하고 관리할 수 있는 서비스입니다. 복잡한 코딩 없이도 목적에 맞는 대화형 AI 챗봇을 구축하여 고객 응대, 내부 업무 지원, 정보 제공 등 다양한 영역에서 활용할 수 있습니다.</p>

<ul>
  <li>비즈니스 특화 챗봇 : 업종 및 업무 영역에 특화된 맞춤형 챗봇 생성</li>
  <li>다목적 활용 : 고객 서비스, 내부 직원 지원, 정보 검색 등 다양한 용도로 활용 가능</li>
  <li>손쉬운 관리 : 직관적인 인터페이스를 통해 챗봇 성능 모니터링 및 개선</li>
</ul>

<p>특히 자연어 처리 기술을 활용하여 사용자의 의도를 정확히 파악하고, 맥락을 고려한 응답을 제공함으로써 자연스러운 대화 경험을 구현합니다. 또한 지속적인 학습과 최적화를 통해 시간이 지날수록 더욱 향상된 성능을 발휘합니다.</p>
 
<p><strong>▶ Chatbot Generation 특징</strong><br>
Chatbot Generation 서비스는 단순한 챗봇 생성을 넘어 비즈니스 가치를 창출하는 대화형 AI 솔루션입니다.<br>
사용자 요구사항 분석, 대화 시나리오 설계, 학습 데이터 구성, 성능 모니터링 및 최적화 등 챗봇 개발의 전 과정을 지원합니다.<br>
복잡한 기술 지식 없이도 비즈니스에 필요한 다양한 유형의 챗봇을 쉽고 빠르게 구축할 수 있습니다.</p>

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
            <td>맞춤형 챗봇 설계</td>
            <td>비즈니스 목적에 맞는 챗봇 페르소나, 대화 스타일, 응답 방식 등을 맞춤 설계</td>
        </tr>
        <tr>
            <td>대화 시나리오 구성</td>
            <td>사용자 의도 분석 및 다양한 대화 흐름 설계를 통한 자연스러운 상호작용 구현</td>
        </tr>
        <tr>
            <td>지식 베이스 구축</td>
            <td>기업 내부 문서, FAQ, 제품 정보 등을 활용한 맞춤형 지식 베이스 구축</td>
        </tr>
        <tr>
            <td>다채널 연동</td>
            <td>웹사이트, 모바일 앱, 메신저 플랫폼 등 다양한 채널과의 손쉬운 연동</td>
        </tr>
        <tr>
            <td>성능 분석 및 개선</td>
            <td>챗봇 사용 데이터 분석을 통한 지속적인 성능 모니터링 및 최적화</td>
        </tr>
    </tbody>
</table>

<h3>챗봇 유형</h3>
<ul>
  <li><strong>고객 서비스 챗봇</strong> - 자주 묻는 질문 응대, 제품 안내, 문제 해결 지원</li>
  <li><strong>영업 지원 챗봇</strong> - 제품 추천, 구매 안내, 구매 전환율 향상 지원</li>
  <li><strong>내부 업무 지원 챗봇</strong> - 사내 정보 검색, 업무 프로세스 안내, 직원 온보딩 지원</li>
  <li><strong>예약 관리 챗봇</strong> - 예약 접수, 일정 조정, 알림 및 리마인더 제공</li>
  <li><strong>데이터 조회 챗봇</strong> - 데이터베이스 연동을 통한 정보 조회 및 보고서 생성</li>
</ul>

<h3>사용 방법</h3>
<ul>
  <li>원하는 챗봇의 목적과 기능을 자연어로 설명하세요.</li>
  <li>대화 시나리오, 주요 기능, 연동 채널 등 세부 요구사항을 입력하세요.</li>
  <li>단계별 가이드에 따라 챗봇을 생성하고 테스트한 후 배포하세요.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "고객 서비스 FAQ를 처리할 수 있는 챗봇을 만들고 싶어요",
    "온라인 쇼핑몰을 위한 제품 추천 챗봇은 어떻게 구현하나요?",
    "사내 HR 정보를 제공하는 직원용 챗봇 생성 방법을 알려주세요",
    "식당 예약 관리를 위한 챗봇을 만들려면 어떤 기능이 필요한가요?"
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

export default Service_Chatbot_Generation; 