// Main App component
const App = () => {
    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-brand">
                    <h1>My Portfolio</h1>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header id="home" className="hero">
                <div className="hero-content">
                    <h1>Welcome to My Portfolio</h1>
                    <p>I'm a passionate developer creating amazing web experiences</p>
                    <a href="#projects" className="cta-button">
                        View My Work
                    </a>
                </div>
            </header>

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <h2>Get In Touch</h2>
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                <div className="contact-links">
                    <a href="mailto:your.email@example.com" className="contact-link">Email</a>
                    <a href="https://linkedin.com/in/yourprofile" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
