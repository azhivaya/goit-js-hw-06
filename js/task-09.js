//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
//при клике на button.change - color и выводит значение цвета в span.color.
//Для генерации случайного цвета используй функцию getRandomHexColor.


const btn = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body'); 

btn.addEventListener('click', onColorChange);


function onColorChange() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;
  
  bodyRef.setAttribute('style', `background-color: ${spanRef.textContent}`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

