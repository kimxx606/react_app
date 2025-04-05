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
import HRDXMainPage from './components/HRDX/HRDXMainPage';
import Service_HRDX_QnA from './components/HRDX/Service_HRDX_QnA';
import { SidebarHRDXQnAExtra } from './components/HRDX/Service_HRDX_QnA';
import Service_HRDX_Recommand from './components/HRDX/Service_HRDX_Recommand';
import { SidebarHRDXRecommandExtra } from './components/HRDX/Service_HRDX_Recommand';
import Service_Mellerikat_Assistant from './components/MelleriAssistant/Service_Mellerikat_Assistant';
import { SidebarMellerikatAssistantExtra } from './components/MelleriAssistant/Service_Mellerikat_Assistant';
import MelleriSearchMainPage from './components/MelleriSearch/MelleriSearchMainPage';
import Service_MelleriSearch_Register from './components/MelleriSearch/Service_MelleriSearch_Register';
import { SidebarMelleriSearchRegisterExtra } from './components/MelleriSearch/Service_MelleriSearch_Register';
import Service_MelleriSearch_Search from './components/MelleriSearch/Service_MelleriSearch_Search';
import { SidebarMelleriSearchSearchExtra } from './components/MelleriSearch/Service_MelleriSearch_Search';
import SGMainPage from './components/SurveyGenius/SGMainPage';
import Service_SG_Analysis from './components/SurveyGenius/Service_SG_Analysis';
import { SidebarSGAnalysisExtra } from './components/SurveyGenius/Service_SG_Analysis';
import Service_SG_Generation from './components/SurveyGenius/Service_SG_Generation';
import { SidebarSGGenerationExtra } from './components/SurveyGenius/Service_SG_Generation';
import Service_VOC_Analysis from './components/VOCAnalysis/Service_VOC_Analysis';
import { SidebarVOCAnalysisExtra } from './components/VOCAnalysis/Service_VOC_Analysis';
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
      case 'page-hrdx-main':
        return <HRDXMainPage serviceId="page-hrdx-main" />;
      case 'page-hrdx-qna':
        return <Service_HRDX_QnA serviceId="llo-hrdx-qna" />;
      case 'page-hrdx-recommand':
        return <Service_HRDX_Recommand serviceId="llo-hrdx-recommand" />;
      case 'page-mellerikat-assistant':
        return <Service_Mellerikat_Assistant serviceId="melleri-assistant" />;
      case 'page-melleri-search':
        return <MelleriSearchMainPage serviceId="page-melleri-search" />;
      case 'page-melleri-search-register':
        return <Service_MelleriSearch_Register serviceId="melleri-search-register-demo" />;
      case 'page-melleri-search-search':
        return <Service_MelleriSearch_Search serviceId="melleri-search-demo" />;
      case 'page-survey-genius':
        return <SGMainPage serviceId="page-survey-genius" />;
      case 'page-sg-analysis':
        return <Service_SG_Analysis serviceId="sg-analysis" />;
      case 'page-sg-generation':
        return <Service_SG_Generation serviceId="sg-generation" />;
      case 'page-voc-analysis':
        return <Service_VOC_Analysis serviceId="voc-analysis" />;
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
