import React, { forwardRef } from 'react';
import Link from 'next/link';
import styles from "./style.module.scss";

const NavBarComponent = forwardRef((props, ref) => {

    return (
        <nav className={styles.nav}>
            <div className="container py-4 flex justify-start items-center">
                <ul className="flex space-x-10 text-black font-bold text-[18px]">
                    <li>
                        <Link href="/">Hello !</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    {/* <li>
                        <Link href="/">Experience</Link>
                    </li> */}
                    <li>
                        <Link href="contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

NavBarComponent.displayName = 'NavBar';

export const NavBar = NavBarComponent;
