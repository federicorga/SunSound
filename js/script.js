document.addEventListener('DOMContentLoaded', function () {
    const navResponsive = document.getElementById('navResponsive');
    const navList = document.querySelector('#nav ul');

    navResponsive.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en cualquier elemento li
    navList.addEventListener('click', function () {
        navList.classList.remove('active');
    });

    // Cierra el menú al hacer clic fuera del botón de hamburguesa y de la lista de navegación
    document.addEventListener('click', function (event) {
        if (!navResponsive.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('active');
        }
    });
});
