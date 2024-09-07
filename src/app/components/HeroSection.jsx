"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactLinks from "./ContactLinks";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center ">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-6 sm:space-y-0 sm:space-x-6 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center sm:items-start justify-center w-full sm:w-1/2 text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-3xl lg:leading-normal font-semibold">
            Hello! : )
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            I’m a developer who leverages technology to create impactful products. With a passion for innovation and a touch of independent research, I turn complex challenges into practical, user-centered solutions.
          </p>
          <div className="flex flex-col mt-4 sm:flex-row items-center sm:items-start justify-center sm:justify-center sm:space-x-8 space-y-6 sm:space-y-0">
            <Link
              href="https://drive.google.com/file/d/1NMb0kPPn1ROLFwu9CQfmky3h3mc2H9je/view?usp=drive_link"
              className="inline-block py-2 px-5 rounded-full border hover:bg-gray-400 bg-white text-black"
              target="_blank"            >
              Résumé
            </Link>
            <ContactLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
