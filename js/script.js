
//Call Header

const heatherPath = 'templates/header.html';
fetch(heatherPath)
    .then(res => res.text())
    .then(data => fetchHeader(data));

function fetchHeader(data) {
    document.body.insertAdjacentHTML('afterbegin', data);
    enableHambugerMenu();
    changeHeaderStructure();
    enableSearcInput();
    setActiveLink();
    logoFunctionality();
    deleteCartItems();
    showCart();
    checkCartItems();
    closeCartWindow();
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
            searchInput.focus();
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
    const title = document.querySelector('head > title');
    const headerLinks = document.querySelectorAll('a.main-nav__link');
    let titleRef = title.textContent.split(' | ')[1];
    headerLinks.forEach(x => {
        if (x.textContent.includes(titleRef)) {
            x.classList.add('active');
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
const icons = document.querySelectorAll('i');
icons.forEach(icon => {
    icon.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.target.click();
        }
    });
});

//The logo should take to the home page
function logoFunctionality() {
    const logo = document.querySelector('.main-header__logo-container > img');
    logo.addEventListener('click', () => {
        location.href = 'index.html';
    });
}


// Cart functionality
const cards = document.querySelector('.cards-slider');
let emptyCart;
let cartBody;
let cartItems = [];
let cartBtn;
let cart;
let cartBadge;


function deleteCartItems() {
    cartBadge = document.querySelector('#badge');
    cartBody = document.querySelector('tbody');
    emptyCart = document.querySelector('.btn-cart');
    emptyCart.addEventListener('click', () => {
        cartBody.innerHTML = "";
        cartItems = [];
        checkCartItems();
    });

}

if (cards) {

    cards.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('card__link')) {
            const item = e.target.parentElement.children[1];
            getItem(item);
        }
        showNotification();
    });
}
function showNotification() {
    const snackBar = document.createElement('div');
    snackBar.innerHTML = 'Añadido al carrito';
    snackBar.id = 'snackbar';
    document.body.appendChild(snackBar);
    snackBar.className = 'showSnackbar';
    setTimeout(() => {
        snackBar.classList.remove('showSnackbar');
    }, 2200);
    console.log(snackBar);
}


function getItem(item) {
    const cart = {
        img: item.querySelector('img').src,
        name: item.querySelector('h2').textContent,
        price: item.querySelector('h3').textContent,
        amount: 1
    };
    addItems(cart);
    checkCartItems();
}

function addItems(cart) {
    cartItems = [...cartItems, cart];
    console.log(cartItems);
    addItemsToView();
}

function addItemsToView() {
    checkCartItems();
    resetCart();
    cartItems.forEach(item => {
        const _item = document.createElement('tr');
        _item.innerHTML =
            `
        <th><img src="${item.img}"></th>
        <th> ${item.name} </th>
        <th> ${item.price} </th>
        <th> ${item.amount} </th>
        `;
        cartBody.appendChild(_item);
    });
}

function resetCart() {
    cartBody.innerHTML = '';
}

function showCart() {
    cartBtn = document.querySelector('.fa-cart-shopping');
    cartBtn.addEventListener('click', displayCart);
    cart = document.querySelector('article.main-header__cart-view');
}
function displayCart() {
    cart.classList.toggle('show');
}

function checkCartItems() {
    if (cartBody.children.length) {
        cartBadge.classList.add('show');
        cartBadge.textContent = cartBody.children.length;
    } else {
        cartBadge.classList.remove('show');
        cartBadge.textContent = "";
    }
}

function closeCartWindow() {
    let closeBtn = document.querySelector('i.fa-square-xmark');
    window.addEventListener('keydown', e => {
        if (e.key = 'Escape' && cart.classList.contains('show')) {
            cart.classList.remove('show');
        }
    });
    window.addEventListener('click', e => {
        e.target === closeBtn ? cart.classList.remove('show') : null;
    });
}