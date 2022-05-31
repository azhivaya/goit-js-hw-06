//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
//сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes'); 

createBtn.addEventListener('click', (event) => createBoxes(event, inputRef.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(event, amount) {
  console.log(amount);
  if (!amount) {
    return
  }

  const divArray = [];

  for (let i = 0; i < amount; i += 1) {
    let divSize = 30 + (i + boxes.children.length) * 10 + 'px';
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = divSize;
    element.style.height = divSize;
    divArray.push(element);
  }

  boxesRef.append(...divArray);
  //console.log(boxes.children.length);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}