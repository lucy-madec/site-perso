document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('#sidebar a');

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
});
