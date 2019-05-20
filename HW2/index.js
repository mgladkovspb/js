'use strict';

function userInput(message, min, max) {
    let result = 0;

    while(true) {
        result = parseInt(prompt(message, 0));
        if(!isNaN(result) && result >= min && result <= max)
            break
    }

    return result;
}

function task1() {
    let choice = 0;

    choice = userInput('Задача №1\n\nВведите номер месяца 1 - 12', 1, 12);
    switch(true) {
        case choice === 12 || choice == 1 || choice === 2: 
            alert('Зима'); 
            again = false; 
            break;
        case 3 >= choice || choice <= 5: 
            alert('Весна'); 
            again = false; 
            break;
        case 6 >= choice || choice <= 8: 
            alert('Лето'); 
            again = false; 
            break;
        case 9 >= choice || choice <= 11: 
            alert('Осень'); 
            again = false; 
            break;
        default: 
            alert('Коллеги, просил же - число от 1 до 12');
    }
}

function task2() {
    let unit    = 0
      , length  = 0
      , m       = ['дециметрах', 'километрах', 'метрах', 'миллиметрах', 'сантиметрах']
      , message = 'Длина отрезка: ';

    unit = userInput(
        'Задача №2\n \
        Выберите единицу измерения:\n \
        1 — дециметр\n \
        2 — километр\n \
        3 — метр\n \
        4 — миллиметр\n \
        5 — сантиметр', 1, 5
    );

    length = userInput(
        'Задача №2\n \
        Введите длину отрезка в ' + m[unit - 1], 1, 1000000000
    );

    switch(unit) {
        case 1:
            message += length * 0.1 + 'м.';
            break;
        case 2:
            message += length * 1000 + 'м.';
            break;
        case 3:
            message += length + 'м.';
            break;
        case 4:
            message += length * 0.001 + 'м.';
            break;
        case 5:
            message += length * 0.01 + 'м.';
            break;
    }

    alert(message);
}

function task3() {
    let input     = 0
      , message   = ''
      , represent = ['однозначное', 'двузначное', 'трехзначное'];

    input = userInput(
        'Домашняя работа №2\n\nВведите число от -999 до 999', -999, 999
    );

    if(0 === input) {
        message = 'Нулевое число';
    } else {
        message = (input < 0)? 'Отрицательное ' : 'Положительное ';
        input = Math.abs(input);

        let count = 0;
        while(input > 0) {
            input = Math.floor(input / 10);
            count++;
        }

        message += represent[count - 1] + ' число.';
    }

    alert(message);
}

function task4() {
    console.log('Задача №4');
    for(let i = 1; i <= 100; i++) {
        switch(true) {
            case 0 == i % 3 && 0 == i % 5:
                console.log('FreeFive');
                break;
            case 0 == i % 3:
                console.log('Free');
                break;
            case 0 == i % 5:
                console.log('Five');
                break;
            default:
                console.log(i);
        }
    }

    alert('Результат в консоли.');
}

function task5() {
    let input   = 0
      , message = '';

    input = userInput(
        'Домашняя работа №2\n\n\
        Попробую оппределить - является год високосным или нет\n\
        Введите год', 0, 3000
    );

    input = Math.abs(input);
    message = input + ' - этот год не високосный.';
    if(0 == input % 4 && 0 == input % 400) {
        message = input + ' - этот год високосный.';
    }

    alert(message);
}

function task6() {
    let tarelki  = 10
      , sredstvo = 3;

    const plural = (n, titles) => {
        /*
        http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms
        */
        return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
    }
    

    console.log(
        'Начали: %s %s и %s средства', 
        tarelki, 
        plural(tarelki, ['тарелка', 'тарелки', 'тарелок']), 
        sredstvo
    );

    while(tarelki > 0 && sredstvo > 0) {
        tarelki--;
        sredstvo -=0.5;
        console.log('Остаток средства: %s', sredstvo);
    }

    console.log(
        'Осталось %s %s, осталось %s средства',
        tarelki, 
        plural(tarelki, ['тарелка', 'тарелки', 'тарелок']), 
        sredstvo
    );

    alert('Результат в консоли');
}

let task = 0;

while(true) {
    task = parseInt(prompt(
        'Домашняя работа №2\n\n\
        Выберите номер задачи (1-6) или нажмите кнопку "отмена"', 1)
    );

    if(isNaN(task)) break;

    if(task >= 1 && task <= 6)
        window['task' + task]();
}
