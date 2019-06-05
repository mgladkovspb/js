'use strict';

let MyTools = (function() {
    /*
    1. Массив должен быть из одинаковых объектов
    2. Поля объекта будут колонками таблицы
    */
    const Table = function(placeholder, data) {
        this._table       = undefined;
        this._placeholder = document.getElementById(placeholder);
        this._data        = data || [];

        this.update = () => {
            let thead, tbody, tr, td, arrayTools = new ArrayTools();;
    
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
                        arrayTools.sort(this._data, 
                            e.target.dataset.sort, 
                            e.target.innerText);
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

    const ArrayTools = function() {
        this._sortFn = (type, field) => {
            return (obja, objb) => {
                let result = 0
                    , a = (field === undefined)? obja : obja[field]
                    , b = (field === undefined)? objb : objb[field]
                
                switch(typeof(a)) {
                    case 'number': 
                        result = (type === 'asc')? a - b : b - a;
                        break;
                    case 'string':
                        result = (type === 'asc')? a.localeCompare(b) : b.localeCompare(a);
                        break;
                }
                return result;
            }
        }

        this.sort = (array, type = 'asc', field) => {
            return array.sort(this._sortFn(type, field));
        }
    
        this.min = (array, field) => {
            return array.sort(this._sortFn('asc', field))[0];
        }

        this.max = (array, field) => {
            return array.sort(this._sortFn('desc', field))[0];
        }

        this.average = (array, field) => {
            let result = 0
              , len    = array.length;

            if(len === 0) return result;

            for(let i = 0; i < len; i++) 
                result += (field === undefined)? array[i] : array[i][field];
    
            return result / len;
        }

        this.shuffle = (array) => {
            return array.sort(() => Math.random() - 0.5);
        }

        this.copy = array => [...array];
    }

    const plural = (n, titles) => {
        return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
    }
    
    const rnd = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    return {
        'Table': Table,
        'ArrayTools': ArrayTools,
        'plural': plural,
        'rnd': rnd
    }
}());