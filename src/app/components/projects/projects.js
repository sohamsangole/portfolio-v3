"use client";
import React, { useEffect, useState } from 'react';
import ProjectTile from './projecttile';

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/Projects/desc.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className='py-16'>
            <div className='text-[20px] font-bold p-0 mb-8'>What I’ve Built:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectTile
                        key={index}
                        image={project.image}
                        type={project.type}
                        name={project.name}
                        githubLink={project.githubLink}
                        desc={project.desc}
                    />
                ))}
            </div>
        </div>
    );
};
