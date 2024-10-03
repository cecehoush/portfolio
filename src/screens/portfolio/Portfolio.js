import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../../navigation/NavBar';
import './Portfolio.css';
import sustainabilityHub from '../../assets/sustainabilityHub.jpg';
import rowdyTeam from '../../assets/rowdyTeam.jpg';
import shPresenting from '../../assets/shPresenting.png';
import sillySH from '../../assets/sillySH.png';
import dansCookies from '../../assets/dansCookies.jpg';
import teamRowdy from '../../assets/teamRowdy.jpg';
import AwardsSection from './AwardsSection';  

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    // const awardsRef = useRef(null);
    const educationRef = useRef(null);
    // const referencesRef = useRef(null);

    const workExperienceData = [
        {
            title: "Full Stack Developer Internship",
            company: "Roadrunner Connect, MSU Denver",
            date: "June 2024 — Present",
            details: [
                "Collaborated on Roadrunner Connect, an interactive campus map app designed to enhance community engagement. Involved in designing the user interface, and developing both front-end and back-end components using Flutter (Dart) for the mobile app, MongoDB/Node.js for the back-end, and React (JavaScript, CSS) for the website.",
                "Implemented a check-in system, a friends system, comment/photo uploads, and a rewards system with contests (giveaways & leaderboards), badges, challenges to incentivize participation on campus.",
                "Employed Agile methodologies in a team of 5 doing two week sprints, taking the initiative to manage tasks and progress through ZenHub, and doing daily standup ceremonies. Utilized Git and GitHub for version control and collaboration, ensuring efficient project execution and team collaboration.",
                "Proactively Integrated Firebase for authentication (Google/iOS sign-in), Gravatar for team profiles, optimized API calls by indexing queries, and deployment in app stores.",
                "Presented app updates to 15+ stakeholders, created Qualtrics surveys, and incorporated feedback for continuous improvement."
            ],
            photos: [
                { src: rowdyTeam, alt: "Roadrunner Connect App Screenshot" },
                { src: dansCookies, alt: "Team Collaboration" },
                { src: teamRowdy, alt: "Project Management Board" }
            ]
        },
        {
            title: "Undergraduate Research Assistant",
            company: "Sustainability Hub, MSU Denver",
            date: "September 2023 — June 2024",
            details: [
                "The Sustainability Hub is a National Science Foundation-funded initiative, focused on sustainability data analysis, application prototyping, and machine learning model development under the guidance of the project manager.",
                "Worked in an Agile environment with a team of 6 researchers creating the UI/UX design to implement a prototype for the sustainability hub application and develop machine learning models to identify patterns within sustainability data, enhancing the project's objectives towards sustainability, data democracy, and inclusivity.",
                "Presented the project at the Undergraduate Research Symposium for MSU Denver."
            ],
            photos: [
                { src: sustainabilityHub, alt: "Data Analysis Visualization" },
                { src: shPresenting, alt: "Sustainability Hub Dashboard" }, 
                { src: sillySH, alt: "Sustainability Hub Dashboard" }
            ]
        },
        {
            title: "Learning Assistant (LA)",
            company: "Discrete Structures and Computer Science 1, MSU Denver",
            date: "January 2024 — Present",
            details: [
                "Worked as a peer mentor/tutor in the areas of Computer Science and Math (specifically Discrete Structures and Computer Science 1), assisting in lectures, holding weekly office hours, and supporting students with concepts, homework, and projects.",
                "Tutored 60+ students in these areas. Conducted one-on-one tutoring sessions for over 20 students, addressing individual learning needs and increasing student exam scores by 12%.", 
                "Held 8+ office hours weekly, answering questions and providing project guidance, decreasing assignment-related issues and late submissions by 20%."
            ]
        },
        {
            title: "Assistant Store Leader (ASL)",
            company: "GameStop, Aurora",
            date: "April 2023 — May 2024",
            details: []
        },
        {
            title: "Supervisor",
            company: "Concession Staffing Stands (CSS), Elitch Gardens Denver",
            date: "July 2021 — December 2023",
            details: []
        }
    ];

    const skillsData = {
        "Programming Languages": ["Java", "Python", "JavaScript", "SQL", "Ruby", "ARM Assembly"],
        "Web Technologies": ["HTML/CSS", "Flask", "React", "MongoDB", "Relational Databases", "Non-relational Databases"],
        "Tools & Frameworks": ["Git/GitHub", "Docker", "Heroku", "Postman", "Swagger", "Zenhub"],
        "Mobile Development": ["Flutter", "Mobile App Development"],
        "Data Science & AI": ["Machine Learning", "Deep Learning", "Reinforcement Learning", "TensorFlow/Keras"],
        "Software Engineering": ["Scrum/Agile", "UI/UX Design", "Figma", "Lexical and Syntax Parsing"],
        "Professional Attributes": ["Communication Skills", "Metacognition", "Problem Solving", "Leadership", "Teamwork", "Adaptability", "Working Under Pressure", "Attention to Detail", "Effective Time Management",],
        "Other Skills": ["Microsoft Office Suite", "Google Workspace", "Markdown", "Project Management", "Technical Writing", "Public Speaking"]
    };

    const awardsData = [
        {
            title: "DU/MSU Hackathon 2nd Place Award",
            description: [
                "Collaborated in 'Bits Please' team to create 'SpiderByte,' a coding challenge website for classroom learning (similar to Leetcode, but more designed to align with a course's material).",
                "This was created during a 28+ hour hackathon, after staying awake for 36+ hours, and overall winning 2nd place among 6+ other teams.",
                "Tools & Technologies: Python, Flask, SQLAlchemy, HTML/CSS, PythonTutor, and CodeMirror.",
                "Enhanced user experience with PythonTutor for code visualization and CodeMirror for in-browser editing.",
                "Developed and set up test cases to validate user-submitted code, ensuring accuracy and precision."
              ],
            link: "https://github.com/cecehoush/BitsPlease-SpiderByte"
        },
        {
            title: "Certificate: Fundamentals of Deep Learning with NVIDIA",
            description: [
                "I completed NVIDIA's Deep Learning course, gaining expertise in neural network fundamentals and practical implementation.",
                 "I learned how to use TensorFlow and Keras to build deep learning models."
            ]
        },
        {
            title: "Certificate: SQL Competition Winner",
            description: [
                "I won first place in MSU Denver's SQL competition for CS 3810 (Principles of Database Systems).",
                "I became the first woman to win this competition since it started, making history in a generally male-dominated field."
            ]
        },
        {
            title: "Provost's Honor Roll at Metropolitan State University of Denver",
            description: [
                "I was recognized for outstanding academic achievement at MSU Denver (each semester)."
            ]
        },
        {
            title: "Principal's Honor Roll at East High School",
            description: [
                "I was awarded a certificate for exceptional academic performance at Denver East High School in 2021."
            ]
        }
    ];

    const educationData = [
        {
            school: "Metropolitan State University of Denver",
            degree: "Computer Science",
            date: "January 2022 — December 2024",
            details: "GPA: 3.71"
        },
        {
            school: "University of Colorado Boulder",
            degree: "Computer Science",
            date: "August 2021 — December 2021",
            details: ""
        },
        {
            school: "Denver East High School",
            degree: "High School Diploma",
            date: "August 2017 — May 2021",
            details: "GPA: 3.8"
        }
    ];

    // const referencesData = [
    //     {
    //         name: "Alyssa Williams",
    //         phone: "720-470-3778",
    //         email: "awill157@msudenver.edu",
    //         linkedin: "linkedin.com/in/chillyssa",
    //         relationship: "Project Manager and mentor during my undergraduate research for the Sustainability Hub"
    //     },
    //     {
    //         name: "Daniel Pittman, Ph.D., CISSP",
    //         // phone: "303-789-9179",
    //         email: "dpittma8@msudenver.edu",
    //         linkedin: "linkedin.com/in/danpittman1",
    //         relationship: "Previous professor and the Principal Investigator for my undergraduate research for the Sustainability Hub and the Project Director for my Roadrunner Connect internship"
    //     },
    //     {
    //         name: "Steve Geinitz",
    //         email: "geinitz@msudenver.edu",
    //         linkedin: "linkedin.com/in/geinitz",
    //         relationship: "Professor for several of my core Computer Science courses and independent studies"
    //     }
    // ];

    useEffect(() => {
        const animateSection = (triggerElement, items) => {
            gsap.set(items, { opacity: 0, y: 20 });
            gsap.to(items, {
                scrollTrigger: {
                    trigger: triggerElement,
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power2.out',
            });
        };

        animateSection(experienceRef.current, '.experience-item');
        animateSection(skillsRef.current, '.skill-category');
        // animateSection(awardsRef.current, '.award-item');
        animateSection(educationRef.current, '.education-item');
        // animateSection(referencesRef.current, '.reference-row');
    }, []);

    return (
        <div className="portfolio-container">
            <NavBar />
            <main>
                <section className="experience" ref={experienceRef}>
                    <h2>Work Experience</h2>
                    {workExperienceData.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-content">
                                <h3>{exp.title}</h3>
                                <p className="company">{exp.company}</p>
                                <p className="date">{exp.date}</p>
                                <ul>
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            {exp.photos && exp.photos.length > 0 && (
                                <div className="experience-photos-container">
                                    {exp.photos.map((photo, photoIndex) => (
                                        <div key={photoIndex} className="experience-photo-container">
                                            <img 
                                                src={photo.src} 
                                                alt={photo.alt} 
                                                className="experience-photo"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                <section className="skills" ref={skillsRef}>
                    <h2>Skills</h2>
                    <div className="skills-container">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div key={category} className="skill-category">
                                <h3>{category}</h3>
                                <div className="skill-tags">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <AwardsSection awardsData={awardsData} />


                {/* <section className="awards" ref={awardsRef}>
                    <h2>Awards & Achievements</h2>
                    <div className="awards-container">
                        {awardsData.map((award, index) => (
                            <div key={index} className="award-item">
                                <h3>{award.title}</h3>
                                <p>{award.description}</p>
                                {award.link && (
                                    <a href={award.link} target="_blank" rel="noopener noreferrer">
                                        View Project On GitHub
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section> */}

                <section className="education" ref={educationRef}>
                    <h2>Education</h2>
                    <div className="education-timeline">
                        <div className="meter"></div>
                        {educationData.map((edu, index) => (
                            <div key={index} className="education-item">
                                <div className="education-content">
                                    <h3>{edu.school}</h3>
                                    <p className="degree">
                                        <strong>{edu.degree}</strong>
                                        {edu.details && <span className="gpa"> {edu.details}</span>}
                                    </p>
                                    <p className="date">{edu.date}</p>
                                </div>
                                <div className="education-dot"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* <section className="references" ref={referencesRef}>
                    <h2>References</h2>
                    <div className="references-table">
                        <div className="reference-header">
                            <div>Name</div>
                            <div>Contact Information</div>
                            <div>Relationship</div>
                        </div>
                        {referencesData.map((reference, index) => (
                            <div key={index} className="reference-row">
                                <div className="reference-name">{reference.name}</div>
                                <div className="reference-contact">
                                    {reference.phone && <p>📞 {reference.phone}</p>}
                                    <p>✉️ <a href={`mailto:${reference.email}`}>{reference.email}</a></p>
                                    <p>🔗 <a href={`https://www.${reference.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                                </div>
                                <div className="reference-relationship">{reference.relationship}</div>
                            </div>
                        ))}
                    </div>
                </section> */}
            
            </main>
        </div>
    );
};

export default Portfolio;