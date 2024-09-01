import React from 'react';
import NavBar from '../../navigation/NavBar';
import SideNav from '../../navigation/SideNav';
import './HomePage.css';
import myPicture from '../../assets/myPicture.jpg';
import cloudImage2 from '../../assets/cloud2.png';
import cloudImage from '../../assets/cloud.png';
import nej from '../../assets/nej.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HomePage = () => {
    return (
        <div className="relative">
            <NavBar />
            <SideNav />
            <main>
                <section id="welcome" className="welcome-section">
                    <div className="cloud-background">
                        <img src={cloudImage2} alt="Main Cloud Background" className="main-cloud" />
                        <img src={cloudImage} alt="Left Cloud" className="left-cloud" />
                        <img src={cloudImage} alt="Right Cloud" className="right-cloud" />
                    </div>
                    <div className="profile-picture">
                        <img src={myPicture} alt="My Profile" />
                    </div>
                    <div className="social-icons">
                        <a href="https://linkedin.com/in/cecehoush" target="_blank" rel="noopener noreferrer"><FaLinkedin size={26} /></a>
                        <a href="https://github.com/cecehoush" target="_blank" rel="noopener noreferrer"><FaGithub size={26} /></a>
                        <a href="https://instagram.com/cetsukii" target="_blank" rel="noopener noreferrer"><FaInstagram size={26} /></a>
                        <a href="mailto:carolannehoush@gmail.com"><MdEmail size={26} /></a>
                    </div>
                    <h1>Welcome to My Website!!</h1>
                    <p>Here's a brief summary...</p>
                </section>

                <hr className="border-t border-gray-300 my-8" />

                <section id="about" className="full-height-section">
                    <h2>About Me</h2>
                    <p>I am a full stack developer and a UI/UX designer...</p>
                </section>

                <hr className="border-t border-gray-300 my-8" />

                <section id="nej" className="full-height-section">
                    <div className="nej">
                        <div className="nej-picture">
                            <img src={nej} alt="nej" />
                        </div>
                        <img src={cloudImage2} alt="Nej Cloud" className="nej-cloud" />
                    </div>
                    <h2>Nej</h2>
                    <p>This is the Nej section...</p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;