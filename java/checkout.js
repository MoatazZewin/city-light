const showLoginList = document.getElementById("check-login-list");
const loginForm = document.getElementsByClassName("check-login-form")[0];
showLoginList.addEventListener("click", (e) => {
  loginForm.classList.toggle("show");
  e.preventDefault();
});

const btnCoupon = document.getElementById("check-coupon-btn");
const couponList = document.getElementsByClassName("check-coupon-list")[0];

btnCoupon.addEventListener("click", (e) => {
  couponList.classList.toggle("show");
  e.preventDefault();
});
