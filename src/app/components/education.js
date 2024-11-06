import React from 'react';
import Image from 'next/image';

const Education = () => {
    return (
        <div className="relative shadow-[4px_4px_8px_rgba(0,0,0,0.15)] rounded-[10px] overflow-hidden">
            {/* <div className="text-black font-bold text-[18px] mb-4">Education</div> */}
            <div className="absolute left-[55px] top-[0px] h-[100%] w-[1px] opacity-50 bg-black -z-10"></div>
            <div className='p-[20px]'>
                <div className="flex items-center mb-10 relative">
                    <div className="bg-white">
                        <Image
                            src="/vjti.png"
                            alt="VJTI Logo"
                            height={70}
                            width={70}
                            className="mr-4"
                        />
                    </div>
                    <div>
                        <div className="text-[#777777]">2021 - 2025</div>
                        <div className='font-bold'>Veermata Jijabai Technological Institute</div>
                        <div className='font-bold text-[#777777]'>B.Tech. Information Technology</div>
                    </div>
                </div>
                <div className="flex items-center mb-10 relative">
                    <Image
                        src="/school.jpg"
                        alt="VJTI Logo"
                        height={70}
                        width={70}
                        className="mr-4 rounded-full"
                    />
                    <div>
                        <div className="text-[#777777]">2019 - 2021</div>
                        <div className='font-bold'>Golden Kids English Jr. College</div>
                        <div className='font-bold text-[#777777]'>Higher Secondary Certificate</div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    {/* <div className="w-[70px] h-[70px] bg-[#F3F3F3] rounded-full mr-4"></div> */}
                    <Image
                        src="/school.jpg"
                        alt="VJTI Logo"
                        height={70}
                        width={70}
                        className="mr-4 rounded-full"
                    />
                    <div>
                        <div className="text-[#777777]">2009 - 2019</div>
                        <div className='font-bold'>Golden Kids English High School</div>
                        <div className='font-bold text-[#777777]'>Secondary School Certificate</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
