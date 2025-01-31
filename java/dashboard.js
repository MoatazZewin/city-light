const dashBoardBtns = [...document.querySelectorAll(".dash-cont ul li")];
const dashBoardContant = [...document.getElementsByTagName("main")];
const dashBoardBtnInRight = [
  ...document.querySelectorAll(".dash-cont .user-dash-detials .box "),
];

console.log(dashBoardBtnInRight);

dashBoardBtns.map((ele, index) => {
  ele.addEventListener("click", () => {
    dashBoardBtns.map((ele) => {
      ele.classList.remove("active");
    });
    dashBoardContant.map((cont) => {
      cont.classList.remove("active");
    });
    ele.classList.add("active");
    dashBoardContant[index].classList.add("active");
  });
});

dashBoardBtnInRight.map((ele, index) => {
  ele.addEventListener("click", () => {
    dashBoardBtns.map((ele) => {
      ele.classList.remove("active");
    });
    dashBoardContant.map((cont) => {
      cont.classList.remove("active");
    });
    dashBoardBtns[index + 1].classList.add("active");
    dashBoardContant[index + 1]?.classList.add("active");
  });
});

let rewardBtns = [...document.querySelectorAll(".btns-rewards button")];

let rewardText = document.getElementsByClassName("rewards-text")[0];
let couponText = document.getElementsByClassName("coupon-text")[0];
let useCouponText = document.getElementsByClassName("use-coupon-text")[0];

let allText = [rewardText, couponText, useCouponText];
rewardBtns.map((btn, index) => {
  btn.addEventListener("click", (text) => {
    rewardBtns.map((b) => {
      b.classList.remove("active");
    });
    allText.map((t) => {
      t.classList.remove("active");
    });
    rewardBtns[index].classList.add("active");
    allText[index].classList.add("active");
  });
});

// rewardBtns[0].addEventListener("")
