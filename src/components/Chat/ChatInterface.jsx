// import React from 'react';
// import useChat from '../../hooks/useChat';
// import ChatMessage from './ChatMessage';
// import ChatInput from './ChatInput';
// import SampleQuestions from './SampleQuestions';
// import Spinner from '../UI/Spinner';

// const ChatInterface = ({ serviceId }) => {
//   const SERVICE_NAME = "Intellytics AI 대화 서비스";
//   const SERVICE_DESCRIPTION = "AI와 대화하며 다양한 질문에 대한 답변을 받아보세요.";

//   const SAMPLE_QUESTIONS = [
//     "이 서비스는 어떤 기능을 제공하나요?",
//     "NPS 분석이란 무엇인가요?",
//     "VOC 데이터를 어떻게 분석할 수 있나요?",
//     "D2C 분석에 대해 설명해주세요."
//   ];

//   const {
//     messages,
//     isLoading,
//     chatContainerRef,
//     bottomRef,
//     sendMessage,
//     handleSampleQuestion
//   } = useChat(serviceId);

//   return (
//     <div className="chat-interface">
//       {/* 상단 제목 */}
//       <div className="service-header">
//         <h2 className="main-title">{SERVICE_NAME}</h2>
//         <p className="service-description">{SERVICE_DESCRIPTION}</p>
//       </div>

//       {/* 대표 질문 (초기 화면에만 표시) */}
//       {(
//         <SampleQuestions
//           questions={SAMPLE_QUESTIONS}
//           onSelectQuestion={handleSampleQuestion}
//           isLoading={isLoading}
//         />
//       )}

//       {/* 💬 채팅 메시지 영역 */}
//       <div className="chat-container" ref={chatContainerRef}>
//         {messages.map((message, index) => (
//           <ChatMessage
//             key={index}
//             role={message.role}
//             content={message.content}
//             isError={message.isError}
//           />
//         ))}

//         {isLoading && (
//           <div className="loading-message">
//             <Spinner />
//           </div>
//         )}

//         {/* 자동 스크롤 포인트 */}
//         <div ref={bottomRef} />
//       </div>

//       {/* 🧾 입력창: 항상 하단 고정 */}
//       <div className="chat-input-container">
//         <ChatInput
//           onSendMessage={sendMessage}
//           isLoading={isLoading}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatInterface;

// import React from 'react';
// import useChat from '../../hooks/useChat';
// import ChatMessage from './ChatMessage';
// import ChatInput from './ChatInput';
// import SampleQuestions from './SampleQuestions';
// import Spinner from '../UI/Spinner';

// const ChatInterface = ({ serviceId, SidebarContent }) => {
//   const SERVICE_NAME = "Intellytics AI 대화 서비스";
//   const SERVICE_DESCRIPTION = "AI와 대화하며 다양한 질문에 대한 답변을 받아보세요.";

//   const SAMPLE_QUESTIONS = [
//     "이 서비스는 어떤 기능을 제공하나요?",
//     "NPS 분석이란 무엇인가요?",
//     "VOC 데이터를 어떻게 분석할 수 있나요?",
//     "D2C 분석에 대해 설명해주세요."
//   ];

//   const {
//     messages,
//     isLoading,
//     chatContainerRef,
//     bottomRef,
//     sendMessage,
//     handleSampleQuestion
//   } = useChat(serviceId);

//   return (
//     <div className="chat-interface">
//       {/* 상단 제목 */}
//       <div className="service-header">
//         <h2 className="main-title">{SERVICE_NAME}</h2>
//         <p className="service-description">{SERVICE_DESCRIPTION}</p>
//       </div>

//       {/* 대표 질문 (초기 화면에만 표시) */}
//       {messages.length === 0 && (
//         <SampleQuestions
//           questions={SAMPLE_QUESTIONS}
//           onSelectQuestion={handleSampleQuestion}
//           isLoading={isLoading}
//         />
//       )}

