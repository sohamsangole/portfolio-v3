import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const { theme } = useContext(ThemeContext);

  const buttonStyles = {
    backgroundColor: isSelected ? theme.primary_color : theme.background,
    borderColor: isSelected ? theme.primary_color : theme.text,
    color: isSelected ? theme.background : theme.text,
    hoverBackgroundColor: isSelected ? theme.primary_color : theme.primary_color,
    hoverBorderColor: isSelected ? theme.primary_color : theme.primary_color,
    hoverTextColor: isSelected ? theme.background : theme.background,
  };

  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-colors duration-300`}
      onClick={() => onClick(name)}
      style={{
        backgroundColor: buttonStyles.backgroundColor,
        borderColor: buttonStyles.borderColor,
        color: buttonStyles.color,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = buttonStyles.hoverBackgroundColor;
        e.target.style.borderColor = buttonStyles.hoverBorderColor;
        e.target.style.color = buttonStyles.hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = buttonStyles.backgroundColor;
        e.target.style.borderColor = buttonStyles.borderColor;
        e.target.style.color = buttonStyles.color;
      }}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
