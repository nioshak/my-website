// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Mobile Menu Toggle
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
