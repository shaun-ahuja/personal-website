import ProjectsCard from "./ProjectsCard.jsx";

export default function Projects() {
    return (
        <section className="projects-section">
            <h2 className="projects-header" id="projects-anchor">Projects</h2>
            <div className="projects-box projects-container">
                <ProjectsCard />
            </div>
        </section>
    );
}
