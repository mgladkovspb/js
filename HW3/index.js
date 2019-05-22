'use strict';

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
*/
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

function task1() {
    return [ 12, 4, 3, 10, 1, 20 ].concat([-3, -7, -100, -33]);
}

function task2() {
    let area = [ 1, null, 0, null, 1, null, null, null, null ]
      , field
      , text = '<table><tr>';

    for(let i = 0, len = area.length; i < len; i++) {
        if(i != 0 && i % 3 == 0) {
            text += '</tr><tr>';
        } 
        text += '<td>' + ((area[i] === null)? ' ' : (area[i] == 1)? 'X' : 'O') + '</td>';
    }
    text += '</tr></table>';

    field = document.getElementById('field');
    field.innerHTML = text;

    return '';
}

function task3() {
    let m = [12, 4, 3, 10, 1, 20];

    /*
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    уже трогали функцию сортировки ;)
    */
    const sortFn = (a, b) => {
        return a - b;
    }

    m.sort(sortFn);
    m.pop();
    m.shift();

    return m;
}

function task4() {
    let lucky = 0;

    const cast = (item) => {
        return parseInt(item);
    }

   for(let i = 1; i < 1000000; i++) {
        /*
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
        В данном случае, вместо функции cast можно просто подставить Number
        parseInt напрямую подставлять нельзя т.к. у нее есть опциональный параметр [, radix]
        а функция map, при вызове callback функции, дополнительно передает index и array, что сводит с ума parseInt
        https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        */
        let str   = i.toString().padStart(6, '0')
          , left  = str.slice(0, 3).split('').map(cast)
          , right = str.slice(-3).split('').map(cast);

        if(left[0] + left[1] + left[2] === right[0] + right[1] + right[2])
            lucky++
   }

   return lucky;
}

document.addEventListener('DOMContentLoaded', function() {
    /*
    https://developer.mozilla.org/ru/docs/Web/API/Console
    */
    console.log('Результат задачи №1: %o', task1());
    console.log('Результат задачи №2: смотрите на верстке'), task2();
    console.log('Результат задачи №3: %o', task3());
    console.log('Результат задачи №4: %s', task4());
}, false);
