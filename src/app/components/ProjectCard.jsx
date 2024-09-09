import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, theme }) => {
  return (
    <div className="relative">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div
          className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center"
          style={{ backgroundColor: theme.overlay }}
        >
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 flex items-center justify-center border-2 rounded-full"
            style={{ borderColor: theme.border }}
          >
            <FaGithub
              className="h-10 w-10"
              style={{ color: theme.background }}
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 py-6 px-4" style={{ backgroundColor: theme.background }}>
        <h5 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>{title}</h5>
        <p className="text-[#ADB7BE]" style={{ color: theme.text }}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
