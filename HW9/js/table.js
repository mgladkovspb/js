'use strict';

/*
1. Массив должен быть из одинаковых объектов
2. Поля объекта будут колонками таблицы
*/

let myTable = (function() {
    let table = function(placeholder, data) {
        this._table       = undefined;
        this._placeholder = placeholder;
        this._data        = data || [];
        
        this.update = () => {
            let thead, tbody, tr, td;

            if(this._table === undefined && this._data.length > 0) {
                this._table = document.createElement('table');
                this._table.classList.value = 'books-table';

                thead = document.createElement('thead');
                tr    = document.createElement('tr');

                for(let prop in this._data[0]) {
                    td = document.createElement('td');
                    td.innerText = prop;
                    tr.appendChild(td);
                }

                thead.appendChild(tr);
                this._table.appendChild();
            }

            tbody = this._table.getElementsByTagName('tbody')[0];
            if(tbody === undefined) {
                tbody = document.createElement('tbody');
            }

            // строки
            for(let i = 1; i < books.length; i++) {
                let book = books[i];

                tr = document.createElement('tr');
                for(let prop in book) {
                    td = document.createElement('td');
                    td.innerText = book[prop];
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            }

            this._table.appendChild(tbody);
            this._placeholder.appendChild(this._table);
        }

        }
    }



    return {
    cloneFirstLevel: function(obj){
    let newObj = {};
    for(var key in user1)
    {
    newObj[key] = obj[key];
    }
    return newObj;
    }
    };
}());