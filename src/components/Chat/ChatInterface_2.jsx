import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SampleQuestions from './SampleQuestions';
import Spinner from '../UI/Spinner';

const ChatInterface = ({ serviceId, SidebarContent }) => {
  const SERVICE_NAME = "Sample B";
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