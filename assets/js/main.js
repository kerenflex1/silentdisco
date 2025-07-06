// JavaScript functionality for Silent Disco site

// Ensure DOM is loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamb = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamb.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Smooth Scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lightbox for gallery images
  const images = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxClose = lightbox.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.dataset.full;
    });
  });

  // Close lightbox on close button click or outside click
  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
