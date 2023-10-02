import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import reportWebVitals from './reportWebVitals';
import { AuthContexProvider } from './components/blog/blogadmin/authContext';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById('root');
const AppContainer = (
  <React.StrictMode>
    <AuthContexProvider> {/* Correct the component name */}
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
if (rootElement.hasChildNodes()) {
  hydrate(AppContainer, rootElement);
} else {
  render(AppContainer, rootElement);
}

reportWebVitals();
