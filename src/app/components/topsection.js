"use client";
import { React } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const TopSection = () => (
    <div className='py-16 flex flex-col md:flex-row items-center md:items-start'>
        <div className='flex justify-center md:order-2 md:ml-[30px]'>
            <Image
                src="/pfp.jpg"
                alt="Profile"
                width={180}
                height={180}
                className='rounded-[20px] shadow-[4px_4px_4px_rgba(0,0,0,0.25),0_0_2px_rgba(0,0,0,0.25)]'
                style={{ minWidth: '90px', minHeight: '90px' }}
            />
        </div>

        <div className='mt-8 md:mt-0 md:order-1 flex-1 text-center md:text-left'>
            <div className='text-[40px] p-0'>Hi, I am Soham Sangole&nbsp;👋</div>

            <div className='text-[18px] text-[#5F5F5F] pt-0 pb-[8px]'>
                21 years old software developer from <strong>Mumbai,&nbsp;India</strong>
            </div>

            <div className='text-[18px]'>
                <span>I learn new things by building stuff.</span>
                <br />
                <span>
                    When I am not coding, I am mostly listening to music <Link href="/music">🎵</Link>.
                </span>
            </div>

            <div className='flex flex-col md:flex-row items-center mt-[30px]'>
                <a
                    href="/Documents/Soham_Sangole_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-white text-black text-[18px] font-bold rounded-[10px] transition-shadow'
                    style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)' }}
                >
                    <div className='px-[44px] py-[12px]'>Resume</div>
                </a>

                <div className='flex space-x-[51px] mt-4 md:mt-0 md:ml-[51px]'>
                    <a href="https://github.com/sohamsangole" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-[30px] hover:text-[#5F5F5F] transition' />
                    </a>
                    <a href="https://www.linkedin.com/in/sohamsangole" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-[30px] hover:text-[#5F5F5F] transition' />
                    </a>
                    <a href="mailto:sohamajaysangole@gmail.com">
                        <FaEnvelope className='text-[30px] hover:text-[#5F5F5F] transition' />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
export default TopSection;