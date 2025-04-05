import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ChatInterface from './components/Chat/ChatInterface';
import D2CMainPage from './components/D2C/D2CMainPage';
import WorkspacePage from './components/D2C/WorkspacePage';
import AccountPage from './components/D2C/AccountPage';
import MainPage from './components/MainPage/MainPage';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigateToMain = () => {
    setActivePage('home');
  };

  const getCurrentPageComponent = () => {
    switch(activePage) {
      case 'home':
        return <MainPage />;
      case 'page1':
        return <ChatInterface serviceId="page1" />;
      case 'page2-workspace':
        return <WorkspacePage />;
      case 'page2-account':
        return <AccountPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="app">
      <Header onNavigateToMain={handleNavigateToMain} />
      <div className="content">
        {/* Sidebar 컴포넌트에서 page2 선택시 자체적으로 내용 표시 */}
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
