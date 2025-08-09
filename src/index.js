import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Create the root using React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();
