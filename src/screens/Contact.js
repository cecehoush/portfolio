import React from 'react';
import NavBar from '../navigation/NavBar';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <main style={{ padding: '80px 20px 20px', minHeight: '100vh' }}>
                <h1>Contact</h1>
                <p>This is the contact page.</p>
            </main>
        </div>
    );
};

export default Contact;