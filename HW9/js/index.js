'use strict';

let Table = function(placeholder, data) {
    this._table       = undefined;
    this._placeholder = document.getElementById(placeholder);
    this._data        = data || [];

    this._sort = (field, type) => {
        const sortFn = (field, type) => {
            return (obja, objb) => {
                let result = 0;
                switch(typeof(obja[field])) {
                    case 'number': 
                        result = (type === 'asc')? obja[field] - objb[field] : objb[field] - obja[field];
                        break;
                    case 'string':
                        result = (type === 'asc')? obja[field].localeCompare(objb[field]) : objb[field].localeCompare(obja[field]);
                        break;
                }
                return result;
            }
        }

        this._data.sort(sortFn(field, type));
    }

    this.update = () => {
        let thead, tbody, tr, td;

        if(this._table === undefined && this._data.length > 0) {
            this._table = document.createElement('table');
            this._table.classList.value = 'books-table';

            thead = document.createElement('thead');
            tr    = document.createElement('tr');

            for(let prop in this._data[0]) {
                td = document.createElement('td');
                td.classList.value = 'blue';
                td.setAttribute('data-sort', 'unsorted');
                td.innerText = prop;
                td.addEventListener('click', (e) => {
                    e.target.dataset.sort = ((e.target.dataset.sort === 'unsort')? 'asc' : 
                        (e.target.dataset.sort === 'asc')? 'desc' : 'asc');
                    this._sort(e.target.innerText, e.target.dataset.sort);
                    this.update();
                });
                tr.appendChild(td);
            }

            thead.appendChild(tr);
            this._table.appendChild(thead);
        }

        tbody = this._table.getElementsByTagName('tbody')[0];
        if(tbody === undefined) {
            tbody = document.createElement('tbody');
        }

        // очистить тело таблицы
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        for(let i = 0; i < this._data.length; i++) {
            let obj = this._data[i];

            tr = document.createElement('tr');
            for(let prop in obj) {
                td = document.createElement('td');
                td.innerText = obj[prop];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        this._table.appendChild(tbody);
        this._placeholder.appendChild(this._table);
    }
}

function task1() {

}

function task2() {
    
}

function task3() {
    
}

function task4() {
    
}

function task5() {
    let books = [
        { art: '0001', year: 1952, author: 'Сэм Мартинес', name: 'Ради всего святого', description: 'Кларисса Крамм преставилась в селения небесные ввиду отравления несвежим мясом. Всю жизнь она прожила праведно, а потому без проблем была принята в сонм блаженных и небесный хор. Но праведница оказалась недовольна укладом жизни в Царствии Небесном и давай строчить докладные по любому поводу!' },
        { art: '0002', year: 1959, author: 'Роберт Шекли', name: 'Право на смерть', description: 'В недалёком будущем идёт кровопролитная война между США, Китаем и Россией. Уровень медицины поднялся уже настолько, что стало возможным воскрешать солдат неограниченное количество раз. Увы, не каждый солдат рад этому...' },
        { art: '0003', year: 1951, author: 'Клиффорд Саймак', name: 'Ветер чужого мира', description: 'Аборигены предупредили людей, разведчиков новой планеты, о том, что те никогда уже не смогут отсюда улететь, если не сделают это сейчас. Причину не сказали. Земляне плюнули на предупреждение (ещё бы, ведь на их стороне стояла самая современная техника) и принялись покорять планету. Экскаваторы, огнемётчики, почворазрыхлители и т. д. взялись за дело. Через некоторое время техника стала выходить из строя...' },
        { art: '0004', year: 1969, author: 'Клиффорд Саймак', name: 'Я весь внутри плачу', description: 'Все, кто хотел, покинули Землю. Ушедшие оставили на Земле старых роботов и людей, которые ни к чему не стремились...' }
    ];

    let boosTable = new Table('task5', books);
    boosTable.update();
}

document.addEventListener('DOMContentLoaded', function() {
    task1();
    task2();
    task3();
    task4();
    task5();
}, false);