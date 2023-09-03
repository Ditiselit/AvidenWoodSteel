let products = document.querySelectorAll('.product');

console.log(products[8]);

console.log(typeof(products));

console.log(typeof([]));

let arr = [1,2,3,4,5,6,7,8]

function fnDec() {
    return "Declaration fn";
}

let fnExp = function() {
    return 'Function expression';
}

console.log(fnExp())

function addTest() {
    totalNumberItemsInWishlist.innerText =
    ++totalNumberItemsInWishlist.innerText
}

const totalNumberItemsInWishlist = document.getElementById('total-number-items-in-wishlist')
let addToWishlist = document.querySelector('.add-to-wishlist')

addToWishlist.addEventListener('click', function() {
    totalNumberItemsInWishlist.innerText =
    ++totalNumberItemsInWishlist.innerText
})

products.forEach(function(product) {
    console.log(product.querySelector('h3').innerText)
    console.log(product.querySelector('.price').innerText)
let products = document.querySelectorAll('.product');

console.log(products[8]);

console.log(typeof(products));

console.log(typeof([]));

let arr = [1,2,3,4,5,6,7,8]

function fnDec() {
    return "Declaration fn";
}

let fnExp = function() {
    return 'Function expression';
}

console.log(fnExp());

function addTest() {
    totalNumberItemsInWishlist.innerText =
    ++totalNumberItemsInWishlist.innerText
}

const totalNumberItemsInWishlist = document.getElementById('total-number-items-in-wishlist')
let addToWishlist = document.querySelector('.add-to-wishlist');

addToWishlist.addEventListener('click', function() {
    totalNumberItemsInWishlist.innerText =
    ++totalNumberItemsInWishlist.innerText
});

products.forEach(function(product) {
    console.log(product.querySelector('h3').innerText)
    console.log(product.querySelector('.price').innerText)
});