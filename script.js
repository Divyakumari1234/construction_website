const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
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

const projectGalleries = [
  [
    'img/work/6.png',
    'img/work/3.png',
    'img/work/5.png',
    'img/work/12 (8).jpeg',
    'img/work/12 (12).jpeg',
  ],
  [
    'img/work/12 (7).jpeg',
    'img/work/12 (14).jpeg',
  ],
  [
    'img/work/12 (15).jpeg',
  ],
  [
    'img/work/7.jpeg',
    'img/work/12 (10).jpeg',
    'img/work/12 (11).jpeg',
  ],
  [
    'img/work/10.jpeg',
    'img/work/4.png',
    'img/work/1.png',
    'img/work/12 (1).jpeg',
    'img/work/12 (4).jpeg',
    'img/work/12 (5).jpeg',
    'img/work/12 (16).jpeg',
  ],
  [
    'img/work/11.jpeg',
  ],
];

const projectCards = document.querySelectorAll('.project-card');
const lightbox = document.querySelector('.project-lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCount = document.querySelector('.lightbox-count');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
let activeProjectIndex = 0;
let activeGallery = projectGalleries[0] || [];

const showProjectImage = (index) => {
  if (!lightboxImage || !lightboxCount || !activeGallery.length) return;
  activeProjectIndex = Math.max(0, Math.min(index, activeGallery.length - 1));
  lightboxImage.src = activeGallery[activeProjectIndex];
  lightboxImage.alt = `Construction project gallery image ${activeProjectIndex + 1}`;
  lightboxCount.textContent = `${activeProjectIndex + 1} / ${activeGallery.length}`;
  if (lightboxPrev) lightboxPrev.disabled = activeProjectIndex === 0;
  if (lightboxNext) lightboxNext.disabled = activeProjectIndex === activeGallery.length - 1;
};

const openProjectGallery = (galleryIndex) => {
  if (!lightbox) return;
  activeGallery = projectGalleries[galleryIndex] || [];
  showProjectImage(0);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
};

const closeProjectGallery = () => {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
};

projectCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    openProjectGallery(index);
  });
});

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', () => showProjectImage(activeProjectIndex - 1));
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', () => showProjectImage(activeProjectIndex + 1));
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeProjectGallery);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeProjectGallery();
  });
}

document.addEventListener('keydown', (event) => {
  if (!lightbox?.classList.contains('open')) return;
  if (event.key === 'Escape') closeProjectGallery();
  if (event.key === 'ArrowLeft') showProjectImage(activeProjectIndex - 1);
  if (event.key === 'ArrowRight') showProjectImage(activeProjectIndex + 1);
});


