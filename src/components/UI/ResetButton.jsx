// import React from 'react';
// import { useSession } from '../../contexts/SessionContext';

// const ResetButton = ({ serviceId }) => {
//   const { resetSessionState } = useSession();
  
//   // 대화 초기화 핸들러
//   const handleReset = () => {
//     if (window.confirm('대화 내용을 모두 초기화하시겠습니까?')) {
//       resetSessionState(`${serviceId}_messages`);
//     }
//   };
  
//   return (
//     <button 
//       className="reset-button"
//       onClick={handleReset}
//       title="대화 내용 초기화"
//     >
//       대화 초기화
//     </button>
//   );
// };

// export default ResetButton; 

import React from 'react';
import useChat from '../../hooks/useChat';

const ResetButton = ({ serviceId }) => {
  const { clearMessages } = useChat(serviceId);

  const handleReset = () => {
    if (window.confirm('대화를 초기화하시겠습니까?')) {
      clearMessages();
    }
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      대화 초기화
    </button>
  );
};

export default ResetButton;