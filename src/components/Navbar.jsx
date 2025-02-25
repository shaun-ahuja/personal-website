import "./Navbar.css"

function Navbar() {

    return (
        <div className="navbar">
            <button className="name-logo">SHAUN AHUJA</button>
            <button onClick="document.getElementById('about-container').scrollIntoView({ behavior:'smooth'});" className="about-button">About</button>
            <button className="experience-button">Experience</button>
            <button className="projects-button">Projects</button>
        </div >
    );
}
export default Navbar

