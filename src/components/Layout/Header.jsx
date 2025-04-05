import React from 'react';

const Header = ({ onNavigateToMain }) => {
  return (
    <header className="header">
      <div className="header-logo" onClick={onNavigateToMain} style={{ cursor: 'pointer' }}>
        <h1>Intellytics AI Agent</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li className="active">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToMain(); }}>홈</a>
          </li>
          <li>
            <a href="#account">계정</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 