document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.body.classList.remove('nav-open');
    });
  });

  // Share button functionality
  const shareBtn = document.querySelector('.share-btn');
  shareBtn.addEventListener('click', function() {
    const shareData = {
      title: document.title,
      text: 'בדקי את Silent Disco TLV – השכרת אוזניות אלחוטיות למסיבות',
      url: window.location.href
    };
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(shareData.url).then(function() {
        alert('הקישור הועתק ללוח');
      });
    } else {
      prompt('העתק ושתף את הקישור:', shareData.url);
    }
  });
});
