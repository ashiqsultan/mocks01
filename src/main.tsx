import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'app/app';
import TanStackProvider from './providers/TanStackProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <App />
    </TanStackProvider>
  </React.StrictMode>,
);
