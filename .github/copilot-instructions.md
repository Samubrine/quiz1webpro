# Copilot Instructions: Quiz1WebPro

## Project Architecture

This is a **multi-page static website** for a Web Programming course assignment. The project uses a **dual-level structure**:
- **Root level** (`/`) contains only a redirect page (`index.html`) that forwards to `/quiz1/`
- **Quiz1 level** (`/quiz1/`) contains the actual website with 5 pages: home, profile, hometown, food, and tourist attractions

### File Structure
```
/                    # Root redirect level
├── index.html       # Redirects to quiz1/
├── package.json     # Bootstrap dependency only
├── css/styles.css   # Global styles (referenced from quiz1/ pages)
├── js/main.js       # Navigation logic (referenced from quiz1/ pages) 
├── images/          # Shared assets
└── quiz1/           # Main website directory
    ├── index.html   # Homepage
    ├── profile.html
    ├── hometown.html
    ├── food.html
    └── tourist.html
```

## Development Patterns

### HTML Structure
- **Fixed navbar** with `navbar-expand-lg navbar-dark fixed-top` classes
- **Fixed footer** at bottom with copyright
- **Container-based layout** with `container py-5` for consistent spacing
- **Bootstrap 5.3.3** loaded via CDN with integrity hashes
- **Google Fonts** (Roboto) preloaded for performance

### Navigation System
- Each page has identical navbar HTML structure
- Active nav link determined by `data-page` attribute matching current page
- JavaScript in `main.js` handles active state based on filename
- Navigation uses relative links (`profile.html` not `../quiz1/profile.html`)

### CSS Conventions
- **Roboto font family** consistently applied
- **Body padding**: 56px top, 60px bottom for fixed header/footer
- **Card-based design** with hover animations (translateY + scale transform)
- **Staggered animations** using nth-child selectors with delays (0.1s, 0.2s, etc.)
- **CSS animations**: `fadeIn`, `slideInUp`, button ripple effects
- **Mobile-first responsive** with `@media (max-width: 768px)` breakpoints

### JavaScript Patterns
- **DOMContentLoaded** event listener for initialization
- **Page detection** via `window.location.pathname` parsing
- **Attribute-based targeting** using `data-page` selectors
- **Minimal interactivity** - primarily navigation state management

## Key File Dependencies

### CSS Architecture
- `styles.css` is referenced from quiz1/ pages using `../css/styles.css`
- Bootstrap loaded via CDN before custom styles
- Google Fonts preconnect for performance optimization

### Asset References
- Images stored in `/images/` directory, referenced as `../images/` from quiz1/ pages
- Bootstrap JS bundle loaded via CDN with integrity verification
- Custom JS loaded as `../js/main.js`

## Development Workflow

### Adding New Pages
1. Create HTML file in `/quiz1/` directory
2. Copy navbar structure from existing page
3. Add corresponding `data-page` attribute to nav link
4. Update active nav link manually in new page
5. Follow container + py-5 spacing pattern

### Styling Guidelines
- Use Bootstrap classes as primary styling method
- Add custom animations via CSS classes with staggered delays
- Maintain card hover effects with translateY(-5px) + scale(1.02)
- Ensure mobile responsiveness with simplified animations

### Asset Management
- Place images in `/images/` directory
- Reference from quiz1/ pages using `../images/filename`
- Use placeholder services for development (placehold.co in hero sections)

## Project-Specific Conventions

### Bootstrap Usage
- **Cards**: Always use `h-100` class for equal height layouts
- **Buttons**: Use `btn btn-primary` with custom hover animations
- **Grid**: Consistent `col-md-3` (4 cards) or `col-md-6` (2 cards) patterns
- **Spacing**: `mb-4` for card margins, `py-5` for main content

### Animation System
- Page load: `fadeIn` animation on body
- Cards: `slideInUp` with staggered delays
- Hover effects: Transform + box-shadow changes
- Mobile: Simplified animations to improve performance

This is an academic project focused on demonstrating web fundamentals rather than complex functionality.