import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const { theme } = useContext(ThemeContext);

  // Determine if the theme is light based on the background color or a specific theme property
  const isLightTheme = theme.background === "#ffffff";

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between md:h-48 w-full space-x-0 md:space-x-6">
      <div
        className={`h-36 w-64 md:h-48 md:w-80 rounded-xl relative group overflow-hidden transition-all duration-500 ${isLightTheme ? 'border-2 border-black' : 'border-0'
          }`}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center"
        >
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 flex items-center justify-center border-2 rounded-full"
          >
            <FaGithub
              className="h-10 w-10 hover:opacity-75"
              style={{ color: theme.background }}
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl md:mt-0 mt-3 py-6 px-4 flex-1" style={{
        backgroundColor: `rgba(${parseInt(theme.background.slice(1, 3), 16)}, ${parseInt(theme.background.slice(3, 5), 16)}, ${parseInt(theme.background.slice(5, 7), 16)}, 0.5)`
      }}>
        <h5 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>{title}</h5>
        <p className="text-[#ADB7BE] mb-4" style={{ color: theme.text }}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
