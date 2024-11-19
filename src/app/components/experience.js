import React from 'react';
import Image from 'next/image';

const Experience = () => {
    return (
        <div className="relative shadow-[4px_4px_8px_rgba(0,0,0,0.15)] rounded-[10px] overflow-hidden">
            <div className="absolute left-[55px] top-[0px] h-[100%] w-[1px] opacity-50 bg-black -z-10 hidden lg:block"></div>
            <div className='p-[20px] flex flex-col items-center'>
                <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 relative w-full">
                    <div className="bg-white px-[10px] mb-4 lg:mb-0">
                        <Image
                            src="/logo-red.png"
                            alt="Company Logo"
                            height={50}
                            width={50}
                            className="mr-4"
                        />
                    </div>
                    <div className="text-center lg:text-left">
                        <div className="text-[#777777]">June 2024 - July 2024</div>
                        <div className='font-bold'>Thermax Limited</div>
                        <div className='font-bold text-[#777777]'>Summer Intern</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start relative w-full">
                    <div className="w-[70px] h-[70px] bg-[#F3F3F3] rounded-full mr-4 mb-4 lg:mb-0"></div>
                    <div className="text-center lg:text-left">
                        <div className="text-[#777777]">June 2023 - Present</div>
                        <div className='font-bold'>KEM Hospital</div>
                        <div className='font-bold text-[#777777]'>App Developer</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
