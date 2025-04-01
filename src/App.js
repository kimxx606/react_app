import React from 'react';
import { useSession } from './contexts/SessionContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ChatInterface from './components/Chat/ChatInterface';
import './styles/App.css';

function App() {
  const { sessionState } = useSession();
  const serviceId = 'intellytics-agent';
  
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar serviceId={serviceId} />
        <main className="main-content">
          <ChatInterface serviceId={serviceId} />
        </main>
      </div>
    </div>
  );
}

export default App; 