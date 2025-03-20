import "./Name.css"
import emailLogo from "/public/assets/emaillogo.png"
import LinkedinLogo from "/public/assets/LinkedinLogo.png"
import xLogo from "/public/assets/XLogo.png"
import githubLogo from "/public/assets/GitHubLogo.png"
import resume from "/public/assets/ShaunResume.pdf"

function Name() {

    return (

        <div className="box">
            <div className="nameBox">
                <h1 className="name-title">Shaun Ahuja</h1>
                <div className="social-media-container">
                    <a href="mailto:ahuja.shaun00@gmail.com" rel="noopener noreferrer">
                        <img src={emailLogo} className="social-media" alt="Email" />
                    </a>
                    <a href="https://www.linkedin.com/in/shaun-ahuja/" target="_blank" rel="noopener noreferrer">
                        {/* <img src="./public/assets/LinkedinLogo.png" className="social-media" alt="LinkedIn" /> */}
                        <img src={LinkedinLogo} className="social-media" alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/shaun_ahuja" target="_blank" rel="noopener noreferrer">
                        {/* <img src="./public/assets/XLogo.png" className="social-media" alt="X" /> */}
                        <img src={xLogo} className="social-media" alt="X" />
                    </a>
                    <a href="https://github.com/shaun-ahuja" target="_blank" rel="noopener noreferrer">
                        {/* <img src="./public/assets/GitHubLogo.png" className="social-media" alt="GitHub" /> */}
                        <img src={githubLogo} className="social-media" alt="GitHub" />
                    </a>
                </div>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <button className="resume-button">Resume</button>
                </a>
                <p className="personal-description">
                    Software Engineer based in Toronto and New York</p>
            </div>
        </div>
    );
}
export default Name