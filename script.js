// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const navbar = document.getElementById('navbar');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button Visibility
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Back to Top Button Action
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you ${name} for your message! I will get back to you soon.`);
    
    // Reset the form
    contactForm.reset();
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');

const sectionOptions = {
    root: null, // viewport
    threshold: 0.15,
    rootMargin: "-100px 0px"
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, sectionOptions);

sections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
});

// Typed.js effect for hero subtitle (if you add the library)
// Uncomment this section if you add typed.js library
/*
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.hero-subtitle', {
            strings: [
                'Critical Care Nurse',
                'ICU Specialist',
                'Healthcare Professional',
                'Patient Advocate'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
});
*/

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Skill progress animation
// This function will be triggered when skills section is visible
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.querySelector('.skill-progress').style.width = percent + '%';
    });
}

// Initialize AOS Animation library if available
// Uncomment if you add AOS library
/*
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});
*/