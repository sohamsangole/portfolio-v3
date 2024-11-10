"use client";
import React, { useEffect } from 'react';
import p5 from 'p5';

const Music = () => {
    useEffect(() => {
        const sketch = (p) => {
            let radius = 75;

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
                p.noFill();
                p.stroke(135, 206, 250, 150);
                p.strokeWeight(2);
            };

            p.draw = () => {
                p.background(0);

                p.ambientLight(255);

                p.rotateX(p.frameCount * 0.001);
                p.rotateY(p.frameCount * 0.01);
                p.orbitControl()


                p.beginShape(p.POINTS);
                for (let i = 0; i < p.TWO_PI; i += 0.05) {
                    for (let j = 0; j < p.PI; j += 0.05) {
                        let xoff = p.sin(i) * p.cos(j);
                        let yoff = p.sin(i) * p.sin(j);
                        let zoff = p.cos(i);

                        let num = 50;
                        let rippleEffect = p.sin(p.frameCount * 0.02) * 5;
                        let offset = p.noise(xoff * 2, yoff * 2, zoff + p.frameCount * 0.01) * num + rippleEffect;

                        let x = (radius + offset) * p.sin(i) * p.cos(j);
                        let y = (radius + offset) * p.sin(i) * p.sin(j);
                        let z = (radius + offset) * p.cos(i);

                        p.vertex(x, y, z);
                    }
                }
                p.endShape();
            };
        };

        const canvas = new p5(sketch);
        return () => canvas.remove();
    }, []);

};

export default Music;
