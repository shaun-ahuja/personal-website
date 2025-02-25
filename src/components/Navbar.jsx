// import "./Navbar.css"

// function Navbar() {

//     return (
//         <div className="navbar">
//             <button className="name-logo">SHAUN AHUJA</button>
//             <button onClick="document.getElementById('about-container').scrollIntoView({ behavior:'smooth'});" className="about-button">About</button>
//             <button className="experience-button">Experience</button>
//             <button className="projects-button">Projects</button>
//         </div >
//     );
// }
// export default Navbar


import React from 'react';
import "./Navbar.css";

function Navbar() {
    const scrollToAbout = () => {
        document.getElementById('about-anchor').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToExperience = () => {
        document.getElementById('experience-anchor').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects-anchor').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="navbar">
            <button className="name-logo">SHAUN AHUJA</button>
            <div className="navbar-buttons">
                <button onClick={scrollToAbout} className="about-button">About</button>
                <button onClick={scrollToExperience} className="experience-button">Experience</button>
                <button onClick={scrollToProjects} className="projects-button">Projects</button>
            </div>

        </div >
    );
}

export default Navbar;