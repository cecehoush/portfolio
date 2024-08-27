import React from 'react';
import NavBar from '../navigation/NavBar';

const Nej = () => {
    return (
        <div>
            <NavBar />
            <main style={{ padding: '80px 20px 20px', minHeight: '100vh' }}>
                <h1>Nej</h1>
                <p>This is the nej page.</p>
            </main>
        </div>
    );
};

export default Nej;