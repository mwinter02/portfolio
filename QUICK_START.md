# Quick Reference: Editing Your Portfolio

## ✅ Structure is Now Clean and Organized!

### Where Each Project's Data Lives:

- **Zombies**: `src/projects/zombies.js`
- **AiRobic**: `src/projects/airobic.js`
- **PNG Chaser**: `src/projects/pngchaser.js`
- **Terrain Painter**: `src/projects/terrainpainter.js`

### To Edit a Project:

1. Open the project file (e.g., `src/projects/zombies.js`)
2. Edit the `content` array to add your overview with images/videos
3. Save the file - that's it!

### Example: Adding Content to Zombies

Open `src/projects/zombies.js` and edit the `content` array:

```javascript
content: [
    {
        type: "text",
        value: "My zombie game started as a class project..."
    },
    {
        type: "video",
        src: "src/videos/zombies_demo.mp4",
        caption: "Early gameplay footage"
    },
    {
        type: "image",
        src: "src/images/zombies_menu.png",
        caption: "Main menu screen"
    },
    {
        type: "heading",
        value: "How the AI Works"
    },
    {
        type: "text",
        value: "The zombie AI uses A* pathfinding..."
    },
    {
        type: "image",
        src: "src/images/zombies_ai_diagram.png",
        caption: "AI decision tree"
    }
]
```

### Content Types Available:

| Type | Usage |
|------|-------|
| **text** | Paragraphs of text |
| **heading** | Section headings (H3) |
| **image** | Images with optional captions |
| **video** | Videos with optional captions |

### Where to Put Your Media:

- Images → `src/images/`
- Videos → `src/videos/`

### Current App.js Role:

App.js now just:
- Defines basic project card info (title, short description, technologies)
- References the individual project files
- Contains the routing logic and UI components

**No need to edit App.js to change project content!** Just edit the individual project files.

