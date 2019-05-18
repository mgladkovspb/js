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
    let result = 0
      , unit   = 0
      , lenght = 0;

    while(true) {
        unit = parseInt(prompt(
            'Выберите единицу измерения:\n \
            1 — дециметр\n \
            2 — километр\n \
            3 — метр\n \
            4 — миллиметр\n \
            5 — сантиметр', 1
        ));

        if(isNaN(unit) || 1 > unit || unit > 5) continue;

        length = parseInt(prompt(
            'Введите длину отрезка', 1
        ));
    }

}

function task3() {
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