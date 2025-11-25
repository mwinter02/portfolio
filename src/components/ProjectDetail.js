// Project details data - add more details for each project
const projectDetailsData = {
    1: {
        id: 1,
        title: "Zombies",
        description: "Top-down zombie survival game built in a custom engine.",
        fullDescription: "A comprehensive top-down zombie survival game featuring custom physics, AI pathfinding, and procedural wave generation. Built from scratch using Java with a custom game engine architecture.",
        technologies: ["Java", "Engine Development", "Object Oriented"],
        features: [
            "Custom game engine with component-based architecture",
            "Advanced AI pathfinding for zombie behavior",
            "Procedural wave generation system",
            "Custom physics and collision detection"
        ],
        video: "src/videos/zombies_demo.mp4",
        github: "#",
        demoLink: "#"
    },
    2: {
        id: 2,
        title: "AiRobic",
        description: "AI-powered fitness app that provides personalized workout plans.",
        fullDescription: "An intelligent fitness application that leverages AI to create personalized workout routines based on user goals, fitness level, and preferences. Features real-time progress tracking and social features.",
        technologies: ["Team programming", "React.js", "Google oAuth", "Firebase"],
        features: [
            "AI-generated personalized workout plans",
            "Google OAuth authentication",
            "Real-time progress tracking with Firebase",
            "Social features for workout sharing"
        ],
        video: null,
        github: "#",
        demoLink: "#"
    },
    3: {
        id: 3,
        title: "PNG Chaser",
        description: "First person chase game built in a custom engine.",
        fullDescription: "A first-person chase game utilizing modern rendering techniques and an Entity Component System (ECS) architecture. Built with C++ and OpenGL for optimal performance.",
        technologies: ["C++", "OpenGL", "Data Oriented Design", "ECS"],
        features: [
            "Custom ECS architecture for optimal performance",
            "Modern OpenGL rendering pipeline",
            "Data-oriented design patterns",
            "Custom physics and collision systems"
        ],
        video: null,
        github: "#",
        demoLink: "#"
    },
    4: {
        id: 4,
        title: "Terrain Painter",
        description: "3D terrain painting application with real-time rendering.",
        fullDescription: "An interactive 3D terrain painting tool that allows users to sculpt and paint terrain in real-time. Features advanced OpenGL rendering and custom brush systems.",
        technologies: ["Partner Programming", "C++", "OpenGL"],
        features: [
            "Real-time 3D terrain manipulation",
            "Custom brush system with various patterns",
            "Height-based texture blending",
            "Optimized rendering for smooth performance"
        ],
        video: null,
        github: "#",
        demoLink: "#"
    }
};

// ProjectDetail component - displays detailed information about a single project
const ProjectDetail = () => {
    const { useParams, useNavigate } = ReactRouterDOM;
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectDetailsData[id];

    if (!project) {
        return (
            <div className="project-detail-container">
                <div className="project-detail">
                    <h2>Project Not Found</h2>
                    <button onClick={() => navigate('/')} className="back-button">
                        ← Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <div className="project-detail">
                <button onClick={() => navigate('/')} className="back-button">
                    ← Back to Home
                </button>

                <h1>{project.title}</h1>

                {project.video && (
                    <div className="project-video">
                        <video controls width="100%">
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                <div className="project-detail-content">
                    <section className="project-overview">
                        <h2>Overview</h2>
                        <p>{project.fullDescription}</p>
                    </section>

                    <section className="project-technologies">
                        <h2>Technologies</h2>
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </section>

                    <section className="project-features">
                        <h2>Key Features</h2>
                        <ul>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    <div className="project-links">
                        {project.github !== "#" && (
                            <a href={project.github} className="project-detail-link" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        )}
                        {project.demoLink !== "#" && (
                            <a href={project.demoLink} className="project-detail-link" target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

