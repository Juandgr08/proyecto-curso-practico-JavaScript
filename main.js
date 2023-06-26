// Menu
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Pages
const shoppingCart = document.querySelector('#shopping-cart');
const productDetail = document.querySelector('#product-detail');

// Containers
const shoppingCartContainer = document.querySelector('.shopping-cart-container');
const productContainer = document.querySelector('.cards-container');
const containerItemsInCart = document.querySelector('#items-in-cart');
const containerProductDetailInfo = document.querySelector('.product-info');
const containerTotalAmount = document.querySelector('#total-amount');

// Buttons
const navEmail = document.querySelector('.navbar-email');
const mobileMenuIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartCloseIcon = document.querySelector('#shopping-cart-close');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// Other
const productDetailImage = document.querySelector('#img-product-detail');
const darkenPage = document.querySelector('.darken');

// Arrays
let nameProduct = [];
let priceProduct = [];
let imgProduct = [];
let descriptionProduct = [];
let productList = [];

// variables
let numberItemsInCart = 0;
let totalAmount = 0.00

class Product {
    constructor(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description
    }
}

// Products
let bicicleta = new Product('Bike', 350, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'With this bicycle you will be able to transport yourself around the city in a faster way, or just go out on a Sunday to ride.');

let casco = new Product('Bicycle helmet', 100, 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto', 'Protect yourself with the best quality helmet, high resistance so that you travel safer on your bike');

let tennis = new Product('Tennis Montain Bike', 180, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg', 'Tennis shoes in excellent condition so you can wear them with your favorite outfits');

let televisor = new Product('TV', 510, 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/12/samsung-qled-q90r-analisis-opinion_52.jpg?tf=1200x', 'An incredible TV to see your favorites series and movies');

productList.push(bicicleta, casco, tennis, televisor);

function initPage() {
    for (product of productList) {
        productContainer.innerHTML += 
        `<div class="product-card">
            <img id="img-product" src=${product.image} alt="${product.name}">
            <div class="product-info">
                <div>
                    <p>$${product.price}.00</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                <img id="add-to-cart" src="./icons/bt_add_to_cart.svg" alt="add to cart">
                </figure>
            </div>
        </div>`

        nameProduct.push(product.name);
        priceProduct.push(product.price);
        imgProduct.push(product.image);.00
        descriptionProduct.push(product.description);

    }

    const productItem = document.querySelectorAll('#img-product');
    const addToCartIcon = document.querySelectorAll('#add-to-cart');

    navEmail.addEventListener('click', toggleDesktopMenu);
    mobileMenuIcon.addEventListener('click', toggleMobileMenu);
    shoppingCartIcon.addEventListener('click', toggleShoppingCart);

    for (let i = 0; i < productItem.length; i++) {
        addToCartIcon[i].addEventListener('click', function(){            
            addToCartIcon[i].setAttribute('src', './icons/bt_added_to_cart.svg');
            addToCart(nameProduct[i], priceProduct[i], imgProduct[i]);
        });
        productItem[i].addEventListener('click', function(){
            openProductDetail(nameProduct[i], priceProduct[i], imgProduct[i], descriptionProduct[i]);
        });
    }
}

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    darkenPage.classList.add('inactive');

    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    darkenPage.classList.add('inactive');

    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
}

function toggleShoppingCart() {
    shoppingCart.classList.toggle('inactive');
    darkenPage.classList.add('inactive');

    shoppingCartCloseIcon.addEventListener('click', function() {
        shoppingCart.classList.add('inactive');
    });

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
}

function openProductDetail(name, price, image, description) {
    productDetail.classList.remove('inactive');
    darkenPage.classList.remove('inactive');
    productDetailImage.setAttribute('src', image);

    containerProductDetailInfo.innerHTML = 
    `<p>$${price}.00</p>
    <p>${name}</p>
    <p>${description}</p>
    <button class="primary-button add-to-cart-button">
      <img src="./icons/bt_add_to_cart.png" alt="add to cart">
      Add to cart
    </button>`

    const addToCartProductDetail = document.querySelector('.add-to-cart-button');
    addToCartProductDetail.addEventListener('click', function() {
        addToCart(name, price, image);
    })

    productDetailCloseIcon.addEventListener('click', function() {
        productDetail.classList.add('inactive');
        darkenPage.classList.add('inactive');
    });

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive');
    }
}

function addToCart(name, price, image) {
    shoppingCartContainer.innerHTML +=
    `<div class="shopping-cart">
        <figure>
            <img src=${image} alt=${name}>
        </figure>
        <p class="name">${name}</p>
        <p class="price">$${price}.00</p>
        <img class="delete-cart-item" src="./icons/icon_close.png" alt="close">
    </div>`

    if (shoppingCart.classList.contains('inactive')) {
        toggleShoppingCart();
    }

    numberItemsInCart++;
    containerItemsInCart.innerHTML = numberItemsInCart;

    totalAmount = totalAmount + price;
    containerTotalAmount.innerHTML = '$' + totalAmount + '.00';
}

window.addEventListener('load', initPage);

