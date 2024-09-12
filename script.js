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

// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}


AOS.init({
  duration: 1000,  // Animation duration
  once: true       // Whether animation should happen only once or every time you scroll
});

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.classList.add('modal-open'); // Add this to disable scroll
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.classList.remove('modal-open'); // Remove this to enable scroll again
}



document.querySelector('.scroll-down-chevron').addEventListener('click', function () {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
});


