import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && 'navBlock'}`}>
            <img
                className='navLogo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
                alt='Netflix' 
            />
            <img
                className='navAvatar'
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix" 
            />
        </div>
    )
}

export default Nav;

