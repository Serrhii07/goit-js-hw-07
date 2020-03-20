const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const elementsArr = ingredients.map(ingredient => {
  const elementRef = document.createElement('li');
  elementRef.textContent = ingredient;
  return elementRef;
});

ingredientsListRef.append(...elementsArr);
