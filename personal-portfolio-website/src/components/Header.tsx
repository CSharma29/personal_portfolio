
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="main-header">
            <div className="header-grid">
                <span className="logo">Chirag Sharma</span>
                <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;