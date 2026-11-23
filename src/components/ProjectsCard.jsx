import "./ProjectsCard.css";

const projects = [
    {
        title: "TransitAlpha",
        description: "A synthetic NYC transit prediction market with a C++ order-matching engine, multi-agent simulation, and inventory and tail-risk optimization.",
        tags: ["C++", "WebAssembly", "Next.js", "TypeScript", "Julia", "JuMP"],
        code: "https://github.com/shaun-ahuja/trackbook",
        demo: "https://transitalpha.vercel.app",
    },
    {
        title: "PBMify",
        description: "Convert images into Math colouring sheets.",
        tags: ["React.js", "Node.js", "Express.js", "Firebase"],
        code: "https://github.com/Nick1093/PBMify",
    },
    {
        title: "AI Image Generator",
        description: "Use AI to create your own creative images.",
        tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
        code: "https://github.com/shaun-ahuja/MERN_AI_image_generator",
    },
];

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="actions">
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn" aria-label={`${project.title} code on GitHub`}>
                    <img src="/assets/blackGitHubLogo.png" alt="" className="black-github-logo" />
                    Code
                </a>
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn" aria-label={`${project.title} demo`}>Demo</a>
                )}
            </div>
        </article>
    );
}

export default function ProjectsCard() {
    return projects.map((project) => <ProjectCard key={project.title} project={project} />);
}
