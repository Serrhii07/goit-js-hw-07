const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');
const elementsArr = [];

ingredients.forEach(ingredient => {
  const elementRef = document.createElement('li');
  elementRef.textContent = ingredient;
  elementsArr.push(elementRef);
});

ingredientsListRef.append(...elementsArr);
