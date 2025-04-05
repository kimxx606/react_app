import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Service_B2B_Query from './components/B2B/Service_B2B_Query';
import { SidebarB2BQueryExtra } from './components/B2B/Service_B2B_Query';
import D2CMainPage from './components/D2C/D2CMainPage';
import Service_D2C_Sales from './components/D2C/Service_D2C_Sales';
import { SidebarD2CExtra } from './components/D2C/Service_D2C_Sales';
import Service_D2C_Fallout from './components/D2C/Service_D2C_Fallout';
import { SidebarD2CFalloutExtra } from './components/D2C/Service_D2C_Fallout';
import MainPage from './components/MainPage/MainPage';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('page-main');

  const handleNavigateToMain = () => {
    setActivePage('page-main');
  };

  const getCurrentPageComponent = () => {
    switch(activePage) {
      case 'page-main':
        return <MainPage />;
      case 'page-b2b-query':
        return <Service_B2B_Query serviceId="page-b2b-query" />;
      case 'page-d2c-main':
        return <D2CMainPage serviceId="page-d2c-main" />;
      case 'page-d2c-sales':
        return <Service_D2C_Sales serviceId="page-d2c-sales" />;
      case 'page-d2c-account':
        return <Service_D2C_Fallout serviceId="page-d2c-account" />;
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
