// ========== UTILITIES ==========
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// ========== NAVBAR ==========
class NavbarHandler {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.menuToggle = document.getElementById('menuToggle');
    this.navLinks = document.getElementById('navLinks');
    this.navItems = document.querySelectorAll('.nav-link');
    this.lastScrollTop = 0;
    
    this.init();
  }

  init() {
    // Menu toggle
    this.menuToggle?.addEventListener('click', () => this.toggleMenu());
    
    // Close menu on link click
    this.navItems.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Scroll events with throttle for better performance
    window.addEventListener('scroll', throttle(() => this.handleScroll(), 16));
  }

  toggleMenu() {
    this.menuToggle.classList.toggle('active');
    this.navLinks.classList.toggle('show');
  }

  closeMenu() {
    this.menuToggle.classList.remove('active');
    this.navLinks.classList.remove('show');
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    
    // Smooth scroll class addition for visual effect
    if (scrollTop > 50) {
      if (!this.navbar.classList.contains('scrolled')) {
        this.navbar.classList.add('scrolled');
      }
    } else {
      this.navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    this.updateActiveNavLink();
  }

  updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    this.navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
}

// ========== SCROLL REVEAL ANIMATION ==========
class ScrollReveal {
  constructor() {
    this.revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    // Use Intersection Observer for better performance
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, this.observerOptions);

    this.revealElements.forEach(element => {
      this.observer.observe(element);
    });
  }
}

// ========== SMOOTH SCROLLING ==========
class SmoothScroll {
  constructor() {
    this.setupSmoothScroll();
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// ========== PARALLAX & VISUAL EFFECTS ==========
class VisualEffects {
  constructor() {
    this.hero = document.querySelector('.hero');
    this.init();
  }

  init() {
    window.addEventListener('mousemove', throttle((e) => this.handleMouseMove(e), 20));
    window.addEventListener('scroll', throttle(() => this.handleScroll(), 16));
  }

  handleMouseMove(e) {
    if (!this.hero) return;

    const x = (e.clientX / window.innerWidth) * 8;
    const y = (e.clientY / window.innerHeight) * 8;

    const glowBox = this.hero.querySelector('.glow-box');
    if (glowBox) {
      glowBox.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.hero-visual');

    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
  }
}

// ========== CARD HOVER EFFECTS ==========
class CardHoverEffects {
  constructor() {
    this.cards = document.querySelectorAll('.project-card, .contact-card, .skill-chip');
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => this.handleEnter(e));
      card.addEventListener('mouseleave', (e) => this.handleLeave(e));
    });
  }

  handleEnter(e) {
    const card = e.currentTarget;
    // Already handled by CSS transitions
    card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  }

  handleLeave(e) {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.boxShadow = '';
  }
}

// ========== PERFORMANCE MONITORING ==========
class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => this.logPerformance());
    } else {
      setTimeout(() => this.logPerformance(), 2000);
    }
  }

  logPerformance() {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      console.log(`⚡ Portfolio loaded in ${loadTime}ms`);
    }
  }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio optimized for video presentation');

  // Initialize all features
  new NavbarHandler();
  new ScrollReveal();
  new SmoothScroll();
  new VisualEffects();
  new CardHoverEffects();
  new PerformanceMonitor();

  // Add a smooth fade-in for the entire page
  document.body.style.animation = 'fadeIn 0.8s ease-out';
});

// Fallback fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);
