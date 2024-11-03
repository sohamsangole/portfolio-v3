"use client";
import React, { useState } from 'react';
import Education from './education';
import Experience from './experience';

const EducationExperience = () => {
    const [showEducation, setShowEducation] = useState(true);

    return (
        <div>
            <div className="flex mb-4">
                <button
                    onClick={() => setShowEducation(true)}
                    className={`flex-1 py-2 rounded ${showEducation ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
                >
                    <strong>Education</strong>
                </button>
                <button
                    onClick={() => setShowEducation(false)}
                    className={`flex-1 py-2 rounded ${!showEducation ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
                >
                    <strong>Experience</strong>
                </button>
            </div>

            {showEducation ? <Education /> : <Experience />}
        </div>
    );
}

export default EducationExperience;
