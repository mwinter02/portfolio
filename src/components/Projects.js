// Projects data - customize with your own projects
const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of your first project. Add details about technologies used and your role.",
        technologies: ["React", "JavaScript", "CSS"],
        link: "#"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of your second project. Highlight key features and accomplishments.",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "#"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of your third project. Showcase your skills and experience.",
        technologies: ["Python", "Django", "PostgreSQL"],
        link: "#"
    }
];

// Projects component - displays portfolio projects
const Projects = () => {
    const projects = projectsData;

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};
