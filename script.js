// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert when a project link is clicked
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert('You are about to view: ' + this.textContent);
        window.location.href = this.getAttribute('href');
    });
});