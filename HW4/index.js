'use strict';

function task1() {
    let result = 0
      , str    = '40689125'
      , arr    = str.split('').map(item => parseInt(item));

    for(let i = 0, len = arr.length; i < len; i++) {
        result += arr[i];
    }

    return result;
}

function task2() {
    let s = 'Hello world'
      , c = 'o'
      , reg;

    reg = new RegExp(c, 'ig');
    return s.replace(reg, c + c);
}

function task3() {
    let pass = '', test, dgt;

    pass = prompt('Введите пароль:\n\
    - длинна от 9 символов\n\
    - содержит обязательно английские буквы верхнего и нижнего регистра\n\
    - содержит более двух цифр\n\
    - содержит обязательно один из неалфавитных символов (например, !, $, #, %)');

    test = /^[\w!$#%]/g.test(pass);
    dgt  = pass.match(/\d/g);

    return (test && dgt.length > 2)? 'Пароль прошел проверку' : 'Пароль не прошел проверку';
}

function task4() {
    /*
    стрижка только началась ;)
    */
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1: %s', task1());
    console.log('Результат задачи №2: %s', task2());
    console.log('Результат задачи №2: %s', task3());
}, false);