"use strict"

class Store {
    static init(key) {
        if (!Store.isset(key)) {
            Store.set(key, []);
        }
        return Store.get(key);
    }
    static get(key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }
    static set(key, value) {
        localStorage.setItem(key. JSON.stringify(value));
    }
    static isset(key) {
        return this.get(key) !== null;
    }
}

let cart = [];
let wishlist = [];
const modalWindow = document.querySelector('modal-window');

function saveWishlist(wishlist) {
    Store.set('wishlist', wishlist);
}

function saveCart(cart) {
    Store.set('basket', cart);
}

const productContainer = document.querySelector('.product-container');
let productItemTemplate = (product) => `
<div class="product data-id="${product.id}">
    <div class="icons" data-id="${product.id}>
        <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
        <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
        <a href="#productView" title="Show deteil"><i class="fas fa-eye detail"></i></a>
    </div>
    <div class="image">
        <div class="badge bg-${product.badge.bg}">${product.badge.title}</div>
        <img src="${product.image}">                
    </div>
    <div class="container">   
        <h3>${product.name}</h3>
        <div><span class="price">${product.price}</span> UAH</div>
    </div>
</div>`;

function populateProductList(products) {
    let content = "";
    for (const item of products) {
        content += productItemTemplate(item);  
    }
    return content;
}
    
let modalTemplate = product => `<div class="modal" id="productView">
<div class="modal-dialog">
    <div class="modal-content">
        <a class="close btn-close" href="#!"><i class="fas fa-times"></i></a>
        <div class="modal-body">
            <div class="row">
                <div class="col-lg-6">
                    <div class="bg-center bg-cover d-block h-100" style="background: url(${product.image});"></div>
                </div>
                <div class="col-lg-6">
                    <div class="py-5">
                        <h2>${product.name}</h2>
                        <p>${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`; 

function addProductToWishlist(item = {}) {
    wishlist = [...wishlist, item];
    //console.log(wishlist);
    saveWishlist(wishlist);
}

function addProductToWishlistButton() {
    let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
    addToWishlistButtons.forEach((item) => {
        item.addEventListener('click', (event) => {
            //totalNumber(1);
            let productId = event.target.closest('.icons').dataset.id;
            //console.log('Pagent value = ', event.target.closest('.icons').dataset.id)
            addProductToWishlist({id: productId, name: products[+productId-1].name, price: products[+productId-1].price})
        })           
    })
}

function addProductToCar(product, amount=1) {

    let inCart = cart.some(element => element.id === product.id);
    if (inCart) {
        cart.forEach(item => {
            if(item.id === product.id) {
                item.amount += amount;
            }
        })
    } else {
        let cartItem = {...product, amount:amount};
        cart = [...cart, cartItem];
    }
    
    saveCart(cart);
}

function addProductToWishlist(item = {}) {
    wishlist = [...wishlist, item];
    //console.log(wishlist);
    saveWishlist(wishlist);
}

function toggleModal(cart, param, product = {}) {
    if (modalWindow.innerHTML == ''){
        modalWindow.innerHTML = modalTemplate(product);
    }else {
        modalWindow.innerHTML = '';
    }
    modalWindow.style.display = param;
}

function detailButton() {
    let detailButtons = document.querySelectorAll('.detail');
    detailButtons.forEach((item) => {
        item.addEventListener('click', (event) => {
            let productId = event.target.closest('.icons').dataset.id;
            let product = products.find(item => item.id === +productId);
            toggleModal(cart, 'block', product);
        })           
    })
}


function addProductToCartButton() {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((item) => {
        item.addEventListener('click', (event) => {
            let productId = event.target.closest('.icons').dataset.id;
            //console.log('Pagent value = ', event.target.closest('.icons').dataset.id)
            addProductToCart({id: productId, name: products[+productId-1].name, price: products[+productId-1].price})
        })           
    })
}

let products = document.querySelectorAll('.product');
console.log(products);

//

let i = 0;
while (i < products.length) {
    console.log(products[i]);
    i++;
}

//Function

function fnDec() {
    return "Declaration fn";
}
console.log(fnDec())

 let fnExp = function() {
    return 'Function expression';
 }
 console.log(fnExp())

function addTest() {
    totalNumberItemsInWishlist.innerText = ++totalNumberItemsInWishlist.innerText    
}
const totalNumberItemsInWishlist = document.getElementById('total-number-items-in-wishlist')
let addToWishlist = document.querySelector('.add-to-wishlist')
addToWishlist.addEventListener('click', function() {
    totalNumberItemsInWishlist.innerText = ++totalNumberItemsInWishlist.innerText
});

//Table додавання до з цінами та назвами

let shopingCartItems = [];
let wishlistItems = [];

products.forEach(function(product) {
   product.querySelector('.add-to-cart').addEventListener('click', function() {
        console.log(product.querySelector('h3').innerText)
        console.log(product.querySelector('.price').innerText)

        let shopingCartItem = {
            name: '',
            price: 0
        }       
        shopingCartItem.name = product.querySelector('h3').innerText
        shopingCartItem.price = +product.querySelector('.price').innerText
        shopingCartItems.push(shopingCartItem)
        console.log(shopingCartItems)
    })

    product.querySelector('.add-to-wishlist').addEventListener('click', function() {
        console.log(product.querySelector('h3').innerText)
        console.log(product.querySelector('.price').innerText)
    
        let wishlistItem = {
            name: '',
            price: 0
        }       
        wishlistItems.name = product.querySelector('h3').innerText
        wishlistItems.price = +product.querySelector('.price').innerText
        wishlistItems.push(wishlistItem)
        console.log(wishlistItems)        
    })
})
//додавання до вішліста
function counter() {
    let value = +totalNumberItemsInWishlist.innerText;
    return function(incrementer) {
        value += incrementer;
        totalNumberItemsInWishlist.innerText = value;
        console.log(value);
    }
}
let totalNumber = counter();
let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
addToWishlistButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        totalNumber(1);
    })
});

//function.main() {}

window.addEventListener("DOMContentLoaded", (event) => {
    (() => {
        cart = Store.init('basket');
        wishlist = Store.init('wishlist');
        if (productContainer) {
            productContainer.innerHTML = populateProductList(products);
            addProductToWishlistButton();
            addProductToCartButton();
            detailButton();
        }
    })();
})
