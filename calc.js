window.addEventListener('load', function onLoadCalc() {
    //Определние кнопок
    let butt = ['1', '2', '3',
        '4', '5', '6',
        '7', '8', '9', '*',
        '-', '+', '/', 'del', '=']

//----Ввод добавление классов в DOM
    let inp = document.querySelector('.inp');//Инициализируем переменную с помощью клю.слова let и присваиваем ей класс инпута
    inp.style.width = '180px'
    let inp2 = document.querySelector('#inp2');

//----Перебор элементов из массива (кнопок)
    butt.forEach(function (sign) {
        let signElement = document.createElement('div')
        signElement.className = 'btn';
        signElement.style.cssText = `
          width: 50px;
        height: 48px;
        background: #adadad;
        display: inline-block;
        text-align: center;
        line-height: 60px;
        user-select: none;
        `;
        signElement.innerHTML = sign;
        inp.append(signElement)
    });

//----Перебор и добавление события для всех элементов (кнопок)
    document.querySelectorAll('#butt_num .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
    let buttNum = document.querySelector('#butt_num');
    buttNum.style.cssText = `
     width: 180px;
     height: 30px;
     display: flex;
    `;

//---Объявление функции с условиями для обнуления, удаления символов
    function onButtonClick(e) {
        if (e.target.innerHTML === 'del') { // это «целевой» элемент, на котором произошло событие
            inp2.innerHTML = '0'; // Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки
        } else if (e.target.innerHTML === '=') {
            inp2.innerHTML = eval(inp2.innerHTML) //Функция eval() выполняет код, переданный ей в виде строки
        } else if (inp2.innerHTML === '0') {
            inp2.innerHTML = e.target.innerHTML;
        } else {
            inp2.innerHTML += e.target.innerHTML;
        }
    }
});