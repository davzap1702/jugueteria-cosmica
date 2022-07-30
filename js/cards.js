const container = document.querySelector('.section-cards');
const slider = document.querySelector('.cards-slider');
const slides = document.querySelectorAll('.card').length;
const btn = document.querySelectorAll('.card__carousel-arrow');

let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth;
let prevKeyActive = false;
let nextKeyActive = true;

window.addEventListener('DOMContentLoaded', checkWidth);

window.addEventListener("resize", checkWidth);
function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 999) {
            slidesPerPage = 2;
        } else {
            if (w < 1301) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        btn[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        btn[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        btn[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        btn[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        btn[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        btn[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        btn[0].classList.remove('inactive');
    }
};

btn.forEach( btn =>{
    btn.addEventListener('click', e =>{
        if(e.target.classList.contains('fa-angle-right')){
            slideLeft();
        }else{
            slideRight();
        }
    });
});









