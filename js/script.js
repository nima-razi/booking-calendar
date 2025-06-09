document.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        const navbar = document.getElementById('navbar-container');
        if (navbar) navbar.innerHTML = data;

        const currentPath = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPath = link.getAttribute('href');
            link.classList.toggle('active', linkPath === currentPath);
        });
    });

    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const footer = document.getElementById('footer-container');
        if (footer) footer.innerHTML = data;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });
});