const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handlerInputBlur);

function handlerInputBlur(event) {
  inputEl.classList.remove("valid", "invalid");

  event.currentTarget.value.length ===
  Number(inputEl.getAttribute("data-length"))
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
