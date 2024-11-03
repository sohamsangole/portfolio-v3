"use client";
import React, { useEffect } from 'react';
import styles from "./style.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";
const Cursor = () => {
    const cursorSize = 30;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const smoothOptions = { damping: 25, stiffness: 300, mass: 0.25 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => { window.removeEventListener("mousemove", manageMouseMove) }
    })
    return (
        <motion.div className={styles.cursor}
            style={{ left: smoothMouse.x, top: smoothMouse.y }}>

        </motion.div>
    )
}

export default Cursor
