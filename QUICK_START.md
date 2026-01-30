# 🚀 QUICK START GUIDE

## 1️⃣ INSTALL DEPENDENCIES
```bash
npm install
```

## 2️⃣ RUN DEVELOPMENT SERVER
```bash
npm run dev
```
**Opens at: `http://localhost:5173`**

## 3️⃣ CUSTOMIZE YOUR PORTFOLIO

### Step 1: Update Navbar
File: `src/components/Navbar.jsx`
```jsx
<a href="#home" className="logo">GB</a>  // Change GB to your initials
<span className="logo-text">Ganesh</span>  // Change to your name
```

### Step 2: Update Hero Section
File: `src/components/Hero.jsx`
```jsx
<h1 className="hero-title">Frontend Developer building fast, accessible, and scalable interfaces</h1>
<p className="hero-subtitle">Specialized in clean code and performance optimization</p>
<p className="hero-desc">
  I create web experiences that users love and developers maintain. Focused on accessibility, 
  performance, and building products that solve real problems.
</p>
```

### Step 3: Update Your Projects
File: `src/components/Projects.jsx`
```jsx
const projects = [
  {
    title: 'Your Project Name',
    status: 'Live',
    problem: 'What problem did you solve?',
    solution: 'How did you solve it?',
    tech: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more projects...
]
```

### Step 4: Update Your Skills
File: `src/components/Skills.jsx`
```jsx
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5 Semantic', icon: '🏗️' },
      { name: 'CSS3 & Responsive', icon: '🎨' },
      { name: 'JavaScript ES6+', icon: '⚙️' },
      { name: 'React & Hooks', icon: '⚛️' },
    ],
  },
  // ...
]
```

### Step 5: Update Contact Information
File: `src/components/Contact.jsx`
```jsx
const contacts = [
  {
    icon: '📧',
    title: 'Email',
    value: 'your@email.com',
    link: 'mailto:your@email.com',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    link: 'https://linkedin.com/in/yourprofile',
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: 'github.com/yourprofile',
    link: 'https://github.com/yourprofile',
  },
]
```

## 4️⃣ CUSTOMIZE COLORS (Optional)

File: `src/index.css`
```css
:root {
  --primary: #3b82f6;        /* Main blue - change this */
  --accent: #8b5cf6;         /* Purple accent - change this */
  --bg: #0a0e27;             /* Dark background */
  --text: #e5e7eb;           /* Light text */
  /* ... more variables ... */
}
```

## 5️⃣ BUILD FOR PRODUCTION
```bash
npm run build
```
Creates optimized `dist/` folder

## 6️⃣ DEPLOY

### Option A: Netlify (Recommended)
1. Push to GitHub
2. Go to netlify.com
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Option B: Vercel
1. Push to GitHub
2. Go to vercel.com
3. Import project
4. Vercel auto-detects Vite
5. One-click deploy!

### Option C: GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## 📝 FILE STRUCTURE REFERENCE

```
src/
├── components/         # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/              # Custom hooks
│   ├── useScrollReveal.js
│   └── useNavbar.js
├── App.jsx            # Main component
├── main.jsx           # Entry point
└── index.css          # All styling

index.html            # HTML template
vite.config.js        # Vite configuration
package.json          # Dependencies
```

## ✅ TESTING CHECKLIST

- [ ] All text is updated with your info
- [ ] Project links point to correct URLs
- [ ] Mobile layout looks good
- [ ] Animations play smoothly
- [ ] No broken links
- [ ] Email link works
- [ ] Social links work
- [ ] Page loads fast

## 🆘 COMMON ISSUES

**Q: Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Q: Changes not showing?**
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Restart dev server

**Q: Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Q: Animations not working?**
- Check browser console for errors
- Ensure JavaScript is enabled
- Try a different browser

## 📚 NEXT STEPS

1. ✅ Customize all content
2. ✅ Test on mobile devices
3. ✅ Record a demo video
4. ✅ Deploy to Netlify/Vercel
5. ✅ Share with recruiters!

## 🎯 TIPS FOR RECRUITERS

- Keep project descriptions concise and impact-focused
- Link directly to live projects and GitHub repos
- Use real project links instead of placeholders
- Update with your actual contact information
- Test all links before sending
- Make sure animations play smoothly on screen recording

## 💡 MAKE IT YOURS

The portfolio is designed to be easily customizable. Just edit the React components and CSS variables. No need to touch configuration files unless you want to add more complex features.

Have fun! 🚀
