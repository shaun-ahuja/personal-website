import React from "react";
import "./ExperienceCard.css"

export const ExperienceCard = () => {
    return (
        <div className="job-card">
            <div className="job-header">
                <h3 className="company">Company Name</h3>
                <div className="job-details">
                    <span className="job-date">2022 - Present</span>
                    <span className="job-location"><i>New York, USA</i></span>
                </div>
            </div>
            <p className="job-title">Software Engineer</p>
            <p className="job-description">
                Led development of key features using React and Node.js. Improved application performance by 40%.
            </p>
        </div>



    );

}

export default ExperienceCard