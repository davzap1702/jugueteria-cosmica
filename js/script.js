//Hamburguer menu functionality
const hamburgerMenu = document.querySelector('#hamburger-menu');
const linkNavigation = document.querySelector('.main-nav__list');
hamburgerMenu.addEventListener('click', () => {
    linkNavigation.classList.toggle('hide');
});

//Search input functionality
const searchInputContainer = document.querySelector('.main-header__search-form-container');
const searchInput = document.querySelector('.main-header__search-input');
const searchIcon = document.querySelector('.fa-magnifying-glass');

document.addEventListener('click', e => {
    if (!searchInputContainer.classList.contains('hide')) {
        if (e.target != searchInput) {
            searchInputContainer.classList.add('hide');
        }
    }
    if (e.target == searchIcon) {
        if (searchInputContainer.classList.contains('hide')) {
            if (!linkNavigation.classList.contains('hide')) {
                searchInputContainer.classList.remove('hide');
                linkNavigation.classList.add('hide');
            } else {
                searchInputContainer.classList.remove('hide');
            }
        } else {
            searchInputContainer.classList.add('hide');
        }
    }
});


//Organize the original header structure

//get all items

const logo = document.querySelector('.main-header__logo-container');
const nav = document.querySelector('.main-header__main-nav-container');

const searchForm = document.querySelector('.main-header__search-form-container.hide');
const searchicon = document.querySelector('.main-header__search-form-icon');
const cart = document.querySelector('.main-header__cart-button-container');
const hamIcon = document.querySelector('.main-header__hamburger-button-container');

const navContainer = document.createElement('div');
const actionsContainer = document.createElement('div');

//insert items into each container
navContainer.appendChild(logo);
navContainer.appendChild(nav);
document.querySelector('header').insertAdjacentElement('afterbegin',navContainer);

actionsContainer.appendChild(searchForm);
actionsContainer.appendChild(searchicon);
actionsContainer.appendChild(cart);
actionsContainer.appendChild(hamIcon);
document.querySelector('header').appendChild(actionsContainer);

navContainer.classList.add('main-header__nav-container');
actionsContainer.classList.add('main-header__actions-container');

//scroll to IDs

function scroll(){
    const element = document.querySelector('#category-cards');
    const offset = 50;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
}
window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
});





