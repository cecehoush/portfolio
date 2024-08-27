import React from 'react';
import NavBar from '../../navigation/NavBar';
import SideNav from '../../navigation/SideNav';

const HomePage = () => {
    return (
        <div className="relative">
            <NavBar />
            <SideNav />
            <main>
                <section id="welcome" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1>Welcome to My Website!!</h1>
                    <p>Here's a brief summary...</p>
                </section>
                <section id="about" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2>About Me</h2>
                    <p>This is the about me section...</p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;