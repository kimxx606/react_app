import React, { useState, useRef, useEffect } from 'react';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  
  // 컴포넌트가 마운트되면 입력 필드에 포커스
  useEffect(() => {
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  }, [isLoading]);
  
  // 입력 변경 핸들러
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  // 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput && !isLoading) {
      onSendMessage(trimmedInput);
      setInput('');
    }
  };
  
  // 엔터 키 처리 (Shift+Enter는 줄바꿈)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };
  
  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        className="chat-input"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="질문을 입력하세요..."
        disabled={isLoading}
        rows={1}
      />
      <button 
        type="submit" 
        className="send-button"
        disabled={!input.trim() || isLoading}
      >
        전송
      </button>
    </form>
  );
};

export default ChatInput; 