import React, { useContext } from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const ContactLinks = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Link href="https://github.com/sohamsangole" target="_blank">
                <FaGithub
                    className="text-4xl hover:text-gray-400"
                    style={{ color: theme.text }}
                />
            </Link>
            <Link href="https://linkedin.com/in/sohamsangole" target="_blank">
                <FaLinkedin
                    className="text-4xl hover:text-gray-400"
                    style={{ color: theme.text }}
                />
            </Link>
            <Link href="mailto:sohamajaysangole@gmail.com">
                <FaEnvelope
                    className="text-4xl hover:text-gray-400"
                    style={{ color: theme.text }}
                />
            </Link>
        </>
    )
}

export default ContactLinks;
