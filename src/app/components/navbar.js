import React from 'react';

export const NavBar = () => {
    return (
        <nav className='fixed top-0 w-full bg-white z-20'>
            <div className="container py-4 flex justify-start items-center">
                <ul className="flex space-x-10 text-black font-bold text-[18px]">
                    <li>
                        <a href="#home">Projects</a>
                    </li>
                    <li>
                        <a href="#about">Experience</a>
                    </li>
                    <li>
                        <a href="#services">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
