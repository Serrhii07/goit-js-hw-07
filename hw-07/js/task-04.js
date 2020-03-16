const counterValueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);

let counterValue = 0;

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}
