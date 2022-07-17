//Hamburguer menu functionality
const hamburgerMenu = document.querySelector('#hamburger-menu');
const linkNavigation = document.querySelector('.main-nav__list');
hamburgerMenu.addEventListener('click', () => {
    linkNavigation.classList.toggle('hide')
})

//Search input functionality
const searchInputContainer = document.querySelector('.main-header__search-form-container');
const searchInput = document.querySelector('.main-header__search-input')
const searchIcon = document.querySelector('.fa-magnifying-glass');

document.addEventListener('click', e => {
    if (!searchInputContainer.classList.contains('hide')) {
        if (e.target != searchInput) {
            searchInputContainer.classList.add('hide')
        }
    }
    if (e.target == searchIcon) {
        if (searchInputContainer.classList.contains('hide')) {
            if (!linkNavigation.classList.contains('hide')) {
                searchInputContainer.classList.remove('hide')
                linkNavigation.classList.add('hide')
            } else {
                searchInputContainer.classList.remove('hide')
            }
        } else {
            searchInputContainer.classList.add('hide')
        }
    }

})