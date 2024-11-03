import React from 'react';

export const NavBar = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center">
                <ul className="hidden md:flex space-x-10 text-black font-bold text-[18px]">
                    <li >
                        <a href="#home">Projects</a>
                    </li>
                    <li >
                        <a href="#about">Experience</a>
                    </li>
                    <li >
                        <a href="#services">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
