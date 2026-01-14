/* ==================== Contact Form Handler (Formspree) ==================== */

(function() {
  'use strict';

  // Formspree form ID - Replace with your own from formspree.io
  const FORMSPREE_ID = 'xeeonjnz';
  const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

  const contactForm = document.getElementById('contact-form');
  const submitButton = contactForm?.querySelector('button[type="submit"]');
  const statusMessage = document.getElementById('form-status');

  if (!contactForm) return;

  // Form state
  let isSubmitting = false;

  // Show status message
  function showStatus(message, type = 'success') {
    if (!statusMessage) return;

    statusMessage.textContent = message;
    statusMessage.className = `form-status ${type}`;
    statusMessage.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      statusMessage.style.display = 'none';
    }, 5000);
  }

  // Update button state
  function setSubmitting(submitting) {
    isSubmitting = submitting;

    if (submitButton) {
      submitButton.disabled = submitting;
      submitButton.innerHTML = submitting
        ? '<i class="fas fa-spinner fa-spin"></i> Sending...'
        : '<i class="fas fa-paper-plane"></i> Send Message';
    }
  }

  // Reset form
  function resetForm() {
    contactForm.reset();
  }

  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate form
  function validateForm(formData) {
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || name.length < 2) {
      return { valid: false, error: 'Please enter your name (at least 2 characters).' };
    }

    if (!email || !isValidEmail(email)) {
      return { valid: false, error: 'Please enter a valid email address.' };
    }

    if (!message || message.length < 10) {
      return { valid: false, error: 'Please enter a message (at least 10 characters).' };
    }

    return { valid: true };
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return;

    const formData = new FormData(contactForm);

    // Validate
    const validation = validateForm(formData);
    if (!validation.valid) {
      showStatus(validation.error, 'error');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showStatus('Thank you! Your message has been sent successfully.', 'success');
        resetForm();
      } else {
        const data = await response.json();
        if (data.errors) {
          const errorMessages = data.errors.map(err => err.message).join(', ');
          showStatus(`Error: ${errorMessages}`, 'error');
        } else {
          throw new Error('Form submission failed');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showStatus('Sorry, there was an error sending your message. Please try again later.', 'error');
    } finally {
      setSubmitting(false);
    }
  }

  // Add submit event listener
  contactForm.addEventListener('submit', handleSubmit);

  // Real-time validation feedback
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    input.addEventListener('input', function() {
      // Clear error state on input
      this.classList.remove('error');
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    switch (field.name) {
      case 'name':
        isValid = value.length >= 2;
        break;
      case 'email':
        isValid = isValidEmail(value);
        break;
      case 'message':
        isValid = value.length >= 10;
        break;
    }

    if (!isValid && value.length > 0) {
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  }

})();
