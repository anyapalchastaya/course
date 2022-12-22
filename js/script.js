let catAfter = document.querySelector('.solution__image-after-img');
let range = document.querySelector('input');
const burger = document.querySelector('.header__burger');
const header_menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

catAfter.style.width = "50%";
range.addEventListener('input', () => {
    catAfter.style.width = range.value + "%";
})

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('lock');
})