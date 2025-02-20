import React from 'react';
import '../style/footer.css';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linked.png';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li><a href="mailto:WadeBuchanan18@gmail.com"><img src={gmail} alt="gmail" width="30" /></a></li>
                <li><a href="https://github.com/Fearfyl"><img src={github} alt="github" width="30" /></a></li>
                <li><a href="https://www.linkedin.com/in/wade-buchanan-4a971034a/"><img src={linkedin} alt="linkedin" width="30" /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;