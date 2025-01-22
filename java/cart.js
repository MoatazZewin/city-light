const calShippingBtn = document.getElementById("btn-cal-shipping");
const calListForShipping = document.getElementById("cal-shipping-list");

calShippingBtn.addEventListener("click", () => {
  calListForShipping.classList.toggle("show");
});
