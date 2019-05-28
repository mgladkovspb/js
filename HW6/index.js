'use strict';

function task1() {
}

function task2() {
    function init(min, max) {
        let dropped = [];

        const rnd = (min, max) => {
            return Math.floor(min + Math.random() * (max + 1 - min));
        }

        function print() {
            let current = 0
              , it      = 0;
            do {
                it++;
                current = rnd(min, max);
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
            const plural = (n, titles) => {
                return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
            }

            console.log('%s %s. %d %s. Интересы:', 
                this.firstName, 
                this.lastName,
                this.age,
                plural(this.age, ['год', 'года', 'лет']));
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
}

function task5() {
}

document.addEventListener('DOMContentLoaded', function() {
    //console.log('Результат задачи №1: %s', task1());
    console.log('*------------------------------------*');
    console.log('Результат задачи №2:'), task2();
    console.log('*------------------------------------*');
    console.log('Результат задачи №3:'), task3();
    console.log('*------------------------------------*');
    //console.log('Результат задачи №4: %s', task4());
    //console.log('*------------------------------------*');
    //console.log('Результат задачи №5: %s', task5());
}, false);