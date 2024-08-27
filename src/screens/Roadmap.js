import React from 'react';
import NavBar from '../navigation/NavBar';

const Roadmap = () => {
    return (
        <div>
            <NavBar />
            <main style={{ padding: '80px 20px 20px', minHeight: '100vh' }}>
                <h1>Roadmap</h1>
                <p>This is the roadmap page.</p>
            </main>
        </div>
    );
};

export default Roadmap;