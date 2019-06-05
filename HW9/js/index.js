'use strict';

function task1() {
    let tools = new MyTools.ArrayTools();
    
    let arrayOfObjects = [ 
        { 'price' : 10, 'count' : 2 }, 
        { 'price' : 5, 'count' : 5}, 
        { 'price' : 8, 'count' : 5 }, 
        { 'price' : 12, 'count' : 4 }, 
        { 'price' : 8, 'count' : 4}
    ];

    console.log('Работа с массивом объектов:')
    console.log('Товар с минимальной ценой: %o', tools.min(arrayOfObjects, 'price'));
    console.log('Товар с максимальной ценой: %o', tools.max(arrayOfObjects, 'price'));
    console.log('Средняя цена товара: %d', tools.average(arrayOfObjects, 'price'));

    let arrayOfInt = [23, 17, 98, 3, 15, 44];

    console.log('Работа с массивом чисел:')
    console.log('Минимальное число: %d', tools.min(arrayOfInt));
    console.log('Максимальное число: %d', tools.max(arrayOfInt));
    console.log('среднее арифметическое: %d', tools.average(arrayOfInt));

    let arrayOfString = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

    console.log('Работа с массивом строк:')
    console.log('Сортировка по возрастанию: %o', tools.sort(arrayOfString));
    console.log('Сортировка по убыванию: %o', tools.sort(arrayOfString, 'desc'));
}

function task2() {
    console.log('Не реализовано.');
}

function task3() {
    console.log('Не реализовано.');
}

function task4() {
    const generateField = (n, prize) => {
        let array = []
          , len   = n * n;

        if(n === 0) return array;

        Object.assign(array, prize);
        for(let i = array.length; i < len; i++)
            array[i] = 'Пусто';

        let tools = new MyTools.ArrayTools();
        for(let i = 0; i < 10; i++)
            tools.shuffle(array)

        return array;
    }

    let gameField     = document.getElementById('game-field')
      , attemptsField = document.getElementById('attempts');

    const prepare = (array) => {
        let attempts = 3;
        return () => {
            const listenerFn = (e) => {
                let div = e.target;
                e.stopPropagation();
                if(attempts === 0)
                    return;

                let prize = array[parseInt(e.target.dataset.prize)];
                if(prize === 'Пусто') {
                    div.classList.value = 'cell shadow red';
                    attempts--;
                } else {
                    div.classList.value = 'cell shadow green';
                    attempts = 0;
                }
                div.innerText = prize;
                attemptsField.innerText = `Количество попыток: ${attempts}`;
                e.target.removeEventListener('click', listenerFn);
            };

            for(let i = 0; i < array.length; i++) {
                let div = document.createElement('div');
                div.classList.value = 'cell shadow blue';
                div.setAttribute('data-prize', i);
                div.addEventListener('click', listenerFn);
                div.innerText = '?';
                gameField.appendChild(div);
                attemptsField.innerText = `Количество попыток: ${attempts}`;
            }
        }
    }

    let render = prepare(generateField(3, ['Деньги', 'Квартира', 'Машина']));
    render();
}

function task5() {
    let books = [
        { art: '0001', year: 1952, author: 'Сэм Мартинес', name: 'Ради всего святого', description: 'Кларисса Крамм преставилась в селения небесные ввиду отравления несвежим мясом. Всю жизнь она прожила праведно, а потому без проблем была принята в сонм блаженных и небесный хор. Но праведница оказалась недовольна укладом жизни в Царствии Небесном и давай строчить докладные по любому поводу!' },
        { art: '0002', year: 1959, author: 'Роберт Шекли', name: 'Право на смерть', description: 'В недалёком будущем идёт кровопролитная война между США, Китаем и Россией. Уровень медицины поднялся уже настолько, что стало возможным воскрешать солдат неограниченное количество раз. Увы, не каждый солдат рад этому...' },
        { art: '0003', year: 1951, author: 'Клиффорд Саймак', name: 'Ветер чужого мира', description: 'Аборигены предупредили людей, разведчиков новой планеты, о том, что те никогда уже не смогут отсюда улететь, если не сделают это сейчас. Причину не сказали. Земляне плюнули на предупреждение (ещё бы, ведь на их стороне стояла самая современная техника) и принялись покорять планету. Экскаваторы, огнемётчики, почворазрыхлители и т. д. взялись за дело. Через некоторое время техника стала выходить из строя...' },
        { art: '0004', year: 1969, author: 'Клиффорд Саймак', name: 'Я весь внутри плачу', description: 'Все, кто хотел, покинули Землю. Ушедшие оставили на Земле старых роботов и людей, которые ни к чему не стремились...' }
    ];

    let boosTable = new MyTools.Table('task5', books);
    boosTable.update();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1:'), task1();
    console.log('Результат задачи №2:'), task2();
    console.log('Результат задачи №3:'), task3();
    console.log('Результат задачи №4 на вёрстке'), task4();
    console.log('Результат задачи №5 на вёрстке'), task5();
}, false);