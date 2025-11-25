// Projects data - customize with your own projects
const projectsData = [
    {
        id: 1,
        title: "Zombies",
        description: "Top-down zombie survival game built in a custom engine.",
        technologies: ["Java", "Engine Development", "Object Oriented"],
        link: "#"
    },
    {
        id: 2,
        title: "AiRobic",
        description: "AI-powered fitness app that provides personalized workout plans.",
        technologies: ["Team programming", "React.js", "Google oAuth", "Firebase"],
        link: "#"
    },
    {
        id: 3,
        title: "PNG Chaser",
        description: "First person chase game built in a custom engine.",
        technologies: ["C++", "OpenGL", "Data Oriented Design", "ECS"],
        link: "#"
    },
    {
        id: 4,
        title: "Terrain Painter",
        description: "3D terrain painting application with real-time rendering.",
        technologies: ["Partner Programming", "C++", "OpenGL"],
        link: "#"
    }
];

// Projects component - displays portfolio projects
const Projects = () => {
    const { Link } = ReactRouterDOM;

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <Link to={`/project/${project.id}`} className="project-link">View Project</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};
