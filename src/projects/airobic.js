// AiRobic Project Data
var airobicProject = {
    id: 2,
    title: "AiRobic",
    description: "Final project for CS32 - Intro to Software Engineering at Brown University. " ,
    technologies: ["Team programming", "React.js", "Google oAuth", "Firebase"],
    features: [
        "AI-generated personalized workout plans",
        "Google OAuth authentication",
        "Real-time progress tracking with Firebase",
        "Social features for workout sharing"
    ],
    content: [
        {
            type: "text",
            value: "Final project for CS32 - Intro to Software Engineering at Brown University. " +
                "This was a team project where I worked with 3 classmates. This was a good learning experience for team programming, where we divided the work and had to efficiently collaborate to complete the project. " +
                "AiRobic is a web application that generates personalized workout plans using AI based on user preferences and fitness levels. " +
                "The application features Google OAuth for secure authentication and Firebase for real-time data storage and retrieval. " +
                "It utilized Markov Chains to create varied and engaging workout routines and utilizes React.js for a clean UI."
        },
        {
            type: "image",
            src: "src/images/airobic/home.png",
            caption: "AiRobic Home Page"
        },
        {
            type: "heading",
            value: "Contribution"
        },
        {
            type: "text",
            value: "I was primarily responsible for user authentication and account management. " +
                "This included implementing Google OAuth for secure login and registration, as well as managing user sessions. " +
                "I also worked on integrating Firebase for real-time data storage, allowing users to track their workout progress and view past routines. "
        },
        {
            type: "image",
            src: "src/images/airobic/workout_generator.png",
            caption: "Workout Generator Page"
        },
        {
            type: "image",
            src: "src/images/airobic/plan.png",
            caption: "Generated Workout Plan Example"
        }
        // Add more content blocks here: images, videos, text, headings
    ],
    github: "#",
    demoLink: "#"
};

