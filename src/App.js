// import React, { useState } from 'react';
// import { useSession } from './contexts/SessionContext';
// import Header from './components/Layout/Header';
// import Sidebar from './components/Layout/Sidebar';
// import ChatInterface from './components/Chat/ChatInterface';
// import ChatInterface_2 from './components/Chat/ChatInterface_2';
// import './styles/App.css';

// function App() {
//   const [activePage, setActivePage] = useState('page1');
//   const { sessionState } = useSession();
//   const serviceId = 'intellytics-agent';
  
//   return (
//     <div className="app">
//       <Header />
//       <div className="content">
//         {/* <Sidebar serviceId={serviceId} /> */}
//         <Sidebar onSelectPage={setActivePage} activePage={activePage} />
//         <main className="main-content">
//           {activePage === 'page1' && <ChatInterface serviceId="intellytics-agent" />}
//           {activePage === 'page2' && <ChatInterface_2 serviceId="intellytics-agent-2" />}
//           {/* <ChatInterface serviceId={serviceId} /> */}
//         </main>
//       </div>
//     </div>

//   );
// }

// export default App; 

import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ChatInterface from './components/Chat/ChatInterface';
import ChatInterface_2 from './components/Chat/ChatInterface_2';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('page1');

  const getCurrentPageComponent = () => {
    if (activePage === 'page1') {
      return <ChatInterface serviceId="page1" />;
    } else if (activePage === 'page2') {
      return <ChatInterface_2 serviceId="page2" />;
    }
    return null;
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        {/* ✅ serviceId & 페이지 전환 props 전달 */}
        <Sidebar
          serviceId={activePage}
          onSelectPage={setActivePage}
          activePage={activePage}
        />

        <main className="main-content">
          {getCurrentPageComponent()}
        </main>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import Header from './components/Layout/Header';
// import Sidebar from './components/Layout/Sidebar';
// // import ChatInterface from './components/Chat/ChatInterface';
// import ChatInterface_2 from './components/Chat/ChatInterface_2';
// import ChatInterface, {
//   SidebarPage1Extra
// } from './components/Chat/ChatInterface';
// // import SidebarPage1Extra from './components/Sidebar/SidebarPage1Extra';
// // import SidebarPage2Extra from './components/Sidebar/SidebarPage2Extra';

// const App = () => {
//   const [activePage, setActivePage] = useState('page1');

//   return (
//     <div className="app">
//       <Header />
//       <div className="content">
//         {/* 페이지 메뉴 및 설정 */}
//         <Sidebar
//           serviceId={activePage}
//           activePage={activePage}
//           onSelectPage={setActivePage}
//         />

//         {/* 메인 콘텐츠 영역 */}
//         <main className="main-content">
//           {activePage === 'page1' && (
//             <ChatInterface
//               serviceId="page1"
//               SidebarContent={<SidebarPage1Extra serviceId="page1" />}
//             />
//           )}
//           {activePage === 'page2' && (
//             <ChatInterface_2
//               serviceId="page2"
//               // SidebarContent={<SidebarPage2Extra serviceId="page2" />}
//             />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;
