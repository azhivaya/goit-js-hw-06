// Напиши скрипт, который при потере фокуса на инпуте(событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector('#validation-input');
const inputDataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onBlurCheck);

function onBlurCheck(event) {

    if (event.currentTarget.value.length === inputDataLength) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
        
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    };
}

