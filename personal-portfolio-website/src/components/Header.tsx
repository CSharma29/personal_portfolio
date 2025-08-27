import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="main-header">
            <div className="header-content">
                <span className="logo">Chirag Sharma</span>
                <nav className="main-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;