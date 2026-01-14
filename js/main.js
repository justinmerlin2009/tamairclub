/* ==================== TAM AIR Club - Main JavaScript ==================== */

(function() {
  'use strict';

  // ==================== Mobile Navigation ====================

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileMenu() {
    navToggle?.classList.add('active');
    navMenu?.classList.add('active');
    navBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
    navBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    if (navMenu?.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  // Event listeners for mobile nav
  navToggle?.addEventListener('click', toggleMobileMenu);
  navBackdrop?.addEventListener('click', closeMobileMenu);

  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // ==================== Navbar Scroll Effect ====================

  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class
    if (currentScrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }

  // Throttle scroll events for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ==================== Active Nav Link ====================

  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  setActiveNavLink();

  // ==================== Smooth Scroll for Anchor Links ====================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== Scroll Reveal Animation ====================

  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Check on initial load

  // ==================== Year in Footer ====================

  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==================== Image Lazy Loading Fallback ====================

  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    const lazyLoad = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.removeAttribute('loading');
          observer.unobserve(img);
        }
      });
    };

    const observer = new IntersectionObserver(lazyLoad, {
      rootMargin: '100px'
    });

    lazyImages.forEach(img => observer.observe(img));
  }

  // ==================== External Links ====================

  // Open external links in new tab
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

})();
