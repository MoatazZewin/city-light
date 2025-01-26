const btnGridFour = document.getElementById("btn-grid-4");
const btnGridThree = document.getElementById("btn-grid-3");

const productShowInMainCat = document.getElementById("product-cat");

btnGridFour.addEventListener("click", () => {
  productShowInMainCat.classList.add("products-4");
});
btnGridThree.addEventListener("click", () => {
  productShowInMainCat.classList.remove("products-4");
});

// category slider price

const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");

const rangeFill = document.getElementById("range-slider-id");

const rangeElements = document.querySelectorAll("input[type=range]");

function validateRange(e) {
  let minPrice = parseInt(rangeElements[0].value);
  let maxPrice = parseInt(rangeElements[1].value);

  minValue.textContent = `${minPrice} ر.س`;
  maxValue.textContent = `${maxPrice} ر.س`;

  //   calculate the percentage position  for min and mix values
  const minPercentage = ((minPrice - 10) / 490) * 100;
  const maxPercantage = ((maxPrice - 10) / 490) * 100;
  if (maxPrice - minPrice < 10) {
    if (e.target.className === "min-price") {
      rangeElements[0].value = maxPrice - 10;
      minValue.textContent = `${maxPrice - 10} ر.س`;
      rangeFill.style.width = "0";
    } else if (e.target.className === "max-price") {
      rangeElements[1].value = minPrice + 10;
      maxValue.textContent = `${minPrice + 10} ر.س`;
      rangeFill.style.width = "0";
    }
  } else {
    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercantage - minPercentage + "%";
  }

  //   set the position and width of the fill color element to represent the selected range
}

rangeElements.forEach((ele) => {
  ele.addEventListener("input", validateRange);
});

validateRange();

// two button in popup
const btnDecrement = document.getElementById("popup-decrement");
const btnIncrement = document.getElementById("popup-increment");

const popupCount = document.getElementById("popup-count");

const popup = document.getElementById("popup-quick");

const allBtnsQuickLook = document.getElementsByClassName("quick-look");

const layerPopup = document.getElementById("layer-popup");

[...allBtnsQuickLook].forEach((ele) => {
  ele.addEventListener("click", () => {
    popup.classList.add("popup-container-show");
    layerPopup.classList.add("lay-show");
  });
});

layerPopup.addEventListener("click", () => {
  popup.classList.remove("popup-container-show");
  layerPopup.classList.remove("lay-show");
});

btnDecrement.addEventListener("click", () => {
  let count = parseInt(popupCount.textContent);
  if (count > 1) {
    count--;
    popupCount.textContent = count;
  }
});
btnIncrement.addEventListener("click", () => {
  let count = parseInt(popupCount.textContent);
  count++;
  popupCount.innerText = count;
});

// btn filter in small screens
const btnFilterShow = document.getElementById("btn-toggle-filter");
const filterMenu = document.getElementById("filter-menu");
const filterLayer = document.getElementById("layer-filter-product");
const closeBtn = document.getElementById("close-btn-filter");

btnFilterShow.addEventListener("click", () => {
  filterMenu.classList.add("popup-container-show");
  filterLayer.classList.add("lay-show");
});

filterLayer.addEventListener("click", () => {
  filterMenu.classList.remove("popup-container-show");
  filterLayer.classList.remove("lay-show");
});

closeBtn.addEventListener("click", () => {
  filterMenu.classList.remove("popup-container-show");
  filterLayer.classList.remove("lay-show");
});

var startPage = 1;
var endPage = 10;
var pagination = document.getElementsByClassName("pagination")[0];

function createPagination() {
  let str = startPage === 1 ? "class=prevent-e" : "class=btn-active";
  let html = `<button   id="prev" ${str} >${
    document.dir === "rtl"
      ? `<i class="fa-solid fa-chevron-right"></i></i>`
      : `<i class="fa-solid fa-chevron-left"></i></i>`
  }</button>`;

  for (let i = startPage; i <= endPage; i++) {
    if (+startPage === 1) {
      html += `<span ${i == startPage ? "class=active-page" : ""}>${i}</span>`;
    } else {
      if (+endPage - +i === 1 || +endPage - +i === 0) {
        console.log(+endPage - +i);
        if (+endPage - +i === 1) {
          html += `<span ${
            i == startPage ? "class=active-page" : ""
          } >${midPage}</span>`;
        } else {
          html += `<span ${
            i == startPage ? "class=active-page" : ""
          } >${totalPages}</span>`;
        }
      } else {
        html += `<span ${
          i == startPage ? "class=active-page" : ""
        } >${i}</span>`;
      }
    }
    realEndPage = endPage - 2;
  }
  html += `<button id="next"  class="btn-active" onclick="nextAndPrev(this)"  >${
    document.dir === "rtl"
      ? `<i class="fa-solid fa-chevron-left"></i>`
      : `<i class="fa-solid fa-chevron-right"></i>`
  }</button>`;
  pagination.innerHTML = html;
  activeSpan = document.querySelectorAll("span")[0];
  console.log(activeSpan);
  activeSpan.classList.add("active.page");
}

createPagination();
