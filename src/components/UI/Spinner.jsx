import React from 'react';

const Spinner = ({ message = '답변을 생성 중입니다...' }) => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      {message && <p className="spinner-message">{message}</p>}
    </div>
  );
};

export default Spinner; 