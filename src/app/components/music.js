"use client";
import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';

const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [audioError, setAudioError] = useState(false);
    const audioRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const audioContextRef = useRef(null);

    const initializeAudio = () => {
        const audioElement = new Audio('/Songs/Martin Garrix feat. Bonn - High On Life.mp3');
        audioElement.crossOrigin = "anonymous";
        audioElement.addEventListener('canplay', () => setIsLoading(false));
        audioElement.addEventListener('error', () => setAudioError(true));

        audioRef.current = audioElement;

        const handleSpacebarPress = (e) => {
            if (e.code === 'Space') {
                if (!audioContextRef.current) {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    audioContextRef.current = audioContext;
                    analyserRef.current = audioContext.createAnalyser();
                    const source = audioContext.createMediaElementSource(audioElement);
                    source.connect(analyserRef.current);
                    analyserRef.current.connect(audioContext.destination);

                    analyserRef.current.fftSize = 256;
                    const bufferLength = analyserRef.current.frequencyBinCount;
                    dataArrayRef.current = new Uint8Array(bufferLength);
                }

                audioContextRef.current.resume().then(() => {
                    if (audioRef.current.paused) {
                        audioRef.current.play();
                        setIsPlaying(true);
                    } else {
                        audioRef.current.pause();
                        setIsPlaying(false);
                    }
                });
            }
        };

        window.addEventListener('keydown', handleSpacebarPress);

        return () => {
            window.removeEventListener('keydown', handleSpacebarPress);
            audioElement.pause();
            audioElement.currentTime = 0;
        };
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cleanupAudio = initializeAudio();

            const sketch = (p) => {
                let radius = 75;
                let audioData = [];

                p.setup = () => {
                    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
                    p.noFill();
                    p.strokeWeight(2);
                    p.smooth();
                    p.frameRate(60);
                };

                p.draw = () => {
                    p.background(0);

                    let maxFrequency = Math.max(...audioData);

                    let ambientLightIntensity = p.map(maxFrequency, 0, 255, 0, 255);
                    p.ambientLight(ambientLightIntensity);

                    let lightColor = p.color(
                        p.map(audioData[10], 0, 255, 0, 255),
                        p.map(audioData[20], 0, 255, 50, 255),
                        p.map(audioData[50], 0, 255, 100, 255)
                    );

                    if (maxFrequency === 255) {
                        lightColor = p.color(255, 255, 255);
                    }

                    p.directionalLight(lightColor.levels[0], lightColor.levels[1], lightColor.levels[2], 0, 0, -1);

                    p.rotateX(p.frameCount * 0.002);
                    p.rotateY(p.frameCount * 0.005);
                    p.orbitControl();

                    if (audioRef.current && analyserRef.current && dataArrayRef.current) {
                        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                        const averageFrequency = dataArrayRef.current.reduce((acc, val) => acc + val, 0) / dataArrayRef.current.length;
                        radius = 75 + (averageFrequency / 3);
                        audioData = dataArrayRef.current;
                    }

                    p.stroke(0);
                    p.fill(p.map(audioData[20], 0, 255, 100, 255), p.map(audioData[30], 0, 255, 50, 200), 255, 150);
                    p.sphere(radius * 1.2);
                };
            };

            const canvas = new p5(sketch);

            return () => {
                canvas.remove();
                cleanupAudio();
            };
        }
    }, []);

    return (
        <div className="fixed left-0 right-0 py-4 bg-black text-center text-white">
            {isLoading && <p>Loading Audio...</p>}
            {audioError && <p>Failed to load audio.</p>}
            {!isLoading && !audioError && (
                <>
                    {isPlaying
                        ? "Now Playing: Martin Garrix feat. Bonn - High On Life"
                        : "Press Space to Play Music"}
                </>
            )}
        </div>
    );
};

export default Music;
