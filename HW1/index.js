'use strict';

/*
На первом занятии отсутствовал и не совсем понял, можно ли пользоваться объектом Math.
В доп задачах (в pdf файле), в задаче №3 написано - не пользоваться Math.abs.

В task1() можно было бы воспользоваться Math.floor()
В task4() можно было бы воспользоваться Math.abs()
*/

function task1() {
    let result   = 0
      , gryadka  = 15 * 25
      , uchastok = 10 * 100;

    /* 
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators 
    Операнды всех битовых операций конвертируются в 32-х битовые целые со знаком
    */
    result = uchastok - ((uchastok / gryadka) | 0) * gryadka;

    return result;
}

function task2() {
    let o1 = 15
      , o2 = 600 * 0.01; // 1 см2 = 0.01 дм2

      return o1 - o2;
}

function task3() {
    let result = 0
      , a      = 8
      , b      = 1
      , c      = 5;

    result = (a < b) ? 
                ((a < c) ? a : c) :
            ((b < c) ? 
                b : c);

    return result;
}

function task4() {
    let result = 0
      , m      = 8.5
      , n      = 11.45;

    result = (
        ((10 - m < 0) ? -(10 - m) : 10 - m) > 
        ((10 - n < 0) ? -(10 - n) : 10 - n)
    ) ? n : m;

    return result;
}

function task5() {
    /*
    хз - хакер знает
    */
    return 0;
}

console.log('Результат задачи №1: %s', task1());
console.log('Результат задачи №2: %s', task2());
console.log('Результат задачи №3: %s', task3());
console.log('Результат задачи №4: %s', task4());
console.log('Результат задачи №5: %s', task5());