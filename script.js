const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const aboutToggle = document.querySelector('.about-toggle');
const aboutMore = document.getElementById('about-more');

if (aboutToggle && aboutMore) {
  aboutToggle.addEventListener('click', () => {
    const isOpen = aboutToggle.getAttribute('aria-expanded') === 'true';
    aboutToggle.setAttribute('aria-expanded', String(!isOpen));
    aboutToggle.textContent = isOpen ? 'Read More' : 'Show Less';
    aboutMore.hidden = isOpen;
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message has been received. We will contact you soon.');
    contactForm.reset();
  });
}

