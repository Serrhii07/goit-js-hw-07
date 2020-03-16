const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput() {
  spanRef.textContent = inputRef.value;
  if (inputRef.value === '') {
    spanRef.textContent = 'незнакомец';
  }
}
