// import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { UserProvider } from './context/userContext.jsx';
import { CardsProvider } from './context/cardContext.jsx';
import "react-day-picker/dist/style.css";
import { DateProvider } from './context/dateContext.jsx';
import { GlobalThemeProvider } from './context/globalThemeContext.jsx';

const root = createRoot(document.getElementById("root"));

root.render(
  
  // <React.StrictMode>
    <BrowserRouter>
      <GlobalThemeProvider>
        <DateProvider>
          <UserProvider>
            <CardsProvider>
              <App />
            </CardsProvider>
          </UserProvider>
        </DateProvider>
      </GlobalThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>,
);
