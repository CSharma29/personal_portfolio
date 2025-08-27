import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: '#1976d2' }}>Welcome to My Portfolio</h1>
            <p style={{ fontSize: '1.2rem' }}>This is the landing page where I showcase my work and skills.</p>
            <img src="https://placekitten.com/400/200" alt="Sample" style={{ borderRadius: '8px', margin: '20px 0' }} />
            <div style={{ marginTop: '30px' }}>
                <h2>Featured Projects</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '10px 0', fontWeight: 'bold' }}>Project 1: Portfolio Website</li>
                    <li style={{ margin: '10px 0', fontWeight: 'bold' }}>Project 2: React App Demo</li>
                    <li style={{ margin: '10px 0', fontWeight: 'bold' }}>Project 3: API Integration</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;