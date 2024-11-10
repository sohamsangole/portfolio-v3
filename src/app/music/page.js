"use client";
import dynamic from 'next/dynamic';

const Music = dynamic(() => import('../components/music'), {
    ssr: false,
});

const Page = () => {
    return (
        <>
            <Music />
        </>
    );
};

export default Page;