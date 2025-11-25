// Home component - main portfolio page
const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <header id="home" className="hero">
                <div className="hero-content">
                    <h1>Welcome to My Website</h1>
                    <p>I'm a software developer with a passion for creating video games</p>
                    <a href="#projects" className="cta-button">
                        View My Work
                    </a>
                </div>
            </header>

            {/* Projects Section */}
            <Projects />

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
                        Since 2021, I have competed as a D1 athlete for Brown's Heavyweight Crew team.
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

