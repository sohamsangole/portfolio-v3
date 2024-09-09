"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleButton = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="fixed top-4 right-4 z-50">
            <label className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        className="sr-only"
                    />
                    <div
                        className={`block w-14 h-8 rounded-full ${isDarkMode ? 'bg-gray-950' : 'bg-gray-200'
                            }`}
                    ></div>
                    <div
                        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${isDarkMode ? 'translate-x-full' : ''
                            }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default ToggleButton;
