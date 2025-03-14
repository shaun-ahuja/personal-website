import React from "react";
import "./ExperienceCard.css"

export const ExperienceCard = () => {
    return (
        <>
            <div className="job-card" >
                <div className="job-header">
                    <div className="left-text">
                        <h3 className="company">Meta</h3>
                        <p className="job-title">Software Engineer Intern</p>
                        <p className="job-description">
                            Incoming Software Engineer Intern at Meta for Summer 2025.
                        </p>

                    </div>

                    <div className="job-details">
                        <span className="job-date">(Incoming) Summer 2025</span>
                        <span className="job-location"><i>New York, USA</i></span>
                        <img
                            src="./src/assets/Meta.png"
                            alt="Meta Logo"
                            className="meta-logo"
                        />
                    </div>
                </div>
            </div>



            <div className="job-card">
                <div className="job-header">
                    <div className="left-text">
                        <h3 className="company">Sun Life Financial</h3>
                        <p className="job-title">Software Engineer Intern</p>
                        <p className="job-description">
                            Used Java, SQL, AEM, and JUnit to build a full-stack querying application, scaled for millions of content fragments.
                        </p>

                    </div>
                    <div className="job-details">
                        <span className="job-date">May 2024 - August 2024</span>
                        <span className="job-location"><i>Toronto, Canada</i></span>
                        <img
                            src="./src/assets/SunLife.png"
                            alt="Sun Life Logo"
                            className="sunlife-logo"
                        />
                    </div>
                </div>
            </div>

            <div className="job-card">
                <div className="job-header">
                    <div className="left-text">
                        <h3 className="company">SharpStakes</h3>
                        <p className="job-title">Software Engineer Intern</p>
                        <p className="job-description">
                            Used Discord API & Python to build and host (AWS EC2) bots and hedging algorithims for +5,000 users.
                        </p>

                    </div>

                    <div className="job-details">
                        <span className="job-date">January 2024 - April 2024</span>
                        <span className="job-location"><i>Toronto, Canada</i></span>
                        <img
                            src="./src/assets/SharpStakes.png"
                            alt="SharpStakes Logo"
                            className="sharpstakes-logo"
                        />
                    </div>
                </div>
            </div>

            <div className="job-card">
                <div className="job-header">
                    <div className="left-text">
                        <h3 className="company">Good News Ventures</h3>
                        <p className="job-title">Intern Analyst</p>
                        <p className="job-description">
                            Supported 7 investment deals ($10M-$100M market cap), working with YC founders ex Goldman Sachs, Google, etc.
                        </p>

                    </div>

                    <div className="job-details">
                        <span className="job-date">September 2023 - December 2023</span>
                        <span className="job-location"><i>Toronto, Canada</i></span>
                        <img
                            src="./src/assets/GNV.png"
                            alt="SharpStakes Logo"
                            className="gnv-logo"
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default ExperienceCard;