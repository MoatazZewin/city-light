const inputs = document.querySelectorAll(".input-field input");
const button = document.querySelector(".otp-content button");

window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace" && prevInput) {
      currentInput.value = "";
      currentInput.setAttribute("disabled", true);
      prevInput.focus();
    }

    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }

    button.classList.remove("active");
  });
});
