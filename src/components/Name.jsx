import "./Name.css"
// import email from "./src/assets/EmailLogo.png"

function Name() {

    return (

        <div className="box">
            <div className="nameBox">
                <h1 className="name-title">Shaun Ahuja</h1>
                <div className="social-media-container">
                    <a href="mailto:ahuja.shaun00@gmail.com" rel="noopener noreferrer">
                        {/* <img src="./src/assets/EmailLogo.png" className="social-media" alt="Email" /> */}
                        <img src="./src/assets/emaillogo.png" className="social-media" alt="Email" />
                        {/* <img src={email} className="social-media" alt="Email" /> */}
                    </a>
                    <a href="https://www.linkedin.com/in/shaun-ahuja/" target="_blank" rel="noopener noreferrer">
                        <img src="./src/assets/LinkedinLogo.png" className="social-media" alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/shaun_ahuja" target="_blank" rel="noopener noreferrer">
                        <img src="./src/assets/XLogo.png" className="social-media" alt="X" />
                    </a>
                    <a href="https://github.com/shaun-ahuja" target="_blank" rel="noopener noreferrer">
                        <img src="./src/assets/GitHubLogo.png" className="social-media" alt="GitHub" />
                    </a>
                </div>
                <a href="./src/assets/ShaunResume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="resume-button">Resume</button>
                </a>
                <p className="personal-description">
                    Software Engineer based in Toronto and New York</p>
            </div>
        </div>
    );
}
export default Name