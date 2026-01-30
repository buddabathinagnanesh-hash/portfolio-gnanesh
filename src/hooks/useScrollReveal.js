import { useEffect } from 'react';

// Throttle function for performance optimization
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};



// Scroll reveal hook using Intersection Observer
export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with reveal or reveal-stagger class
    const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
    reveals.forEach((element) => observer.observe(element));

    return () => {
      reveals.forEach((element) => observer.unobserve(element));
    };
  }, []);
};
