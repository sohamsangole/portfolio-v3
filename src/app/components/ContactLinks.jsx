import React from 'react'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const ContactLinks = () => {
    return (
        <>
            <Link href="https://github.com/sohamsangole" target="_blank">
                <FaGithub className="text-white text-4xl hover:text-gray-400" />
            </Link>
            <Link href="https://linkedin.com/in/sohamsangole" target="_blank">
                <FaLinkedin className="text-white text-4xl hover:text-gray-400" />
            </Link>
            <Link href="mailto:sohamajaysangole@gmail.com">
                <FaEnvelope className="text-white text-4xl hover:text-gray-400" />
            </Link>
        </>
    )
}

export default ContactLinks