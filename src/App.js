// Projects data - basic info for project cards
// Note: Full project details are in separate files (src/projects/*.js)
const projectsData = [
    {
        id: 1,
        title: "Zombies",
        description: "Top-down zombie survival game built in a custom engine.",
        technologies: ["Java", "Engine Development", "Object Oriented"]
    },
    {
        id: 2,
        title: "AiRobic",
        description: "AI-powered fitness app that provides personalized workout plans.",
        technologies: ["Team programming", "React.js", "Google oAuth", "Firebase"]
    },
    {
        id: 3,
        title: "PNG Chaser",
        description: "First person chase game built in a custom engine.",
        technologies: ["C++", "OpenGL", "Data Oriented Design", "ECS"]
    },
    {
        id: 4,
        title: "Terrain Painter",
        description: "3D terrain painting application with real-time rendering.",
        technologies: ["Partner Programming", "C++", "OpenGL"]
    }
];

// Project details data - imported from individual project files
const projectDetailsData = {
    1: zombiesProject,
    2: airobicProject,
    3: pngChaserProject,
    4: terrainPainterProject
};

// Projects component
const Projects = ({ onNavigateToProject }) => {
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
                        <a
                            href={`#/project/${project.id}`}
                            className="project-link"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigateToProject(project.id);
                            }}
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Home component
const Home = ({ onNavigateToProject }) => {
    return (
        <>
            {/* Hero Section */}
            <header id="home" className="hero">
                <div className="hero-content">
                    <h1>Welcome to my website</h1>
                    <p>I'm a software developer with a passion for creating video games</p>
                    <a href="#projects" className="cta-button">
                        View My Work
                    </a>
                </div>
            </header>

            {/* Projects Section */}
            <Projects onNavigateToProject={onNavigateToProject} />

            {/* About Me Section */}
            <section id="about" className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <p>
                        I am a Master's student in Computer Science at Brown University with a passion for game development and software engineering.
                        Having been obsessed with video games from an early age, I am deeply interested in their mechanics and design.
                    </p>
                    <p>
                        I have rowed competitively for the past 10 years which has taught me the value of discipline and teamwork.
                        During college, I have competed as a D1 athlete for Brown's Heavyweight Crew team.
                        In my free time, I enjoy free diving, spearfishing, and exploring the outdoors.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <h2>Get In Touch</h2>
                <p>Feel free to reach out!</p>
                <div className="contact-links">
                    <a href="mailto:marcus_winter@brown.edu" className="contact-link">Email</a>
                    <a href="https://linkedin.com/in/mwinter02" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/mwinter02" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </section>
        </>
    );
};

// ProjectDetail component
const ProjectDetail = ({ projectId, onNavigateHome }) => {
    const project = projectDetailsData[projectId];

    if (!project) {
        return (
            <div className="project-detail-container">
                <div className="project-detail">
                    <h2>Project Not Found</h2>
                    <button onClick={onNavigateHome} className="back-button">
                        ← Back to Home
                    </button>
                </div>
            </div>
        );
    }

    // Render different content types
    const renderContent = (contentItem, index) => {
        switch (contentItem.type) {
            case 'text':
                return <p key={index} className="content-text">{contentItem.value}</p>;

            case 'heading':
                return <h3 key={index} className="content-heading">{contentItem.value}</h3>;

            case 'image':
                return (
                    <div key={index} className="content-image">
                        <img src={contentItem.src} alt={contentItem.alt || 'Project image'} />
                        {contentItem.caption && <p className="content-caption">{contentItem.caption}</p>}
                    </div>
                );

            case 'video':
                return (
                    <div key={index} className="content-video">
                        <video controls width="100%">
                            <source src={contentItem.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {contentItem.caption && <p className="content-caption">{contentItem.caption}</p>}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="project-detail-container">
            <div className="project-detail">
                <button onClick={onNavigateHome} className="back-button">
                    ← Back to Home
                </button>

                <h1>{project.title}</h1>

                {/* Render rich content overview */}
                <div className="project-overview">
                    <h2>Overview</h2>
                    <div className="project-content">
                        {project.content.map((contentItem, index) => renderContent(contentItem, index))}
                    </div>
                </div>

                {/* Technologies */}
                {/*<section className="project-technologies">*/}
                {/*    <h2>Technologies</h2>*/}
                {/*    <div className="technologies">*/}
                {/*        {project.technologies.map((tech, index) => (*/}
                {/*            <span key={index} className="tech-tag">{tech}</span>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*/!* Key Features *!/*/}
                {/*<section className="project-features">*/}
                {/*    <h2>Key Features</h2>*/}
                {/*    <ul>*/}
                {/*        {project.features.map((feature, index) => (*/}
                {/*            <li key={index}>{feature}</li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</section>*/}

                {/* Project Links */}
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
    );
};

// Main App component
const App = () => {
    const [currentView, setCurrentView] = React.useState('home');
    const [selectedProjectId, setSelectedProjectId] = React.useState(null);

    React.useEffect(() => {
        // Handle browser back/forward buttons
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#/project/')) {
                const id = hash.replace('#/project/', '');
                setCurrentView('project');
                setSelectedProjectId(id);
            } else {
                setCurrentView('home');
                setSelectedProjectId(null);
            }
        };

        handleHashChange(); // Check initial hash
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigateToProject = (id) => {
        window.location.hash = `/project/${id}`;
    };

    const navigateToHome = () => {
        window.location.hash = '/';
    };

    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-brand">
                    <h1 onClick={navigateToHome} style={{ cursor: 'pointer' }}>Marcus Winter</h1>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#home" onClick={navigateToHome}>Home</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {currentView === 'home' ? <Home onNavigateToProject={navigateToProject} /> : <ProjectDetail projectId={selectedProjectId} onNavigateHome={navigateToHome} />}

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Marcus Winter. All rights reserved.</p>
            </footer>
        </div>
    );
};

// Render the App
console.log('React:', typeof React);
console.log('ReactDOM:', typeof ReactDOM);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
