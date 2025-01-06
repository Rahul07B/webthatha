// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('section#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formEntries = Object.fromEntries(formData.entries());

        alert(`Thank you, ${formEntries.name}! We have received your message: "${formEntries.message}". We will get back to you at ${formEntries.email}.`);
        contactForm.reset();
    });
}

// Interactive gallery (optional, advanced feature)
const galleryImages = document.querySelectorAll('section#gallery img');
if (galleryImages) {
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            window.open(img.src, '_blank');
        });
    });
}
