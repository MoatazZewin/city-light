const btnsAddToCart = [
  ...document.querySelectorAll(".fav-products .products .box button"),
];

const addToCartLayer = document.getElementById("layer-popup-add-cart");
const addToCartPopup = document.getElementsByClassName("popup-add-cart")[0];

btnsAddToCart.map((btn) => {
  btn.addEventListener("click", () => {
    addToCartLayer.classList.add("show");
    addToCartPopup.classList.add("show");
  });
});

addToCartLayer.addEventListener("click", () => {
  addToCartLayer.classList.remove("show");
  addToCartPopup.classList.remove("show");
});
