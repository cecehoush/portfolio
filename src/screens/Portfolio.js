import React from 'react';
import NavBar from '../navigation/NavBar';

const Portfolio = () => {
    return (
        <div>
            <NavBar />
            <main style={{ padding: '80px 20px 20px', minHeight: '100vh' }}>
                <h1>Portfolio</h1>
                <p>This is the portfolio page.</p>
            </main>
        </div>
    );
};

export default Portfolio;