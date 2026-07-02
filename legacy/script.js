// ── TAB SWITCHING ──
function switchTab(tabId) {
  // Deactivate all tabs and content
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  // Activate selected
  const targetContent = document.getElementById('tab-' + tabId);
  if (targetContent) targetContent.classList.add('active');

  // Match button
  document.querySelectorAll('.tab').forEach(btn => {
    if (btn.getAttribute('onclick') === `switchTab('${tabId}')`) {
      btn.classList.add('active');
    }
  });
}

// ── MOBILE MENU ──
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.nav__hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 60) {
    nav.style.borderBottomColor = 'rgba(207,157,52,0.35)';
  } else {
    nav.style.borderBottomColor = 'rgba(207,157,52,0.2)';
  }
});

// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('formSuccess');
  form.style.display = 'none';
  success.style.display = 'block';
}

// ── SCROLL REVEAL (lightweight) ──
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const elements = document.querySelectorAll(
    '.value-card, .doc-card, .treatment, .tech-card, .contact-item'
  );

  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
    observer.observe(el);
  });
});

