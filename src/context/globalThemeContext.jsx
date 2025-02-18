import { createContext } from "react";
import { useState } from "react";

export const GlobalThemeContext = createContext('null');

export const GlobalThemeProvider = ({children}) => {
    const [globalTheme, setGlobalTheme] = useState(JSON.parse(localStorage.getItem('globalTheme')) || 'light');

    const toggleTheme = () => {
        if (globalTheme === "light") {
            setGlobalTheme("dark");
        } else {
            setGlobalTheme("light");
        }
    }

    localStorage.setItem('globalTheme', JSON.stringify(globalTheme));

    return <GlobalThemeContext.Provider value={{globalTheme, setGlobalTheme, toggleTheme}}>{children}</GlobalThemeContext.Provider>
}