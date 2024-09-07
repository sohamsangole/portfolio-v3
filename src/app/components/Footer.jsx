import React from "react";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Soham Sangole</span>
        <div className="flex space-x-3 md:space-x-8">
          <ContactLinks />
        </div>
        <p className="text-white hidden md:block">2024</p>
      </div>
    </footer>
  );
};

export default Footer;
