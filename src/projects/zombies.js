// Zombies Project Data
var zombiesProject = {
    id: 1,
    title: "Zombies",
    description: "Top-down zombie survival game built in a custom engine.",
    technologies: ["Java", "Engine Development", "Object Oriented"],
    features: [
        "Custom game engine with component-based architecture",
        "Advanced AI pathfinding for zombie behavior",
        "Procedural wave generation system",
        "Custom physics and collision detection"
    ],
    content: [
        {
            type: "text",
            value: "Final project for the course CS1950N - 2D Game Engines at Brown University. The semester featured building a game engine from scratch in Java, focusing on object-oriented design principles and component-based architecture." +
                "My game is a Minecraft-inspired top-down zombie survival game, where players must survive waves of zombies. " +
                "Players can collect XP which can be used to upgrade equipment and open new areas of the map."

        },
        {
            type: "video",
            src: "src/videos/zombies_demo.mp4",
            caption: "Final Project Demo"
        },
        {
            type: "text",
            value: "The game features navigation meshes for path finding with string pull algorithm to create optimized paths for the zombies. Along with friction-based movement and physics implemented collision responses, the gameplay is smooth and engaging."
        },
        {
            type: "heading",
            value: "Engine Development",
        },
        {
            type: "text",
            value: "The engine was built from scratch in Java, utilizing a simple rendering tool GraphicsContext. " +
                "The semester focused on building a component-based architecture, allowing for flexible and reusable game objects and components. " +
                ""
        }
        // Add more content blocks as needed: images, videos, text, headings
    ],
    github: "#",
    demoLink: "#"
};

