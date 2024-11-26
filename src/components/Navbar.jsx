import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='flex justify-center items-center px-4 py-2 bg-red-700'>
            <h1>Portfolio</h1>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/project">Projects</Link>
            </nav>
        </header>
    )
}

export default Navbar