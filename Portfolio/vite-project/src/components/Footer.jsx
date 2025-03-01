import React from 'react';
import '../style/footer.css';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
return (
    <footer class="footer">
        <ul>
            <li> <a href="mailto:fearfyl@website.com"><img src={gmail} alt="gmail" width="30"></img></a> </li>
            <li> <a href="https://github.com/fearfyl"><img src={github} alt="github" width="30"></img></a> </li>
            <li> <a href="https://www.linkedin.com/in/fearfyl/"><img src={linkedin} alt="linkedin" width="30"></img></a> </li>
        </ul>
    </footer>
)
}

export default Footer