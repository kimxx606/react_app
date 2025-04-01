import React from 'react';

const ChatMessage = ({ role, content, isError = false }) => {
  // 역할에 따른 클래스 결정
  const messageClass = `chat-message ${role} ${isError ? 'error' : ''}`;
  
  // 역할에 따른 아바타와 이름 결정
  const avatar = role === 'user' ? '👤' : '🤖';
  const name = role === 'user' ? '사용자' : 'Intellytics AI';
  
  return (
    <div className={messageClass}>
      <div className="message-avatar">{avatar}</div>
      <div className="message-content">
        <div className="message-header">
          <span className="message-name">{name}</span>
        </div>
        <div className="message-text">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 