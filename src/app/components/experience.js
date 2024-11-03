import React from 'react';
import Image from 'next/image';

const Experience = () => {
    return (
        <div className="relative shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] overflow-hidden">
            {/* <div className="text-black font-bold text-[18px] mb-4">Experience</div> */}
            <div className="absolute left-[55px] top-[100px] h-[100%] w-[1px] bg-black -z-10"></div>
            <div className='p-[20px]'>
                {/* <div className="flex items-center mb-8 relative">
                    <div className="bg-white">
                        <Image
                            src="/bofa.png"
                            alt="Company Logo"
                            height={70}
                            width={70}
                            className="mr-4"
                        />
                    </div>
                    <div>
                        <div className="text-[#777777]">August 2025</div>
                        <div className='font-bold'>Bank Of America</div>
                        <div className='font-bold text-[#777777]'>SDE</div>
                    </div>
                </div> */}
                <div className="flex items-center mb-8 relative">
                    <div className="bg-white px-[10px]">
                        <Image
                            src="/logo-red.png"
                            alt="Company Logo"
                            height={50}
                            width={50}
                            className="mr-4"
                        />
                    </div>
                    <div>
                        <div className="text-[#777777]">June 2024 - July 2024</div>
                        <div className='font-bold'>Thermax Limited</div>
                        <div className='font-bold text-[#777777]'>Summer Intern</div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    <div className="w-[70px] h-[70px] bg-[#F3F3F3] rounded-full mr-4"></div>
                    <div>
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
