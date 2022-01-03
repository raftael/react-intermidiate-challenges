import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Layout from './components/Layout/Layout';
import reportWebVitals from './reportWebVitals';
import { AppContextWrapper } from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContextWrapper>
      <Layout>
        <App />
      </Layout>
    </AppContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
