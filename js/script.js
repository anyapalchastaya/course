const catAfter = document.querySelector('.solution__image-after');
const range = document.querySelector('input');
const burger = document.querySelector('.header__burger');
const header_menu = document.querySelector('.header__menu');

range.addEventListener('input', ()=> {
    catAfter.style.width = range.value + '%';
});

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    header_menu.classList.toggle('active');
})