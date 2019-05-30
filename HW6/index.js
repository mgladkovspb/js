'use strict';

/*
уже есть функционал используемый повторно...
использовался в прошлых задачах...
*/

let lib = {};
lib.plural = (n, titles) => {
    return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
}

lib.rnd = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

/*
Возможно я плохо слушал пояснения к задаче...
Решил как понял...
*/
function task1() {
    let a = {
        name: 'static',
        count: 0
    }

    const foo = (obj, field, counter) => {
        let result = [];

        if(!(field in obj)) {
            console.log('Поля %s нет в объекте.', field);
            return result;
        }

        for(let i = 0; i < counter; i++) {
            let tmp = Object.assign({}, obj);
            tmp[field] = i;
            result.push(tmp);
        }

        return result;
    }

    return foo(a, 'count', 10);
}

function task2() {
    function init(min, max) {
        let dropped = [];

        function print() {
            let current = 0
              , it      = 0;
            do {
                it++;
                current = lib.rnd(min, max);
                if(dropped.includes(current))
                    continue;

                dropped.push(current);
            } while(dropped.length < max) ;
            console.log('%o', dropped);
            console.log('Количество итераций: %d', it);
        }

        return print;
    }

    let gen = init(1, 100);
    gen();
}

function task3() {
    let Student = {
        firstName: '',
        lastName: '',
        age: 0,
        place: '',
        interests: [],
        print: function() {
            console.log('%s %s. %d %s. Интересы:', 
                this.firstName, 
                this.lastName,
                this.age,
                lib.plural(this.age, ['год', 'года', 'лет']));
            console.log(this.interests.toString());
            console.log('Учится в %s', this.place);
        }
    }

    let gm = Object.create(Student);
    gm.firstName = 'Максим';
    gm.lastName = 'Гладков';
    gm.age = 40;
    gm.place = 'ИТМО';
    gm.interests = ['Программирование', 'Автопутишествия', 'Пивасик'];

    let ii = Object.create(Student);
    ii.firstName = 'Иван';
    ii.lastName = 'Иванов';
    ii.age = 22;
    ii.place = 'МФТИ';
    ii.interests = ['Фотография', 'Горные лыжи'];

    let pp = Object.create(Student);
    pp.firstName = 'Петр';
    pp.lastName = 'Петров';
    pp.age = 31;
    pp.place = 'ИТМО';
    pp.interests = ['Программирование', 'Музыка', 'Аниме'];

    gm.print();
    console.log('\n');
    ii.print();
    console.log('\n');
    pp.print();
}

function task4() {
    function factorial(n) {
        if(n === 0)
            return 1;
        return n * factorial(n - 1);
    }

    function factorialTail(n, m = 1) {
        if(n === 0)
            return m;
        return factorialTail(n - 1, n * m);
    }

    console.log('Рекурсия: %d', factorial(10));
    console.log('Хвостовая рекурсия: %d', factorialTail(10));
}

function task5() {
    let arr = [ 
        { 'price' : 10, 'count' : 2 }, 
        { 'price' : 5, 'count' : 5}, 
        { 'price' : 8, 'count' : 5 }, 
        { 'price' : 12, 'count' : 4 }, 
        { 'price' : 8, 'count' : 4}
    ];

    const sortFn = (type) => {
        return (obja, objb) => {
            if(type !== 'asc' && type !== 'desc')
                return 0; 
            return (type === 'asc')? obja.price - objb.price : objb.price - obja.price;
        }
    }

    console.log('Массив до сортировки: %o', arr);
    console.log('Сортировка по убыванию: %o', Object.assign([], arr).sort(sortFn('desc')));
    console.log('Сортировка по возрастанию: %o', Object.assign([], arr).sort(sortFn('asc')));
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1: %o', task1());
    console.log('*------------------------------------*');
    console.log('Результат задачи №2:'), task2();
    console.log('*------------------------------------*');
    console.log('Результат задачи №3:'), task3();
    console.log('*------------------------------------*');
    console.log('Результат задачи №4:'), task4();
    console.log('*------------------------------------*');
    console.log('Результат задачи №5:'), task5();
}, false);