const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const totalValue = document.getElementById('value');
let counterValue = 0;

decrementBtn.addEventListener('click', targetButtonClickHandlerDec);

incrementBtn.addEventListener('click', targetButtonClickHandlerIncr);

function targetButtonClickHandlerDec() {
  counterValue--;
  totalValue.textContent = counterValue;
}

function targetButtonClickHandlerIncr() {
  counterValue++;
  totalValue.textContent = counterValue;
}
