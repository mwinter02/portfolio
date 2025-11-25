# Portfolio Website

A modern, responsive portfolio website built with React.js featuring individual project detail pages.

## Features

- **Home Section**: Hero section with introduction
- **Projects Section**: Showcase your projects with descriptions and technologies
- **Project Detail Pages**: Individual pages for each project with rich content (text, images, videos)
- **About Me Section**: Personal background and interests
- **Contact Section**: Links to email, LinkedIn, and GitHub
- **Responsive Design**: Works on desktop and mobile devices
- **Hash-based Routing**: Navigate between home and project pages

## Getting Started

### Option 1: Open directly in browser

Simply open `index.html` in your web browser. The React.js library is loaded via CDN.

### Option 2: Use a local server (Recommended)

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have npx)
npx serve
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
PortfolioWebsite/
├── index.html                    # Main HTML entry point
├── src/
│   ├── App.js                   # Main React app with routing
│   ├── styles.css               # All CSS styling
│   ├── projects/                # Individual project data files
│   │   ├── zombies.js
│   │   ├── airobic.js
│   │   ├── pngchaser.js
│   │   └── terrainpainter.js
│   ├── images/                  # Project images
│   └── videos/                  # Project videos
│       └── zombies_demo.mp4
├── PROJECT_CONTENT_GUIDE.md     # Guide for editing projects
└── README.md                    # This file
```

## Customization

1. **Update personal information**: Edit `src/App.js` to change hero text and contact info
2. **Edit project content**: Edit individual files in `src/projects/` to update project details
3. **Add images/videos**: Place media files in `src/images/` or `src/videos/`
4. **Modify styling**: Edit `src/styles.css` to customize colors and layouts

See `PROJECT_CONTENT_GUIDE.md` for detailed instructions on adding rich content to project pages.

## Technologies Used

- React.js 18 (via CDN)
- Hash-based client-side routing
- Babel for JSX transformation
- Babel (for JSX transformation)
- CSS3 with Flexbox and Grid