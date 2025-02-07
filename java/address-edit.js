const addBtnAddress = document.getElementById("add-address");
const popupAddressEdit = document.querySelector(".popup-address-add");
const popupLayer = document.getElementById("layer-popup-address");

addBtnAddress.addEventListener("click", () => {
  popupAddressEdit.classList.toggle("show");
  popupLayer.classList.add("show");
});

popupLayer.addEventListener("click", () => {
  popupAddressEdit.classList.toggle("show");
  popupLayer.classList.remove("show");
});
