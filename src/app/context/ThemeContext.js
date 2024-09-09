// app/context/ThemeContext.js
"use client";

import { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDarkMode(false);
            setTheme(lightTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        setTheme(newTheme ? darkTheme : lightTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};
