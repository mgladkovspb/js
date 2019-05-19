'use strict';

function task1() {
    let choice = 0
      , again  = true;

    while(again) {
        choice = parseInt(prompt(
            'Задача №1\n\nВведите номер месяца 1 - 12', 1
        ));

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
}

function task2() {
    let unit    = 0
      , length  = 0
      , m       = ['дециметрах', 'километрах', 'метрах', 'миллиметрах', 'сантиметрах']
      , message = 'Длинна отрезка: ';

    while(true) {
        if(0 == unit) {
            unit = parseInt(prompt(
                'Задача №2\n \
                Выберите единицу измерения:\n \
                1 — дециметр\n \
                2 — километр\n \
                3 — метр\n \
                4 — миллиметр\n \
                5 — сантиметр', 1
            ));

            if(isNaN(unit) || 1 > unit || unit > 5) {
                unit = 0;
                continue;
            }
        }

        length = parseInt(prompt(
            'Задача №2\n \
            Введите длину отрезка в ' + m[unit - 1], 1
        ));

        if(isNaN(length) || length < 0) continue;
        else break;
    }

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
      , canceled  = false
      , message   = ''
      , represent = ['однозначное', 'двузначное', 'трехзначное']
      , again     = true;

    while(again) {
        input = parseInt(prompt(
            'Домашняя работа №2\n\nВведите число от -999 до 999', 0
        ));
    
        if(isNaN(input)) {
            alert('Не хотите - не надо, пока!');
            canceled = true;
            break;
        }

        if(input >= -999 || input <= 999) {
            again = false;
        }
    }

    if(canceled) return;

    if(input == 0) {
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
}

function task5() {
}

function task6() {
}

let task = 0;

while(true) {
    task = parseInt(prompt(
        'Домашняя работа №2\n\nВыберите номер задачи (1-6) или нажмите кнопку "отмена"', 1
    ));

    if(isNaN(task)) break;

    window['task' + task]();
}
