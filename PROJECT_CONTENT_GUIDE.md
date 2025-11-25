# Project Content Guide

## Project File Structure

Each project now has its own dedicated file in `src/projects/`:
- `zombies.js` - Zombies project data
- `airobic.js` - AiRobic project data
- `pngchaser.js` - PNG Chaser project data
- `terrainpainter.js` - Terrain Painter project data

This makes it easy to manage and edit each project independently!

## How to Add Rich Content to Project Pages

Each project file contains a complete project object with a `content` array that supports mixed media.

## Content Structure

Each project in `projectDetailsData` has a `content` array that supports:

### 1. **Text Paragraphs**
``` javascript
{
    type: "text",
    value: "Your paragraph text here. Can be as long as needed."
}
```

### 2. **Headings**
``` javascript
{
    type: "heading",
    value: "Section Title"
}
```

### 3. **Images**
```javascript
{
    type: "image",
    src: "src/images/your-image.jpg",  // or "src/images/your-image.png"
    alt: "Description for accessibility",
    caption: "Optional caption below image"
}
```

### 4. **Videos**
```javascript
{
    type: "video",
    src: "src/videos/your-video.mp4",
    caption: "Optional caption below video"
}
```

## Example: Complete Project with Rich Content

Edit a project file like `src/projects/zombies.js`:

```javascript
// Zombies Project Data
const zombiesProject = {
    id: 1,
    title: "Zombies",
    description: "Top-down zombie survival game built in a custom engine.",
    technologies: ["Java", "Engine Development", "Object Oriented"],
    features: [
        "Custom game engine with component-based architecture",
        "Advanced AI pathfinding for zombie behavior"
    ],
    content: [
        {
            type: "text",
            value: "This project started as an exploration into game engine architecture..."
        },
        {
            type: "image",
            src: "src/images/zombies_screenshot1.png",
            alt: "Zombies game main menu",
            caption: "The main menu interface"
        },
        {
            type: "heading",
            value: "Gameplay Mechanics"
        },
        {
            type: "text",
            value: "The core gameplay loop focuses on wave-based survival..."
        },
        {
            type: "video",
            src: "src/videos/zombies_demo.mp4",
            caption: "Gameplay demonstration showing wave 5"
        },
        {
            type: "text",
            value: "Players must manage their resources carefully..."
        },
        {
            type: "image",
            src: "src/images/zombies_screenshot2.png",
            alt: "Gameplay screenshot",
            caption: "Mid-game action with multiple zombie types"
        },
        {
            type: "heading",
            value: "Technical Challenges"
        },
        {
            type: "text",
            value: "One of the biggest challenges was implementing efficient pathfinding..."
        }
    ],
    github: "https://github.com/yourusername/zombies",
    demoLink: "#"
};
```

## How to Add Your Content

1. **Add your images/videos** to the appropriate folders:
   - Images: `src/images/`
   - Videos: `src/videos/`

2. **Edit the project file** in `src/projects/`:
   - Open the specific project file (e.g., `zombies.js`, `airobic.js`)
   - Replace or add to the `content` array
   - Add as many content blocks as you need

3. **Content renders in order** - The content array items will appear in the exact order you specify

## Benefits of This Approach

- ✅ **Organized separate files** - Each project has its own file for easy editing
- ✅ **No code duplication** - App.js just references the project data
- ✅ **Easy to maintain** - Edit one project without touching others
- ✅ **Flexible ordering** - Mix text, images, and videos however you want
- ✅ **Consistent styling** - Automatically styled to match your design
- ✅ **Simple to update** - Just edit the individual project file
- ✅ **Scalable** - Easy to add new projects by creating a new file

## Adding a New Project

1. Create a new file: `src/projects/myproject.js`
2. Copy the structure from an existing project file
3. Add the project to `projectsData` in `App.js`
4. Add the project to `projectDetailsData` in `App.js`:
   ```javascript
   5: myProject
   ```
5. Add the script tag to `index.html`:
   ```html
   <script type="text/babel" src="src/projects/myproject.js"></script>
   ```

