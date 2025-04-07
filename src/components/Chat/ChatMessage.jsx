import React from 'react';

const ChatMessage = ({ role, content, isError = false, metadata }) => {
  // 역할에 따른 클래스 결정
  const messageClass = `chat-message ${role} ${isError ? 'error' : ''}`;
  
  // 역할에 따른 아바타와 이름 결정
  const avatar = role === 'user' ? '👤' : '🤖';
  const name = role === 'user' ? '사용자' : 'Intellytics AI';
  
  // sources가 있는지 확인
  const hasSources = metadata && metadata.sources && metadata.sources.length > 0;
  
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
        
        {/* B2B Query 소스 정보 표시 영역 */}
        {hasSources && (
          <div className="message-sources">
            <div className="sources-header">참고 정보:</div>
            <ul className="sources-list">
              {metadata.sources.map((source, index) => (
                <li key={index} className="source-item">
                  {typeof source === 'string' 
                    ? source 
                    : JSON.stringify(source)
                  }
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage; 