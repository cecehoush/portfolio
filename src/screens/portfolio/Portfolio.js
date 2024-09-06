import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../../navigation/NavBar';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const awardsRef = useRef(null);
    const educationRef = useRef(null);
    const referencesRef = useRef(null);

    const workExperienceData = [
        {
            title: "Full Stack Developer Intern",
            company: "MSU Denver",
            date: "June 2024 — Present",
            details: [
                "Collaborated on 'Roadrunner Connect', an interactive campus map app designed to enhance community engagement. Involved in designing the user interface, and developing both front-end and back-end components using Flutter and Dart.",
                "Implemented a check-in system, comment/photo uploads, and a rewards system (raffles, contests, leaderboards, badges, challenges) to incentivize participation.",
                "Employed Agile methodologies in a team of 5, managing tasks and progress through ZenHub. Utilized Git and GitHub for version control and collaboration, ensuring efficient project execution and team collaboration."
            ]
        },
        {
            title: "Undergraduate Research Assistant",
            company: "Sustainability Hub, MSU Denver",
            date: "September 2023 — June 2024",
            details: [
                "Sustainability Hub is a National Science Foundation-funded initiative, focused on sustainability data analysis, application prototyping, and machine learning model development under the guidance of the project manager.",
                "Worked in an Agile environment with a team of 6 researchers creating the UI/UX design to implement a prototype for the sustainability hub application and develop machine learning models to identify patterns within sustainability data, enhancing the project's objectives towards sustainability, data democracy, and inclusivity."
            ]
        },
        {
            title: "Learning Assistant (LA)",
            company: "MSU Denver",
            date: "January 2024 — Present",
            details: [
                "Worked as a peer mentor/tutor in the areas of Computer Science and Math (specifically Discrete Structures and Computer Science 1), assisting in lectures, holding weekly office hours, and supporting students with concepts, homework, and projects."
            ]
        },
        {
            title: "Assistant Store Leader (ASL)",
            company: "GameStop",
            date: "April 2023 — May 2024",
            details: []
        },
        {
            title: "Supervisor",
            company: "Concession Staffing Stands (CSS)",
            date: "July 2021 — December 2023",
            details: []
        }
    ];

    const skillsData = {
        "Programming Languages": ["Java", "Python", "JavaScript", "SQL", "Ruby", "ARM Assembly"],
        "Web Technologies": ["HTML/CSS", "Flask", "React", "MongoDB", "Relational Databases", "Non-relational Databases"],
        "Tools & Frameworks": ["Git/GitHub", "Docker", "Heroku", "Postman", "Swagger", "Zenhub"],
        "Mobile Development": ["Flutter", "Mobile App Development"],
        "Data Science & AI": ["Machine Learning", "Deep Learning", "TensorFlow/Keras"],
        "Software Engineering": ["Scrum/Agile", "UI/UX Design", "Figma", "Lexical and Syntax Parsing"],
        "Professional Attributes": ["Communication Skills", "Metacognition", "Problem Solving", "Leadership", "Teamwork", "Adaptability", "Working Under Pressure", "Attention to Detail", "Effective Time Management",],
        "Other Skills": ["Microsoft Office Suite", "Google Workspace", "Markdown", "Project Management", "Technical Writing", "Public Speaking"]
    };

    const awardsData = [
        {
            title: "DU/MSU Hackathon 2nd Place Award",
            description: "I co-created 'SpiderByte,' a course-aligned coding challenge website, using Python, Flask, SQLAlchemy, HTML/CSS, PythonTutor, and CodeMirror during a 28-hour hackathon in a team.",
            link: "https://github.com/cecehoush/BitsPlease-SpiderByte"
        },
        {
            title: "Certificate: Fundamentals of Deep Learning with NVIDIA",
            description: "I completed NVIDIA's Deep Learning course, gaining expertise in neural network fundamentals and practical implementation."
        },
        {
            title: "Certificate: SQL Competition Winner",
            description: "I won first place in MSU Denver's SQL competition for CS 3810 (Principles of Database Systems). I became the first woman to win this competition since it started, making history in a generally male-dominated field.",
        },
        {
            title: "Provost's Honor Roll at MSU Denver",
            description: "I was recognized for outstanding academic achievement at Metropolitan State University of Denver for each semester."
        },
        {
            title: "Principal's Honor Roll at East High School",
            description: "I was awarded a certificate for exceptional academic performance at Denver East High School in 2021."
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

    const referencesData = [
        {
            name: "Alyssa Williams",
            phone: "720-470-3778",
            email: "awilliams7529@gmail.com",
            linkedin: "linkedin.com/in/chillyssa",
            relationship: "Project Manager and mentor during my undergraduate research for the Sustainability Hub"
        },
        {
            name: "Daniel Pittman, Ph.D., CISSP",
            phone: "303-789-9179",
            email: "depittman@gmail.com",
            linkedin: "linkedin.com/in/danpittman1",
            relationship: "Previous professor and the Project Director (Principal Investigator) for my undergraduate research for the Sustainability Hub and Roadrunner Connect internship"
        },
        {
            name: "Steve Geinitz",
            email: "geinitz@gmail.com",
            linkedin: "linkedin.com/in/geinitz",
            relationship: "Professor for several of my core Computer Science courses and independent studies"
        }
    ];

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
        animateSection(awardsRef.current, '.award-item');
        animateSection(educationRef.current, '.education-item');
        animateSection(referencesRef.current, '.reference-row');
    }, []);

    return (
        <div className="portfolio-container">
            <NavBar />
            <main>
                <section className="experience" ref={experienceRef}>
                    <h2>Work Experience</h2>
                    {workExperienceData.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3>{exp.title}</h3>
                            <p className="company">{exp.company}</p>
                            <p className="date">{exp.date}</p>
                            <ul>
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
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

                <section className="awards" ref={awardsRef}>
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
                </section>

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

                <section className="references" ref={referencesRef}>
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
                </section>
            
            </main>
        </div>
    );
};

export default Portfolio;