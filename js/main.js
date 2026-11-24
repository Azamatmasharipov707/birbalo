// Shrink navbar on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
}));

// Highlight the navigation link for the visible section
const navSectionLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main[id], section[id]');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) {
            currentSection = section.id;
        }
    });

    navSectionLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
});

// Rotate the reviews in the Home hero
const heroReviews = document.querySelectorAll('.hero-review');
let activeReview = 0;

if (heroReviews.length > 1) {
    setInterval(() => {
        const currentReview = heroReviews[activeReview];
        currentReview.classList.remove('active');
        currentReview.classList.add('leaving');

        activeReview = (activeReview + 1) % heroReviews.length;
        heroReviews[activeReview].classList.remove('leaving');
        heroReviews[activeReview].classList.add('active');

        setTimeout(() => currentReview.classList.remove('leaving'), 700);
    }, 4000);
}
