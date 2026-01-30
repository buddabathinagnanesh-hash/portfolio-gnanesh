# Frontend Developer Portfolio

A modern, responsive React portfolio showcasing frontend development projects and skills with smooth animations and professional design.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Scroll reveals, hover effects, and smooth transitions
- **Performance Optimized**: Uses React hooks, Intersection Observer API, and throttling
- **Accessibility**: Semantic HTML, WCAG compliant, keyboard navigation
- **Modern Tech Stack**: React 18, Custom Hooks, CSS3 animations

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation with smooth scroll
│   ├── Hero.js         # Hero section with CTA
│   ├── Projects.js     # Projects grid with cards
│   ├── Skills.js       # Skills categories
│   ├── Contact.js      # Contact section
│   └── Footer.js       # Footer
├── hooks/              # Custom React hooks
│   ├── useScrollReveal.js    # Scroll animation logic
│   └── useNavbar.js          # Navbar state management
├── index.js            # React entry point
├── App.js              # Main component
└── index.css           # Global styles
```

## Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Customization

### Update Your Information
Edit the component files to add your:
- Name and contact details in `src/components/Contact.js`
- Project information in `src/components/Projects.js`
- Skills in `src/components/Skills.js`
- Links in `src/components/Navbar.js`

### Modify Colors
Change the CSS custom properties in `src/index.css` under `:root`:
```css
--primary: #3b82f6;
--accent: #8b5cf6;
--bg: #0a0e27;
```

### Adjust Animations
Modify transition durations and keyframe animations in `src/index.css`

## Performance Tips

- Images are lazy-loaded using Intersection Observer
- Scroll events are throttled to 60fps for smooth performance
- CSS animations use GPU acceleration (transform, opacity)
- Unused CSS is automatically removed during build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.
