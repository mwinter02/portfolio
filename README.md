# Portfolio Website

A modern, responsive portfolio website built with React.js.

## Features

- **Home Section**: Hero section with introduction
- **Projects Tab**: Showcase your projects with descriptions and technologies used
- **Contact Section**: Links to email, LinkedIn, and GitHub
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Option 1: Open directly in browser

Simply open `index.html` in your web browser. The React.js library is loaded via CDN.

### Option 2: Use a local server

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (if you have npx)
npx serve
```

Then open `http://localhost:8080` in your browser.

## Project Structure

```
portfolio/
├── index.html              # Main HTML entry point
├── src/
│   ├── App.js              # Main React component
│   ├── styles.css          # CSS styling
│   └── components/
│       └── Projects.js     # Projects section component
└── README.md
```

## Customization

1. **Update personal information**: Edit `src/App.js` to change the hero section text and contact links
2. **Add your projects**: Edit `src/components/Projects.js` to add your own projects
3. **Modify styling**: Edit `src/styles.css` to customize colors and layouts

## Technologies Used

- React.js 18 (via CDN)
- Babel (for JSX transformation)
- CSS3 with Flexbox and Grid