import React from 'react';
import Project from './Project';
import '../style/Portfolio.css';
import Readmegen from '../assets/Readmegen.png';
import Weatherapp from '../assets/WeatherApp.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';
import Project5 from '../assets/project5.jpg';
import Project6 from '../assets/project6.jpg';
import Apollo from '../assets/ApolloGreek.jpg';

const projects = [
    {
        title: 'Readme Generator',
        image: Readmegen,
        github: 'https://github.com/Fearfyl/readmegenerator',
    },
    {
        title: 'Weather Dashboard',
        image: Weatherapp,
        github: 'https://github.com/Fearfyl/weatherapp',
        deployed: 'https://weatherforecast-i0zm.onrender.com/',
    },
    {
        title: 'Employee Tracker',
        image: EmployeeTracker,
        github: 'https://github.com/Fearfyl/employeeDetailsTracker',
    },
    {
        title: 'Apollo Greek Tavern',
        image: Apollo,
        deployed: 'https://gitkaviyarasi.github.io/apollogreektavern/',
        github: 'https://github.com/Fearfyl/apollogreektavern',
    },
    {
        title: 'Project 5',
        image: Project5,
        deployed: 'https://example.com/project5',
        github: 'https://github.com/Fearfyl',
    },
    {
        title: 'Project 6',
        image: Project6,
        deployed: 'https://example.com/project6',
        github: 'https://github.com/Fearfyl',
    },
];

function Portfolio() {
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, idx) => (
                    <Project
                        key={idx}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployed}
                        githubLink={project.github}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;