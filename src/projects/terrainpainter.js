// Terrain Painter Project Data
var terrainPainterProject = {
    id: 4,
    title: "Terrain Painter",
    description: "3D terrain painting application with real-time rendering.",
    technologies: ["Partner Programming", "C++", "OpenGL"],
    features: [
        "Real-time 3D terrain manipulation",
        "Custom brush system with various patterns",
        "Height-based texture blending",
        "Optimized rendering for smooth performance"
    ],
    content: [
        {
            type: "text",
            value: "Final project for CS1230 - Computer Graphics at Brown University. " +
                "This was a group project where I worked with a classmate. We assigned responsibilities for the project and worked efficiently as a team to complete it. " +
                "An interactive terrain painting tool that allows users to create 3d terrains using a 2d canvas with various brushes. " +
                "The application features OpenGL rendering"
        },
        {
            type: "image",
            src: "src/images/terrainpainter/coolIsland.png",
            caption: "3D Terrain generation Example"
        },
        {
            type: "heading",
            value: "Contribution"
        },
        {
            type: "text",
            value: "I was primarily responsible for implementing the 2D canvas and terrain generation. " +
                "This included a parameter-based terrain generation algorithms, which would be determined by converting the values from the 2D canvas and creating a heightmap. " +
                "This process involved calculating vertex heights based on terrain types and blending with neighboring vertices. " +
                "Also involved applying noise functions to create realistic terrain features." +
                "My partner focused on the OpenGL rendering pipeline and added cell shading option for interesting visuals."
        },
        {
            type: "heading",
            value: "User Interface"
        },
        {
            type: "image",
            src: "src/images/terrainpainter/userInterface.png",
            caption: "Basic User Interface with Brush and Fill Options"
        },
        {
            type: "text",
            value: "The user interface allows users to select different brush types, adjust brush size and strength, and choose terrain types for painting. " +
                "Each terrain type has unique properties, such as height and noise parameters, which influence the appearance of the painted terrain. " +
                "When the terrain is painted, the application creates a 3D mesh based on the heightmap generated from the 2D canvas. "
        },
        {
            type: "image",
            src: "src/images/terrainpainter/finishedDrawing.png",
            caption: "Finished Drawing on 2D Canvas"
        },
        {
            type: "image",
            src: "src/images/terrainpainter/topIsland.png",
            caption: "Generated output from 2D drawing"
        },
        {
            type: "image",
            src: "src/images/terrainpainter/toonIsland.png",
            caption: "Cell Shaded Rendering Option"
        }
        // Add more content blocks here: images, videos, text, headings
    ],
    github: "#",
    demoLink: "#"
};

