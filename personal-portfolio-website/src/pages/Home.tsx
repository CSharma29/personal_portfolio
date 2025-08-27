import React from 'react';

const Home: React.FC = () => {
    return (
        <main className="homepage-main">
            <section className="hero-section">
                <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Profile"
                    className="profile-img"
                />
                <h1 className="hero-title">Chirag Sharma</h1>
                <h2 className="hero-subtitle">Web Developer & Designer</h2>
            </section>
            <section className="about-section">
                <h3>About Me</h3>
                <p>
                    Hi! I'm Chirag, a passionate web developer specializing in modern React and TypeScript applications. I love building beautiful, responsive websites and solving real-world problems with code.
                </p>
            </section>
            <section className="projects-section">
                <h3>Featured Projects</h3>
                <div className="projects-list">
                    <div className="project-card">
                        <h4>Portfolio Website</h4>
                        <p>A personal portfolio built with React and TypeScript.</p>
                    </div>
                    <div className="project-card">
                        <h4>React App Demo</h4>
                        <p>Demo app showcasing advanced React features and UI.</p>
                    </div>
                    <div className="project-card">
                        <h4>API Integration</h4>
                        <p>Project demonstrating REST API integration and data visualization.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;