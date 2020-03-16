const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const elementRef = document.createElement('li');
  elementRef.textContent = ingredient;
  ingredientsListRef.appendChild(elementRef);
});
