//

let cart = [];
let wishlist = [];

const productContainer = document.querySelector('.product-container');

let productItemTemplate = (product) => `<div class="product">
<div class="icons">
    <a href="#!" title="Add to wishlist"><i class="far fa-heart add-to-wishlist"></i></a>
    <a href="#!" title="Add to shopping cart"><i class="fas fa-dolly-flatbed add-to-cart"></i></a>
    <a href="#productView" title="Show deteil"><i class="fas fa-eye"></i></a>
</div>
<div class="image">
    <div class="badge bg-${product.badge.bg}">${product.badge.title}</div>
    <img src="${product.images}">                
</div>
<div class="container">   
    <h3>${product.name}</h3>
    <div><span class="price">${product.price}</span> UAH</div>
</div>
</div>`;

function populateProductList(product) {
    let content = '';
    for (const item of products) {
        content += productItemTemplate(item);
    }
    return content;
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
        if (productContainer) {
            productContainer.innerHTML = populateProductList(products);
        }
    })();
})
