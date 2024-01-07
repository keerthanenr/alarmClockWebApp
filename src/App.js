// src/index.js (or src/App.js for TypeScript)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main React component
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // Import the configuration

Amplify.configure(awsconfig); // Configure Amplify with the imported settings

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);