//       {/* 💬 채팅 메시지 영역 */}
//       <div className="chat-container" ref={chatContainerRef}>
//         {messages.map((message, index) => (
//           <ChatMessage
//             key={index}
//             role={message.role}
//             content={message.content}
//             isError={message.isError}
//           />
//         ))}

//         {isLoading && (
//           <div className="loading-message">
//             <Spinner />
//           </div>
//         )}

//         {/* 자동 스크롤 포인트 */}
//         <div ref={bottomRef} />
//       </div>

//       {/* 🧾 입력창: 항상 하단 고정 */}
//       <div className="chat-input-container">
//         <ChatInput
//           onSendMessage={sendMessage}
//           isLoading={isLoading}
//         />
//       </div>

//       {/* 🔧 각 페이지 전용 사이드바 내용 (선택적 렌더링) */}
//       {SidebarContent && (
//         <div className="chat-sidebar-extra">
//           {SidebarContent}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatInterface;

import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SampleQuestions from './SampleQuestions';
import Spinner from '../UI/Spinner';

// 샘플 페이지별 사이드바 내용
export const SidebarPage1Extra = () => (
  <div className="sidebar-page1-extra">
    <h3>Intellytics 분석 가이드</h3>
    <ul>
      <li>NPS 점수 해석법</li>
      <li>VOC 클러스터링 예시</li>
      <li>분석 리포트 다운로드</li>
    </ul>
    <div className="page1-extra-info">
      <h4>NPS 점수 분석</h4>
      <p>Net Promoter Score는 고객 충성도를 측정하는 지표입니다.</p>
      <p>Promoters(9-10), Passives(7-8), Detractors(0-6)로 분류합니다.</p>
    </div>
    <div className="page1-extra-links">
      <h4>추천 분석 리포트</h4>
      <div className="report-links">
        <a href="#" className="report-link">월간 NPS 트렌드</a>
        <a href="#" className="report-link">고객 피드백 요약</a>
        <a href="#" className="report-link">VOC 분석 대시보드</a>
      </div>
    </div>
  </div>
);

export const SidebarPage2Extra = () => (
  <div className="sidebar-page2-extra">
    <h3>D2C 분석 팁</h3>
    <ul>
      <li>이탈 고객 패턴 분석</li>
      <li>프로모션 효과 분석</li>
      <li>고객 세그먼트 전략</li>
    </ul>
    <div className="page2-extra-info">
      <h4>D2C 분석 방법론</h4>
      <p>고객 데이터를 활용한 인사이트 도출 방법을 알아보세요.</p>
      <p>고객 행동 패턴을 분석하여 마케팅 전략을 최적화할 수 있습니다.</p>
    </div>
    <div className="page2-extra-tools">
      <h4>추천 분석 도구</h4>
      <div className="tool-badges">
        <span className="tool-badge">Python</span>
        <span className="tool-badge">R</span>
        <span className="tool-badge">Tableau</span>
      </div>
      <p>다양한 데이터 분석 도구를 활용하여 더 깊은 인사이트를 얻을 수 있습니다.</p>
    </div>
  </div>
);

const ChatInterface = ({ serviceId, SidebarContent }) => {
  const SERVICE_NAME = "sample A";
  const SERVICE_DESCRIPTION = "AI와 대화하며 다양한 질문에 대한 답변을 받아보세요.";

  const SAMPLE_QUESTIONS = [
    "이 서비스는 어떤 기능을 제공하나요?",
    "NPS 분석이란 무엇인가요?",
    "VOC 데이터를 어떻게 분석할 수 있나요?",
    "D2C 분석에 대해 설명해주세요."
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
    <div className="chat-interface">
      {/* 상단 제목 */}
      <div className="service-header">
        <h2 className="main-title">{SERVICE_NAME}</h2>
        <p className="service-description">{SERVICE_DESCRIPTION}</p>
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

export default ChatInterface;
