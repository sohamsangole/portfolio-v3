import React, { useContext } from "react";
import ContactLinks from "./ContactLinks";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className="footer border z-10 border-t border-l-transparent border-r-transparent flex flex-col items-center py-6"
      style={{
        backgroundColor: `rgba(${parseInt(theme.background.slice(1, 3), 16)}, ${parseInt(theme.background.slice(3, 5), 16)}, ${parseInt(theme.background.slice(5, 7), 16)}, 0.8)`,
        color: theme.text,
      }}
    >
      <div className="container p-6 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:justify-between md:px-12">
        <span className="text-center text-sm md:text-base">Soham Sangole</span>
        <div className="flex space-x-3 md:space-x-8">
          <ContactLinks />
        </div>
        <p className="text-sm md:text-base">© 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
