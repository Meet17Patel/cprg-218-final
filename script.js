// JavaScript for Travel Website

// Smooth scroll to sections
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Form validation
  document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('textarea').value.trim();
  
    if (!name) {
      alert('Please enter your name.');
      return;
    }
  
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!message) {
      alert('Please enter a message.');
      return;
    }
  
    alert('Thank you for your message! We will get back to you soon.');
    // Add functionality to send the form data to the server here
  });
  
  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  