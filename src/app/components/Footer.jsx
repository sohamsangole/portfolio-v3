import React from "react";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white flex flex-col items-center">
      <div className="container p-12 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:justify-between">
        <span className="text-center">Soham Sangole</span>
        <div className="flex space-x-3 md:space-x-8">
          <ContactLinks />
        </div>
        <p className="text-white">2024</p>
      </div>
    </footer>
  );
};

export default Footer;
