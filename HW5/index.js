'use strict';

function task1(arr1, arr2) {
    let result = true;

    if(!Array.isArray(arr1) || !Array.isArray(arr2))
        return false;

    if(arr1.length !== arr2.length)
        return false;

    for(let i = 0, len = arr1.length; i < len; i++) {
        if(arr1[i] !== arr2[i]) {
            result = false;
            break;
        }
    }

    return result;
}

function task2(start, stop, step = 1) {
    let result = [];

    for(let i = start; i < stop; i += step) 
        result.push(i);

    return result;
}

function task3() {
    let Student = {
        firstName: '',
        lastName: '',
        age: 0,
        place: '',
        interests: [],
        print: function() {
            console.log('Карточка студента:');
            console.log('Имя: %s' + this.firstName);
            console.log('Фамилия: %s' + this.lastName);
            console.log('Возраст: %s' + this.age);
            console.log('Место обучения: %s' + this.place);
            console.log('Интересы: %o', this.interests);
        }
    }

    let gm = Object.create(Student);
    gm.firstName = 'Максим';
    gm.lastName = 'Гладков';
    gm.age = 40;
    gm.place = 'itmo';
    gm.interests = ['Программирование', 'Автопутишествия', 'Пивасик'];

    gm.print();
}

function task4() {
    let alphabet1 = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я']
      , alphabet2 = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']
      , result = '';

    const rnd = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    let wordLength = rnd(3, 5)
      , coin       = rnd(1, 2);

    for(let i = 0; i < wordLength; i++) {
        if(coin === 1) {
            result += alphabet1[rnd(0, alphabet1.length - 1)];
            coin = 2;
        } else {
            result += alphabet2[rnd(0, alphabet2.length - 1)];
            coin = 1;
        }
    }

    return result.toLocaleUpperCase();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1: %s', task1([1,2,3], [1,2,3]));
    console.log('Результат задачи №2: %o', task2(1, 10, 2)); // range
    console.log('Результат задачи №3:'), task3();
    console.log('Результат задачи №4: %s', task4());
}, false);