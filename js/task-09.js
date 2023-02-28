function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', handlerBtnClick);

function handlerBtnClick(event) {

bodyEl.style.backgroundColor = getRandomHexColor();
textEl.textContent = getRandomHexColor();

}

