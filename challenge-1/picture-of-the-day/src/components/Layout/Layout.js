import React from 'react';
import Header from '../Header/Header';
import './Layout.styles.css';

function Layout({ children }) {
  return (
        <div className="layout-container">
          <Header />
          <main>{children}</main>
      </div>   
  );
}

export default Layout;
