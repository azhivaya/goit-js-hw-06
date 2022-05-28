// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// добраться по єлементу const counterAccess = document.querySelector('#counter');
// const decremBtn = counterAccess.querySelector('[data-action="decrement"]'); to try

const decrementBtn = document.querySelector('#counter > [data-action="decrement"]');
const incrementBtn = document.querySelector('#counter > [data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    
    onValueChange();
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;

    onValueChange();
});

function onValueChange() {
    valueRef.textContent = counterValue;
};

