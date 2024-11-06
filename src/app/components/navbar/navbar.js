import React, { forwardRef } from 'react';
import styles from "./style.module.scss";

const NavBarComponent = forwardRef((props, ref) => {

    return (
        <nav className={styles.nav}>
            <div className="container py-4 flex justify-start items-center">
                <ul className="flex space-x-10 text-black font-bold text-[18px]">
                    <li>
                        <a ref={ref} className={styles.navItem} href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#contactme">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

NavBarComponent.displayName = 'NavBar';

export const NavBar = NavBarComponent;
