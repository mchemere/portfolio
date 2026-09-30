/**
 * Navigation Router for Single Page Application
 * Handles tab switching without full page reload
 */
function navigateTo(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(`page-${pageId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update nav links active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to top of viewport
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Handle Contact Form Submission
 */
function handleContact(event) {
    event.preventDefault();
    const statusText = document.getElementById('form-status');
    
    // Simulate async submission
    statusText.style.color = '#00f0ff';
    statusText.textContent = 'Sending message...';

    setTimeout(() => {
        statusText.style.color = '#10b981';
        statusText.textContent = 'Thank you! Your message has been sent successfully.';
        
        // Reset form input fields
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
    }, 1200);
}

// Handle browser back/forward buttons via hash navigation
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'projects', 'articles', 'about', 'contact'].includes(hash)) {
        navigateTo(hash);
    }
});

// Initial load check
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'projects', 'articles', 'about', 'contact'].includes(hash)) {
        navigateTo(hash);
    }
});
