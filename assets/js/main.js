// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Hamburger Menu Toggle – רק אם האלמנטים קיימים
  const hamb = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamb && navLinks) {
    hamb.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // 2) Smooth Scrolling לעוגנים פנימיים
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3) Lightbox – רק אם קיימת גלריה ו־lightbox בדף
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lightboxImg   = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.close');
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    // פתיחת Lightbox בלחיצה על תמונה
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        // אם יש dataset.full קח אותו, אחרת – src
        lightboxImg.src = img.dataset.full || img.src;
      });
    });

    // סגירת Lightbox
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }
});
