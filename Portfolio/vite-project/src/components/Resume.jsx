import React from 'react';
import '../style/resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>Resume</h2>
            
            {/* Downloadable Resume Link */}
            <div className="resume-download">
                <a href="../assets/Resume.pdf" download="Resume.pdf" className="btn">
                    Download My Resume
                </a>
            </div>

            {/* Proficiencies List */}
            <div className="proficiencies">
                <h3>Proficiencies</h3>
                <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React & React Router</li>
                    <li>Node.js & Express</li>
                    <li>TypeScript</li>
                    <li>PostgreSQL</li>
                    <li>Version Control (Git)</li>
                </ul>
            </div>
        </section>
    );
};

export default Resume;