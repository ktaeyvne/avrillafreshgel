/**
 * AVRILLA Enhanced Script
 * Handles carousel, WA personalization, timer, scroll
 */

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Testimonials show all (no rotate, simpler)
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach(t => t.style.display = 'block');

  // Urgency timer (3 days from now)
  function startTimer() {
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 3);
    endTime.setHours(23, 59, 59);

    function updateTimer() {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        document.getElementById('timer').innerHTML = 'PROMO SELESAI!';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('timer').innerHTML = `${days}H ${hours}J ${minutes}M ${seconds}D`;
    }
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  startTimer();

  // Smooth scroll for nav
  document.querySelectorAll('nav a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Floating WA button
  const floatingWA = document.createElement('a');
  floatingWA.href = 'https://wa.me/62895604287079?text=Halo%20saya%20ingin%20pesan%20AVRILLA%20Fresh%20Gel';
  floatingWA.className = 'floating-wa';
  floatingWA.innerHTML = '💬 WA';
  floatingWA.target = '_blank';
  document.body.appendChild(floatingWA);
});

