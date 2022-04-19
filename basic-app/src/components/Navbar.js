import React from 'react'
import logo from '../images/react-icon-small.png';

export default function Navbar() {
    return (
        <nav className='container top'>
            <div className='left-nav'>
                <img src={logo} alt='' />
                <h1>ReactFacts</h1>
            </div>
            <h2>React Course - Project 1</h2>
        </nav>
    )
}