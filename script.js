let menuicon = document.querySelector('.bx-menu');
let closeicon = document.querySelector('.bx-x');
let headerwrap = document.querySelector('.header-wrapper');

menuicon.addEventListener('click',  onmyFunction);

function onmyFunction() {
    headerwrap.style.display = "block";
    headerwrap.classList.add('active');
    menuicon.style.display = "none";
    closeicon.style.display = "block";
}
closeicon.addEventListener('click',  offmyFunction);

function offmyFunction() {
    headerwrap.style.display = "none";
    headerwrap.classList.remove('active');
    menuicon.style.display = "block";
    closeicon.style.display = "none";
}

//cart
let cartbtn = document.querySelector(".bx-cart");
let cartview = document.querySelector(".crt");

cartbtn.addEventListener("onclick", () =>{
    cartview.style.display = "block";
    
})

const cart = document.getElementById('cart'),
      cartShop = document.getElementById('bx-cart'),
      cartClose = document.getElementById('cart-close');

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}


//latest products
const productmainbox = document.getElementById("item");
const productbox = document.querySelector('.products');

for (let i = products.length - 1; i >= 8; i--) {
    console.log("hhh")
const newbox = productbox.cloneNode(true);
newbox.querySelector('.item_title').textContent = products[i].name;
newbox.querySelector('.item_price').textContent = products[i].price;
newbox.querySelector('.item_img').src = products[i].img;
newbox.querySelector("#bxval").value = i;
productmainbox.appendChild(newbox);
}
productbox.remove();



let cartcontainer = document.querySelector(".cart__container");
let cartbox = document.querySelector(".cart__card");
let i=products.length-1;
function btnclk(){
    cart.classList.add('show-cart')

    console.log(i)
    const cartsbox = cartbox.cloneNode(true);
    cartsbox.querySelector('.cart__title').textContent = products[i].name;
    cartsbox.querySelector('.cart__price').textContent = products[i].price;
    cartsbox.querySelector('.cart__img').src = products[i].img;

    cartcontainer.appendChild(cartsbox);

    // cartimg.src = products[i].img;
    // carttitle.textContent = products[i].name;
    // cartprice = products[i].price;
    i--;
    
}
cartbox.remove();

let trashbtn = document.getElementById("trashbtn");
trashbtn.addEventListener("click", trash)

function trash() {
    console.log("ddd");
    cartsbox.remove();
}