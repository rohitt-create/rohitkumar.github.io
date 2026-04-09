// Smooth scrolling for navigation and buttons
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId !== '#' && targetId.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(targetId);
            target?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button?.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;
function showTestimonial(index) {
    testimonials.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === index);
    });
}
setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
}, 6000);

// Counter animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const targetValue = Number(counter.getAttribute('data-target')) || 0;
            let currentValue = 0;
            const duration = 1600;
            const increment = Math.max(1, Math.floor(targetValue / (duration / 16)));
            const update = () => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    counter.textContent = targetValue + (targetValue === 24 ? '+' : '+');
                } else {
                    counter.textContent = currentValue;
                    requestAnimationFrame(update);
                }
            };
            update();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });
counters.forEach(counter => counterObserver.observe(counter));

// Contact form submission
const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    alert('Thank you! Your inquiry has been sent. We will contact you soon.');
    form.reset();
});
