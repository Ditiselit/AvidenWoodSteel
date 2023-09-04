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
const productsInCart = document.querySelector('.products-in-cart');

function saveWishlist(wishlist) {
    Store.set('wishlist', wishlist);
}

function saveCart(cart) {
    Store.set('basket', cart);
}

//Product window, modal and icons

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

//ToWishlist

function addProductToWishlist(item = {}) {
    let inWishlist = wishlist.some(e => e.id === item.id);
    if(!inWishlist) {
        wishlist = [...wishlist, item];
        saveWishlist(wishlist);
        wishlistItemAmount(wishlist);
    }     
}

function addProductToWishlistButton() {
    let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
    addToWishlistButtons.forEach((item) => {
        item.addEventListener('click', (event) => {
            let productId = event.target.closest('.icons').dataset.id;
            addProductToWishlist({id: productId, name: products[+productId-1].name, price: products[+productId-1].price})
        })           
    })
}

function addProductToWishlist(item = {}) {
    wishlist = [...wishlist, item];
    //console.log(wishlist);
    saveWishlist(wishlist);
    wishlistItemAmount(wishlist);
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

function wishlistItemAmount(wishlist) {
    totalNumberItemsInWishlist.textContent = wishlist.length;
}

function cartItemAmount(cart) {
    totalNumberItemsInCart.textContent = cart.reduce((prev, cur) => prev + cur.amount, 0);
}

const totalNumberItemsInWishlist = document.querySelector('#total-number-items-in-wishlist');
const totalNumberItemsInCart = document.querySelector('#total-number-items-in-cart');



//ToCar

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
    cartItemAmount(cart);
}

function addProductToCartButton() {

    let addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((item) => {
        item.addEventListener('click', (event) => {
            let productId = event.target.closest('.icons').dataset.id;
            addProductToCart({id: productId, price: products[+productId-1].price})
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

//Table plus name and price in JS Console

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

//Plus to wishlist

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

//Cart wrapper

const cartItemTemlate = (amount, product) => `<tr class="cart-item" id='id${product.id}'>
<td class="py-3" scope="row">
    <img src="${product.image}" alt="${product.name}" width="70">
</td>
<td class="py-3" scope="row">${product.name}</td>
<td class="py-3" scope="row">${product.price}</td>
<td class="py-3" scope="row">
    <div class="d-flex align-item-center justify-content-between quantity px-3" data-id="${product.id}>
        <i class="fas fa-caret-left dec-btn"></i>
        <input value="${amount}" class="input">
        <i class="fas fa-caret-right inc-btn"></i>
    </div>                                      
</td>
<td class="py-3" scope="row"><span class="product-subtotal"></span></td>
<td class="py-3" scope="row">
    <i class="fas fa-trash-alt" data-id="${product.id}"></i>
</td>
</tr>`;

const findItem = (items, id) => items.find(item => item.id == id);

const populateShoppingCart = (cart, products) => {
    result = '';
    cart.forEach(item => result += cartItemTemlate(item.amount, findItem(products, item.id)));
    return result;
}

//function click trash and <2> total 

const filterItem = (cart, id) => cart.filter(item => id != id);

function setCartTotal(cart) {
    let tmpTotal = 0;
    cart.map(item => {
        tmpTotal = item.price * item.amount;
        productsInCart.querySelector(`#id${item.id} .product-subtotal`).innerText = parseFloat(tmpTotal.toFixed(2));
    });

    let subTotal = parseFloat(cart.reduce((prev, cur) => prev + cur.price * cur.amount, 0).toFixed(2));

    let cartTax = subTotal * 0.07;
    document.querySelector('.cart-subtotal').textContent = subTotal;
    document.querySelector('.cart-tax').textContent = cartTax.toFixed(2);
    document.querySelector('.cart-total').textContent = subTotal + cartTax;

}

function renderCart() {
    productsInCart.addEventListener('click', event => {
        if(event.target.classList.container('fa-trash-alt')) {
            cart = filterItem(cart, event.target.dataset.id);
            saveCart(cart);
            cartItemAmount(cart);
            setCartTotal(cart);
            event.target.closest('.cart-item').remove();
        }
        else if (event.target.classList.contains('dec-btn')) {
            let tmp = findItem(cart, event.target.closest('.quantity').dataset.id);
            if (tmp !== undefined && tmp.amount > 1) {
                tmp.amount -= 1;

                event.target.nextElementSibling.value = tmp.amount;
            }
            else {
                cart = filterItem(cart, event.target.closest('.quantity').dataset.id);
                event.target.closest('.cart-item').remove();
            }
            saveCart(cart);
            cartItemAmount(cart);
            setCartTotal(cart);
        }

        else if (event.target.classList.contains('ink-btn')) {
            let tmp = findItem(cart, event.target.closest('.quantity').dataset.id);
            tmp.amount += 1;
            event.target.previousElementSibling.value = tmp.amount;
            saveCart(cart);
            cartItemAmount(cart);
            setCartTotal(cart);          
        }
    })
}

//function.main() {}

window.addEventListener("DOMContentLoaded", (event) => {
    (() => {
        cart = Store.init('basket');
        wishlist = Store.init('wishlist');

        wishlistItemAmount(wishlist);
        cartItemAmount(cart);

        if(productsInCart) {
            productsInCart.innerHTML = populateShoppingCart(cart, products);
            setCartTotal(cart);
            renderCart();
        }
        if (productContainer) {
            productContainer.innerHTML = populateProductList(products);
            addProductToWishlistButton();
            addProductToCartButton();
            detailButton();
        }
    })();
})
