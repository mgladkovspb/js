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
    let watch = document.getElementById('watch');
    const fn = () => {
        let lights = ['red', 'yellow', 'green']
          , dd   = new Date()
          , hh   = watch.children[0]
          , mm   = watch.children[1]
          , ss   = watch.children[2];

        hh.innerText = dd.getHours().toString().padStart(2, '0');
        hh.classList.value = 'digit ' + lights[lib.rnd(0, 2)];

        mm.innerText = dd.getMinutes().toString().padStart(2, '0');
        mm.classList.value = 'digit ' + lights[lib.rnd(0, 2)];
        
        ss.innerText = dd.getSeconds().toString().padStart(2, '0');
        ss.classList.value = 'digit ' + lights[lib.rnd(0, 2)];
    }

    fn();
    setInterval(fn, 1000);
}

function task2() {
    let cards = document.getElementById('cards')
      , products = [
        { art: '0001', name: 'Товар 1', pic: 'i1.jpg', desc: 'Called though excuse length ye needed it he having. Way own uncommonly travelling now acceptance bed compliment solicitude. Latter remark hunted enough vulgar say man. At principle perfectly by sweetness do. Made neat an on be gave show snug tore. Sportsman do offending supported extremity breakfast by liste'},
        { art: '0002', name: 'Товар 2', pic: 'i2.jpg', desc: 'Am wound worth water he linen at vexed.. Her too add narrow having wished. Celebrated delightful an especially increasing instrument am. An concluded sportsman offending so provision mr education. Painful so he an comfort is manners. Draw from upon here gone add one. Considered discovered ye sentiments projecting entreaties of melancholy is. M'},
        { art: '0003', name: 'Товар 3', pic: 'i3.jpg', desc: 'Called though excuse length ye needed it he having. Equally he minutes my hastily. Bed uncommonly his discovered for estimating far. Up hung mr we give rest half. If as increasing contrasted entreaties be. Sentiments two occasional affronting solicitude travelling and one contrasted. Their saved linen downs tears son add'},
    ];

    const createCard = (product) => {
        let table = document.createElement('table'), tr, td, img;

        table.classList.value = 'card';

        img = document.createElement('img');
        img.src = 'img/' + product.pic;
        img.classList.value = 'product-image';

        tr = document.createElement('tr');
        td = document.createElement('td');
        td.rowSpan = 2;
        td.appendChild(img);
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = product.name;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = product.art;
        tr.appendChild(td);

        table.appendChild(tr);

        tr = document.createElement('tr');
        td = document.createElement('td');
        td.colSpan = 2;
        td.innerText = product.desc;
        tr.appendChild(td);

        table.appendChild(tr);
        cards.appendChild(table);
    }

    for(let i = 0; i < products.length; i++) {
        createCard(products[i]);
    }
}

function task3() {
    const createTrafficLight = (id) => {
        let element   = document.getElementById(id)
          , lights    = ['red', 'yellow', 'green']
          , direction = 'down'
          , cellCount = 3
          , current   = 0;

        return () => {
            (direction === 'down')? current++ : current--;
            switch(current) {
                case 0: direction = 'down'; break;
                case cellCount - 1: direction = 'up'; break;
            }

            for(let i = 0; i < cellCount; i++) {
                let li  = element.children[i]
                  , div = li.children[0];
                div.classList.value = (i === current)? lights[i] : lights[i] + '-dark';
            };
        }
    }

    let nextLight = createTrafficLight('traffic-light');
    setInterval(nextLight, 1000);
}

function task4() {
    let countdown = document.getElementById('countdown')
      , dayD = new Date('06/08/2019 14:00');

    const fn = () => {
        let now     = new Date()
          , days    = now.daysTo(dayD)
          , hours   = now.hoursTo(dayD)
          , minutes = now.minutesTo(dayD)
          , seconds = now.secondsTo(dayD)
          , template = `${ days.toString().padStart(3, '0') } ${lib.plural(days, ['день', 'дня', 'дней']) } 
                ${ hours.toString().padStart(2, '0') } ${ lib.plural(hours, ['час', 'часа', 'часоы']) } 
                ${ minutes.toString().padStart(2, '0') } ${ lib.plural(minutes, ['минута', 'минуты', 'минут']) } 
                ${ seconds.toString().padStart(2, '0') } ${ lib.plural(seconds, ['секунда', 'секунды', 'секунд']) }`;

        countdown.innerText = template.replace(/[\r\n\t\f\v]/gm, '');
    }

    fn();
    setInterval(fn, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    task1();
    task2();
    task3();
    task4();
}, false);