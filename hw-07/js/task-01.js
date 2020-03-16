const categoriesRef = document.querySelector('#categories');
const categoriesQuantity = categoriesRef.children.length;
console.log(`В списке ${categoriesQuantity} категории`);

const itemsRef = document.querySelectorAll('li.item > h2');
itemsRef.forEach(item =>
  console.log(
    `Категория: ${item.textContent}. Количество элементов: ${item.nextElementSibling.children.length}`,
  ),
);
