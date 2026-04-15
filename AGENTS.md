# AGENTS.md

## Project Overview
Static website for "Supermerprado El Rey" supermarket (university course project).
Plain HTML/CSS/JS - no build tools, testing, or linting.

## File Structure
- `index.html` - Homepage with product grids
- `about.html` - About us page
- `carnes.html` - Meats category page
- `styles.css` - All styles (BEM naming, CSS custom properties)
- `Refs/design-system.md` - Design tokens reference
- `Images/` - Static assets

## Important Conventions

### Case-Sensitive Paths
CSS references `images/Logo.svg` (lowercase) but the folder is `Images/` (capitalized).
Verify path casing matches the actual folder structure.

### Design System Discrepancies
The `Refs/design-system.md` documents `#16A34A` for primary green, but `styles.css` uses `#00552C`. Trust `styles.css` as the source of truth for implemented styles.

### CSS Architecture
- BEM naming convention (`.block__element--modifier`)
- CSS custom properties for design tokens (`:root` variables)
- Responsive breakpoints: 1200px, 992px, 768px, 480px

## Development
Open HTML files directly in a browser. No server or build step required.
