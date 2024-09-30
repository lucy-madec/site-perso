document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('#sidebar a');
    const sections = document.querySelectorAll('main section');

    navToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-arrow-right');
        navToggle.querySelector('i').classList.toggle('fa-arrow-left');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                navToggle.querySelector('i').classList.add('fa-arrow-right');
                navToggle.querySelector('i').classList.remove('fa-arrow-left');
            }
        });
    });

    // Fonction pour vérifier quelle section est visible
    function setActiveLink() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Appeler la fonction au chargement de la page et lors du défilement
    window.addEventListener('load', setActiveLink);
    window.addEventListener('scroll', setActiveLink);
});
