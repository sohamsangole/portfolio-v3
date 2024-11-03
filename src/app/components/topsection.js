import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const TopSection = () => {
    return (
        <div className='py-6 flex items-start'>
            <div className='flex-1'>
                <div className='text-[40px] p-0'>Hi, I am Soham Sangole👋</div>
                <div className='text-[18px] text-[#5F5F5F] pt-0 pb-[8px]'>
                    21 years old software developer from <strong>Mumbai, India</strong>
                </div>
                <div className='text-[18px]'>
                    <span>I learn new things by building stuff.</span>
                    <br />
                    <span>When I am not coding, I am mostly listening to music 🎵.</span>
                </div>
                <div className='flex items-center mt-[30px]'>
                    <button
                        className='bg-white text-black text-[18px] font-bold rounded-[10px] transition-shadow'
                        style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)' }}
                    >
                        <div className='px-[44px] py-[12px]'>Resume</div>
                    </button>
                    <div className='flex space-x-[51px] ml-[51px]'>
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
            <Image
                src="/pfp.jpg"
                alt="Profile"
                width={180}
                height={180}
                className='ml-[30px] rounded-[20px] shadow-[4px_4px_4px_rgba(0,0,0,0.25),0_0_2px_rgba(0,0,0,0.25)]'
            />
        </div>
    );
}

export default TopSection;
