"use client";
import React from 'react'
import ProjectTile from './projects/projecttile';
import Link from 'next/link';

const project = [
    {
        "image": "/Projects/p3/image.png",
        "type": "Deep Learning",
        "name": "Image Reconstruction with AutoEncoder",
        "githubLink": "https://github.com/sohamsangole/mnist-reconstruction-using-autoencoder",
        "desc": "This project demonstrates image reconstruction using an AutoEncoder model on the MNIST dataset. The AutoEncoder compresses input images into a smaller latent space and then reconstructs the original image."
    },
    {
        "image": "/Projects/p2/image.png",
        "type": "Reinforcement Learning",
        "name": "Ping Pong Game",
        "githubLink": "https://github.com/sohamsangole/Ping-Pong-Game-Reinforcement-Learning",
        "desc": "A Reinforcement Learning-based Pong game built with Python, where an AI agent learns to play and improve through Deep Q-Networks."
    },
    {
        "image": "/Projects/p1/image.png",
        "type": "Machine Learning",
        "name": "University Probability Predictor",
        "githubLink": "https://github.com/sohamsangole/University-Probability-Predictor",
        "desc": "University Probability Predictor is a web-based machine learning model that analyzes input features like GPA, test scores, extracurriculars, and more to estimate the probability of acceptance into a specific university."
    }
];

const ThreeProjects = () => {
    return (
        <div className="py-6">
            <div className="text-[24px] font-semibold p-0">📂 Stuff that I&apos;ve built...</div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.map((item, index) => (
                    <ProjectTile
                        key={index}
                        image={item.image}
                        type={item.type}
                        name={item.name}
                        githubLink={item.githubLink}
                        desc={item.desc}
                    />
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link href="/projects">
                    <div className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-lg max-w-max mx-auto">
                        View More Projects...
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default ThreeProjects
