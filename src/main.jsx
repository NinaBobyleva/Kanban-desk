import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/userContext.jsx';

const root = createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
