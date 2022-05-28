const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredientsList = document.querySelector('#ingredients');

const ingProps = unit => {
  return unit.map(el => {
  const liRef = document.createElement('li');
  liRef.textContent = el;
  liRef.classList.add = 'item';

  return liRef;

});
}

const elements = ingProps(ingredients);
ingredientsList.append(...elements);
