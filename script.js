// Page Router Function
function navigateTo(pageId) {
    // 1. Hide all page sections
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // 2. Show target page section
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 3. Update navbar links active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. Scroll smooth to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact form handler
function handleContact(event) {
    event.preventDefault();
    const status = document.getElementById("form-status");
    status.textContent = "Thank you! Your message has been sent.";
    event.target.reset();
}

// Handle initial URL Hash navigation (e.g., portfolio.com/#projects)
document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'projects', 'about', 'contact'].includes(hash)) {
        navigateTo(hash);
    } else {
        navigateTo('home');
    }
});