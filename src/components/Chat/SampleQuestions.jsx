import React from 'react';

const SampleQuestions = ({ questions, onSelectQuestion, isLoading }) => {
  // 기본 대표 질문
  const defaultQuestions = [
    "이 서비스는 어떤 기능을 제공하나요?",
    "NPS 분석이란 무엇인가요?",
    "VOC 데이터를 분석하는 방법을 알려주세요."
  ];
  
  // 사용할 질문 목록 (props로 전달된 것이 있으면 사용, 없으면 기본값)
  const questionList = questions && questions.length > 0 ? questions : defaultQuestions;
  
  // 질문 선택 핸들러
  const handleQuestionClick = (question) => {
    if (!isLoading) {
      onSelectQuestion(question);
    }
  };
  
  return (
    <div className="sample-questions-container">
      <h3 className="sample-questions-title">대표 질문</h3>
      <p className="sample-questions-description">아래 질문을 클릭하여 바로 시작해보세요.</p>
      <div className="sample-questions-list">
        {questionList.map((question, index) => (
          <button
            key={index}
            className="sample-question"
            onClick={() => handleQuestionClick(question)}
            disabled={isLoading}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SampleQuestions; 