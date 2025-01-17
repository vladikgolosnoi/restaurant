const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

const cartToggleFunc = function () {
  shoppingCart.classList.toggle('active');
}

const scrollToSection = function (sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

navToggleBtn.addEventListener('click', function () {
  if (shoppingCart.classList.contains('active')) cartToggleFunc();
  navToggleFunc();
});

cartToggleBtn.addEventListener('click', function () {
  if (nav.classList.contains('active')) navToggleFunc();
  cartToggleFunc();
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc);
}

const menuButton = document.querySelector('.btn-primary.btn-icon');
if (menuButton) {
  menuButton.addEventListener('click', () => scrollToSection('menu'));
}

const aboutButton = document.querySelector('.btn-secondary.btn-icon');
if (aboutButton) {
  aboutButton.addEventListener('click', () => scrollToSection('about'));
}