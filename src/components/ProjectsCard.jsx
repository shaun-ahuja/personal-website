import React from "react";
import "./ProjectsCard.css"
import blackGitHubLogo from "/public/assets/blackGitHubLogo.png"

export const ProjectsCard = () => {
    return (
        <>
            <div className="projects-container">
                <div className="project-card">
                    <h3>PBMify</h3>
                    <p>Convert images into Math colouring sheets.</p>
                    <div className="tags">
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Firebase</span>
                    </div>
                    <div className="actions">
                        <a href="https://github.com/Nick1093/PBMify" target="_blank" className="btn">
                            <img
                                src={blackGitHubLogo}
                                alt="GitHub Logo"
                                className="black-github-logo"
                            />
                            Code
                        </a>

                        {/* <a href="#demo1" className="btn">Demo</a> */}
                    </div>
                </div>

                <div className="project-card">
                    <h3>AI Image Generator</h3>
                    <p>Use AI to create your own creative images </p>
                    <div className="tags">
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Tailwind CSS</span>
                        <span>MongoDB</span>
                    </div>
                    <div className="actions">
                        <a href="https://github.com/shaun-ahuja/MERN_AI_image_generator" target="_blank" className="btn">
                            <img
                                src={blackGitHubLogo}
                                alt="GitHub Logo"
                                className="black-github-logo"
                            />
                            Code
                        </a>
                    </div>
                </div >
            </div>




        </>
    );
}

export default ProjectsCard;