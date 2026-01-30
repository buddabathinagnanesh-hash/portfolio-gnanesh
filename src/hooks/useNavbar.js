import { useState, useEffect } from 'react';
import { throttle } from './useScrollReveal';

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = throttle(() => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 50);

      // Check active section
      const sections = document.querySelectorAll('section, .hero');
      let current = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home';
        }
      });

      setActiveSection(current);
    }, 16); // 60fps

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled, activeSection };
};
