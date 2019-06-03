'use strict';

function task1() {
    let clickableDivContainer = document.querySelector('.clickable-div-container');
    clickableDivContainer.addEventListener('click', (e) => {
        if(e.target.tagName !== 'DIV' || Object.is(e.target, clickableDivContainer)) {
            return;
        }

        e.target.classList.toggle('green');
    });
}

function task2() {
    let counter = document.querySelector('.btn.btn-counter');
    counter.addEventListener('click', (e) => {
        e.target.innerText = `Текущее состояние счетчика (${ ++e.target.dataset.counter })`;
    });
}

function task3() {
    let btnAddComment     = document.querySelector('#addComment')
      , btnSaveComment    = document.querySelector('#saveComment')
      , commentEditor     = document.querySelector('.commet-ditor')
      , commentsContainer = document.querySelector('.container.comments-container');

    btnAddComment.addEventListener('click', (e) => {
        commentEditor.classList.toggle('hidden');
        btnAddComment.disabled = true;
    });

    btnSaveComment.addEventListener('click', (e) => {
        let text  = document.getElementById('commentText')
          , model = { user: 'Muk', date: new Date(), avatar: 'i1.jpg', text: text.value }
          , table = document.createElement('table'), img, td, tr;

        table.classList.value = 'commet-table';

        img = document.createElement('img');
        img.src = 'img/' + model.avatar;
        img.classList.value = 'avatar';

        tr = document.createElement('tr');
        td = document.createElement('td');
        td.rowSpan = 2;
        td.width = 100;
        td.appendChild(img);
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = model.user;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = model.date.toLocaleString('ru-RU').replace(',', '');
        tr.appendChild(td);

        table.appendChild(tr);

        tr = document.createElement('tr');
        td = document.createElement('td');
        td.colSpan = 2;
        td.innerText = model.text;
        tr.appendChild(td);

        table.appendChild(tr);
        commentsContainer.appendChild(table);

        commentEditor.classList.toggle('hidden');
        btnAddComment.disabled = false;
        text.value = '';
    });
}

function task4() {
    let books = [
        ['Арт.', 'Год', 'Автор', 'Название', 'Описание'],
        { art: '0001', year: 1952, author: 'Сэм Мартинес', name: 'Ради всего святого', desc: 'Кларисса Крамм преставилась в селения небесные ввиду отравления несвежим мясом. Всю жизнь она прожила праведно, а потому без проблем была принята в сонм блаженных и небесный хор. Но праведница оказалась недовольна укладом жизни в Царствии Небесном и давай строчить докладные по любому поводу!' },
        { art: '0002', year: 1959, author: 'Роберт Шекли', name: 'Право на смерть', desc: 'В недалёком будущем идёт кровопролитная война между США, Китаем и Россией. Уровень медицины поднялся уже настолько, что стало возможным воскрешать солдат неограниченное количество раз. Увы, не каждый солдат рад этому...' },
        { art: '0003', year: 1951, author: 'Клиффорд Саймак', name: 'Ветер чужого мира', desc: 'Аборигены предупредили людей, разведчиков новой планеты, о том, что те никогда уже не смогут отсюда улететь, если не сделают это сейчас. Причину не сказали. Земляне плюнули на предупреждение (ещё бы, ведь на их стороне стояла самая современная техника) и принялись покорять планету. Экскаваторы, огнемётчики, почворазрыхлители и т. д. взялись за дело. Через некоторое время техника стала выходить из строя...' },
        { art: '0004', year: 1969, author: 'Клиффорд Саймак', name: 'Я весь внутри плачу', desc: 'Все, кто хотел, покинули Землю. Ушедшие оставили на Земле старых роботов и людей, которые ни к чему не стремились...' }
    ];

    const fn = (arr) => {
        let booksTableContainer = document.querySelector('.books-table-container')
          , table, tr, td, th;

        table = document.createElement('table');
        table.classList.value = 'books-table';

        // заголовок. Первый элемент массива книг - заголовок таблицы
        tr = document.createElement('tr');
        for(let i = 0; i < books[0].length; i++) {
            th = document.createElement('th');
            th.classList.add('blue');
            th.innerText = books[0][i];
            tr.appendChild(th);
        }
        table.appendChild(tr);

        // строки
        for(let i = 1; i < books.length; i++) {
            let book = books[i];

            tr = document.createElement('tr');
            for(let prop in book) {
                td = document.createElement('td');
                td.innerText = book[prop];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        booksTableContainer.appendChild(table);
    }

    fn(books);
}

function task5() {
    let tabContainer     = document.querySelector('.tab')
      , contentContainer = document.getElementById('content-container');

    function setActiveTab(tab) {
        if(tab === undefined) {
            tab = tabContainer.children[0];
        }

        for(let i = 0; i < tabContainer.children.length; i++) {
            tabContainer.children[i].classList.value = '';
        }

        let content = document.getElementById(tab.dataset.content);
        contentContainer.innerHTML = content.innerHTML;

        tab.classList.add('active');
    }

    tabContainer.addEventListener('click', (e) => {
        if(!e.target.dataset.content) {
            return;
        }

        setActiveTab(e.target);
    });

    setActiveTab();
}

document.addEventListener('DOMContentLoaded', function() {
    task1();
    task2();
    task3();
    task4();
    task5();
}, false);