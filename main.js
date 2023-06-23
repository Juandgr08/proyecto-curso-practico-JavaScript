const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }
}

function toggleShoppingCart() {
    shoppingCart.classList.toggle('inactive');

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
}