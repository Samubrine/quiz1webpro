# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a web programming quiz project (`quiz1webpro`) for a "Pemrograman Web" (Web Programming) course. It's a static HTML website showcasing personal information across multiple pages, built using Bootstrap for styling and responsive design.

## Common Development Commands

### Setup and Dependencies
```bash
# Install Bootstrap dependency
npm install

# Start a local development server (using Node.js)
npx http-server -p 3000

# Alternative: Python simple server
python -m http.server 8000

# Alternative: PHP built-in server
php -S localhost:8000
```

### Development Workflow
```bash
# View current project structure
Get-ChildItem -Recurse -File

# Check for HTML syntax issues
# (Manual validation recommended via W3C validator)

# Preview changes in browser
# Navigate to: http://localhost:3000/quiz1/ or http://localhost:8000/quiz1/
```

### Git Operations
```bash
# Check current status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update [page-name]: [description]"

# Push to GitHub
git push origin main
```

## Architecture and Structure

### Project Layout
```
quiz1webpro/
├── index.html              # Root redirect file (redirects to quiz1/)
├── package.json            # Dependencies (Bootstrap)
├── css/
│   └── styles.css         # Global custom styles
├── quiz1/                 # Main application directory
│   ├── index.html         # Homepage with navigation
│   ├── profile.html       # Personal profile page (empty)
│   ├── hometown.html      # Hometown description page (empty) 
│   ├── food.html          # Local food showcase page (empty)
│   └── tourist            # Tourist attractions file (empty)
└── README.md              # Project requirements and task breakdown
```

### URL Structure
The site follows a specific routing pattern:
- `/quiz1/` → Homepage
- `/quiz1/profile.html` → Profile page
- `/quiz1/hometown.html` → Hometown page  
- `/quiz1/food.html` → Local food page
- `/quiz1/tourist.html` → Tourist places page

### Technical Stack
- **Frontend**: HTML5, CSS3, Bootstrap 5.3.8
- **Fonts**: Google Fonts (Roboto)
- **Images**: Placeholder images from via.placeholder.com
- **Responsive Design**: Bootstrap grid system and components

### Navigation Structure
All pages use a consistent Bootstrap navbar with:
- Brand/logo area
- Responsive hamburger menu for mobile
- Navigation links to all main sections
- Fixed footer with copyright information

### Styling Approach
- **Global Styles**: Roboto font family, custom color scheme
- **Bootstrap Integration**: Local Bootstrap files via node_modules
- **Component Styling**: Custom card designs, button styles, and navbar theming
- **Color Palette**: Primary blue (#007bff), dark gray navbar (#343a40)

## Development Notes

### Current State
- Only `quiz1/index.html` is implemented with basic structure
- All other HTML pages (`profile.html`, `hometown.html`, `food.html`, `tourist`) are empty and need content
- The `tourist` file appears to be missing the `.html` extension

### Next Steps for Development
1. Complete content for all empty HTML pages
2. Create `/js/script.js` for interactive features (referenced but missing)
3. Add images to `/images/` directory (folder structure mentioned in README)
4. Fix the `tourist` file extension issue
5. Implement JavaScript interactivity as specified in requirements

### Bootstrap Dependencies
The project uses local Bootstrap files from `node_modules`. Ensure Bootstrap is installed before development:
- Bootstrap CSS: `/node_modules/bootstrap/dist/css/bootstrap.min.css` 
- Bootstrap JS: `/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`

### Page Template Pattern
Each page should follow the established pattern in `index.html`:
- DOCTYPE html5 declaration
- Bootstrap CSS and custom CSS includes
- Header with page title
- Responsive navigation bar
- Main content container
- Fixed footer

This structure ensures consistency across all pages and maintains responsive design principles.