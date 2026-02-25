import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({ children }) =>{
    const[theme , setTheme] = useState("light");
    console.log(theme)
useEffect(() => {
  document.documentElement.className = theme;
}, [theme]);
    const toggleTheme = () =>{
        setTheme(prev => (prev === "light"? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value = {{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}