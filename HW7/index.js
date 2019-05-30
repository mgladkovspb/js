'use strict';

let lib = {};
lib.plural = (n, titles) => {
    return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
}

lib.rnd = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

Date.prototype.msPerMinute = 1000 * 60;
Date.prototype.msPerHour   = 1000 * 60 * 60;
Date.prototype.msPerDay    = 1000 * 60 * 60 * 24;

Date.prototype.daysTo = function(d) {
    let diff = d.getTime() - this.getTime();
    return Math.floor(diff / (this.msPerDay));
}

Date.prototype.hoursTo = function(d) {
    let diff = d.getTime() - this.getTime();
    return Math.floor((diff % (this.msPerDay)) / (this.msPerHour));
}

Date.prototype.minutesTo = function(d) {
    let diff = d.getTime() - this.getTime();
    return Math.floor((diff % (this.msPerHour)) / (this.msPerMinute));
}

Date.prototype.secondsTo = function(d) {
    let diff = d.getTime() - this.getTime();
    return Math.floor((diff % (this.msPerMinute)) / 1000);
}

function task1() {
}

function task2() {
}

function task3() {
}

/*
стрижка только началась
*/
function task4() {
    let ny = new Date('01/01/2020');

    setInterval(() => {
        let now = new Date();
        console.log(`${now.daysTo(ny)}д ${now.hoursTo(ny)}ч ${now.minutesTo(ny)}м ${now.secondsTo(ny)}с`);
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    task1();
    task2();
    task3();
    task4();
}, false);