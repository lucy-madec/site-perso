document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.getElementById('sidebar');

    navToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-arrow-right');
        navToggle.querySelector('i').classList.toggle('fa-arrow-left');
    });

    // ... le reste du code JavaScript ...
});
