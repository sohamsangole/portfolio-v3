import React from 'react';
import { motion, useInView } from 'framer-motion';

const TimelineItem = ({ experience, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className={`timeline-item mb-12 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
            {/* Timeline Marker */}
            <div className="timeline-marker w-8 h-8 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>

            {/* Experience Content */}
            <div className={`timeline-content w-5/12 p-6 text-white relative ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                <h3 className="text-xl font-semibold">
                    {experience.role} <span className="text-xl">@ {experience.company}</span>
                </h3>
                <p className="text-lg">{experience.duration} • {experience.location}</p>
                <ul className="text-[#ADB7BE] list-disc pl-5 mt-2">
                    {experience.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default TimelineItem;
