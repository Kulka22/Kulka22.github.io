const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');
const dropdown = document.querySelector('.dropdown > a');
const dropdownContent = document.querySelector('.dropdown-content');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        this.classList.toggle('rotated');
    });
}

// Чтобы выпадающее меню работало на мобильных устройствах
if (dropdown && dropdownContent) {
    dropdown.addEventListener('click', function (e) {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            dropdownContent.classList.toggle('show');
        }
    });
}

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navMenu.classList.remove('show');
        burgerBtn.classList.remove('rotated');
        if (dropdownContent) {
            dropdownContent.classList.remove('show');
        }
    });
});

// Закрытие меню при клике вне области
document.addEventListener('click', function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnBurger = burgerBtn.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        burgerBtn.classList.remove('rotated');
        if (dropdownContent) {
            dropdownContent.classList.remove('show');
        }
    }
});

// Закрытие меню при ресайзе окна
window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
        navMenu.classList.remove('show');
        burgerBtn.classList.remove('rotated');
        if (dropdownContent) {
            dropdownContent.classList.remove('show');
        }
    }
});