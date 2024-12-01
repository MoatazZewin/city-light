const mainMenu = document.getElementsByClassName("main-menu")[0];
const layer = document.getElementById("layer");
const btnToggle = document.getElementById("btn-toggle");
const closeUserMenuBtn = document.getElementById("close-btn");
const userOpenBtn = document.getElementById("user-open");
const userMenu = document.getElementById("user-account");

const btnCountryShow = document.getElementsByClassName("country")[0];
const countryMenu = document.getElementById("country-menu");

const topDiscountBar = document.getElementsByClassName("discount")[0];

const header = document.getElementsByTagName("header")[0];

const btnUserMenu = document.getElementById("btn-menu-user");

const cartButton = document.getElementById("cart");

const cartClose = document.getElementById("close-btn-cart");
const cartBack = document.getElementById("btn-cart-back");

const cartMenu = document.getElementById("user-cart");

cartClose.addEventListener("click", () => {
  cartMenu.classList.toggle("show");
  layer.classList.toggle("lay-show");
});
cartBack.addEventListener("click", () => {
  cartMenu.classList.toggle("show");
  layer.classList.toggle("lay-show");
});
cartButton.addEventListener("click", () => {
  cartMenu.classList.toggle("show");
  layer.classList.toggle("lay-show");
});

btnUserMenu.addEventListener("click", () => {
  userMenu.classList.toggle("show");
  mainMenu.classList.remove("show");
});

window.addEventListener("scroll", () => {
  if (+window.scrollY > 0) {
    topDiscountBar.classList.add("discount-hidden");
    header.classList.add("sticky");
  } else {
    topDiscountBar.classList.remove("discount-hidden");
  }
});
btnCountryShow.addEventListener("click", () => {
  countryMenu.classList.toggle("open");
  btnCountryShow.firstElementChild.firstElementChild.classList.toggle(
    "rotate-up"
  );
});

btnToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("show");
  layer.classList.toggle("lay-show");
});

layer.addEventListener("click", () => {
  layer.classList.toggle("lay-show");
  mainMenu.classList.remove("show");
  userMenu.classList.remove("show");
  cartMenu.classList.remove("show");
});

userOpenBtn.addEventListener("click", () => {
  console.log("hello");
  userMenu.classList.toggle("show");
  layer.classList.toggle("lay-show");
});

closeUserMenuBtn.addEventListener("click", () => {
  userMenu.classList.toggle("show");
  layer.classList.toggle("lay-show");
});
