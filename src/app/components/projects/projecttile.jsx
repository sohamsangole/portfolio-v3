import React from 'react';
import Image from 'next/image';

const ProjectTile = ({ image, type, name, githubLink, desc }) => {
    return (
        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group border rounded-[20px] shadow-lg overflow-hidden block"
        >
            <div className="relative w-full h-40 mb-4">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>

            <div className="p-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{type}</p>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-90 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{desc}</p>
            </div>
        </a>
    );
};

export default ProjectTile;
