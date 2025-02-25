import React from 'react';
import Project from './Project';
import '../style/Portfolio.css';

const Portfolio = () => (
    <div className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="flex-container">
            {projectData.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    image={project.image}
                    deployedLink={project.deployedLink}
                    githubLink={project.githubLink}
                />
            ))}
        </div>
    </div>
);

export default Portfolio;
