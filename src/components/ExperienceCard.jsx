import "./ExperienceCard.css";

const experiences = [
    {
        company: "Meta",
        title: "Software Engineer Intern",
        description: "Built Instagram photo and video comment replies, interactive link previews, and GraphQL/REST infrastructure. Migrated like/unlike endpoints from Objective-C to Swift.",
        date: "May 2026 – August 2026",
        location: "New York, USA",
        logo: "Meta.png",
        logoClass: "meta-logo",
    },
    {
        company: "Mustang Capital",
        title: "Quantitative Developer",
        description: "Built event-driven market making for prediction markets, with live WebSocket order books, low-latency order management, and inventory-aware sizing, spread controls, and real-time risk tracking.",
        date: "September 2025 – April 2026",
        location: "Remote",
        logo: "MustangCapital.jpg",
        logoClass: "mustang-logo",
    },
    {
        company: "Meta",
        title: "Software Engineer Intern",
        description: "Built a debugger in GraphQL, PHP, and React.js for advertisement infrastructure.",
        date: "May 2025 – August 2025",
        location: "New York, USA",
        logo: "Meta.png",
        logoClass: "meta-logo",
    },
    {
        company: "Sun Life Financial",
        title: "Software Engineer Intern",
        description: "Used Java, SQL, AEM, and JUnit to build a full-stack querying application, scaled for millions of content fragments.",
        date: "May 2024 – August 2024",
        location: "Toronto, Canada",
        logo: "SunLife.png",
        logoClass: "sunlife-logo",
    },
    {
        company: "SharpStakes",
        title: "Software Engineer Intern",
        description: "Used Discord API & Python to build and host (AWS EC2) bots and hedging algorithms for 5,000+ users.",
        date: "January 2024 – April 2024",
        location: "Toronto, Canada",
        logo: "SharpStakes.png",
        logoClass: "sharpstakes-logo",
    },
    {
        company: "Good News Ventures",
        title: "Intern Analyst",
        description: "Supported 7 investment deals ($10M–$100M market cap), working with YC founders ex Goldman Sachs, Google, etc.",
        date: "September 2023 – December 2023",
        location: "Toronto, Canada",
        logo: "GNV.png",
        logoClass: "gnv-logo",
    },
];

function ExperienceItem({ experience }) {
    const { company, title, description, date, location, logo, logoClass } = experience;
    return (
        <article className="job-card">
            <div className="job-header">
                <div className="left-text">
                    <h3 className="company">{company}</h3>
                    <p className="job-title">{title}</p>
                    <p className="job-description">{description}</p>
                </div>
                <div className="job-details">
                    <span className="job-date">{date}</span>
                    <span className="job-location"><i>{location}</i></span>
                    <img src={`/assets/${logo}`} alt={`${company} logo`} className={logoClass} />
                </div>
            </div>
        </article>
    );
}

export default function ExperienceCard() {
    return experiences.map((experience) => (
        <ExperienceItem key={`${experience.company}-${experience.date}`} experience={experience} />
    ));
}
