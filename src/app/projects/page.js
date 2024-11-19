import React from 'react'
import { NavBar } from '../components/navbar/navbar'
import { Projects } from '../components/projects/projects'

const page = () => {
    return (
        <div className="w-[80%] sm:w-[55%] mx-auto py-4">
            <NavBar />
            <Projects />
        </div>
    )
}

export default page
