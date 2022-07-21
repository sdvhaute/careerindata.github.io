const slider = document.querySelector('.slider');
const outer = document.querySelector('.outer-box');
const inner = document.querySelector('.inner-circle');

const body = document.querySelector('body');
const nav = document.querySelector('nav');

slider.addEventListener('click', function () {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        inner.style.left = '37px';
        nav.style.color = 'var(--bgcolor1)';
        nav.style.backgroundColor = 'var(--colortext)';
    } else {
        inner.style.left = '15px';
        nav.style.color = 'var(--colortext)';
        nav.style.backgroundColor = 'var(--bgcolor1)';
        
    }

})



const cardrows = document.querySelectorAll('.review-row');
const cardcols = document.querySelectorAll('.review-col');
const col1 = document.querySelectorAll('.col-1');
const col2 = document.querySelectorAll('.col-2');
const col3 = document.querySelectorAll('.col-3');
const col4 = document.querySelectorAll('.col-4');
const plusIcons = document.querySelectorAll('.plus-icon');

plusIcons.forEach((plus, i) => {
    plus.addEventListener('click', function () {
        plus.parentNode.children[0].classList.toggle('active');
        plus.parentNode.children[1].classList.toggle('active');
        plus.parentNode.children[2].classList.toggle('active');
        plus.parentNode.children[3].classList.toggle('active');
        plus.parentNode.children[3].classList.toggle('turn-back');
        plus.classList.toggle('rotate');
        plus.parentNode.classList.toggle('turn');
        plus.parentNode.classList.toggle('dark');

    })
})

const toTop = () => window.scrollTo({top:0, behavior: 'smooth'});