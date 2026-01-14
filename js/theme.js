/* ==================== Theme Toggle (Light/Dark Mode) ==================== */

(function() {
  'use strict';

  // Get theme toggle button
  const themeToggle = document.getElementById('theme-toggle');

  // Check for saved theme preference or system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getThemePreference() {
    const savedTheme = localStorage.getItem('tam-air-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark mode
    return 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tam-air-theme', theme);

    // Update toggle button icon
    if (themeToggle) {
      const sunIcon = themeToggle.querySelector('.sun-icon');
      const moonIcon = themeToggle.querySelector('.moon-icon');

      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }

      // Update aria-label for accessibility
      themeToggle.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function init() {
    const theme = getThemePreference();
    setTheme(theme);

    // Add click event listener
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
      // Only update if no saved preference
      if (!localStorage.getItem('tam-air-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
