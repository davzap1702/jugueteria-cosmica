//get header
const headerUrl = 'templates/header.html';
fetch(headerUrl)
    .then(res => res.text())
    .then(data => loadHeader(data));

function loadHeader(data) {
    document.body.insertAdjacentHTML('afterbegin', data);
    enableHambugerMenu();
    changeHeaderStructure();
    enableSearcInput();
    setActiveLink();
}

//get footer
const footerUrl = 'templates/footer.html';
fetch(footerUrl)
    .then(res => res.text())
    .then(data => loadFooter(data));
function loadFooter(data) {
    document.body.insertAdjacentHTML('beforeend', data);
}

//Hamburguer menu functionality
function enableHambugerMenu() {
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const linkNavigation = document.querySelector('.main-nav__list');
    hamburgerMenu.addEventListener('click', () => {
        linkNavigation.classList.toggle('hide');
    });
}

//Search input functionality
function enableSearcInput() {
    const linkNavigation = document.querySelector('.main-nav__list');
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
}

/* Organize the original header structure */

//get all items

function changeHeaderStructure() {
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
    document.querySelector('header').insertAdjacentElement('afterbegin', navContainer);

    actionsContainer.appendChild(searchForm);
    actionsContainer.appendChild(searchicon);
    actionsContainer.appendChild(cart);
    actionsContainer.appendChild(hamIcon);
    document.querySelector('header').appendChild(actionsContainer);

    navContainer.classList.add('main-header__nav-container');
    actionsContainer.classList.add('main-header__actions-container');
}

//set active link

function setActiveLink() {
    let url = location.href.split('/');
    let path;
    const headerLinks = document.querySelectorAll('a.main-nav__link');
    url.forEach( x =>{
        if(x.includes('.')){
            path = x;
        }
    });
    headerLinks.forEach(link => {
        if(link.getAttribute('href') === path){
            link.classList.add('active');
        }
    });
}

//scroll to the categories section
const categories = document.querySelector('#category-cards');

if (categories) {
    function scrollIntoCategory() {
        categories.scrollIntoView({
            behavior: "smooth"
        }, true);
    }
}




