import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Intellytics AI Agent</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li className="active">
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/account">계정</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 