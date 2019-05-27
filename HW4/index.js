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
    let pass = ''
      , test1 = false
      , test2 = false
      , test3 = false;

    pass = prompt('Введите пароль:\n\
    - длинна от 9 символов\n\
    - содержит обязательно английские буквы верхнего и нижнего регистра\n\
    - содержит более двух цифр\n\
    - содержит обязательно один из неалфавитных символов (например, !, $, #, %)') || '';

    test1 = /^(?=.*[a-z])(?=.*[A-Z])[\w!$#%]{10,}$/g.test(pass);
    test2 = /[!$#%]{1,}/g.test(pass);
    test3 = pass.match(/\d/g) || [];

    return (test1 && test2 && test3.length > 2)? 'Пароль прошел проверку' : 'Пароль не прошел проверку';
}

/*
это вариант автокомплита. не совсем то, что нужно
*/

// function task4() {
//     let input = document.getElementById('myInput')

//     input.addEventListener('keyup', (e) => {
//         let userInput   = e.target.value
//           , inputLength = userInput.length
//           , typo        = false
//           , dropdown    = document.getElementById('myDropdown');

//         if(e.target.value.length < 2) {
//             dropdown.classList.remove('show');
//             return;
//         }

//         let match = document.dictionary.filter(
//             value => RegExp('^' + userInput, 'i').test(value)
//         ) || [];

//         if(match.length === 0) {
//             match = document.dictionary.filter(
//                 value => RegExp('^' + userInput.substring(0, inputLength - 1) + '\\S', 'i').test(value)
//             ) || [];
//             typo  = true;
//         }

//         dropdown.innerHTML = '';
//         match.forEach(element => {
//             let template = '<span class="ok">'; 
//             if(!typo) {
//                 template += element.substring(0, inputLength) + '</span>';
//             } else {
//                 template += element.substring(0, inputLength - 1) + '</span>';
//                 template += '<span class="typo">' + element.substring(inputLength - 1, inputLength) + '</span>';
//             }
//             template += element.substring(inputLength);
//             dropdown.innerHTML += `<a href="#">${template}</a>`;
//         });

//         dropdown.childNodes.forEach(node => {
//             node.addEventListener('click', (e) => {
//                 input.value = e.target.innerText;
//                 dropdown.innerHTML = '';
//                 dropdown.classList.remove('show');
//             });
//         });
//         dropdown.classList.add('show');
//     });
// }

/*
почти строго по задаче
*/

function task4() {
    let input = document.getElementById('myInput');
    input.addEventListener('change', (e) => {
        let userInput = e.target.value
          , dropdown  = document.getElementById('myDropdown');

        if(userInput.length === 0)
            return;

        const filterFn = (value) => {
            if(value.length !== userInput.length)
                return false;

            let reg = new RegExp('(?=[' + value.replace('-', '\\-') + '])\\S', 'ig')
              , res = userInput.match(reg);

            if(res === null)
                return false;

            // проверка по % совпавших букв
            if(res.length * 100 / value.length < 80)
                return false;

            // проверка по % совпадения букв на местах
            let matches = 0;
            for(let i = 0, len = value.length; i < len; i++) {
                if(value[i].toLowerCase() === userInput[i].toLowerCase())
                    matches++;
            }

            if(matches * 100 / value.length < 65)
                return false;

            return true;
        }

        let match = document.dictionary.filter(filterFn) || [];
        if(match.length > 0) {
            dropdown.innerHTML = '<p>Возможно вы имели ввиду...</p>';
            match.forEach((element) => {
                let template = '';
                for(let i = 0, len = element.length; i < len; i++) {
                    template += `<span class="${ (element[i].toLowerCase() === userInput[i].toLowerCase())? 'ok' : 'typo' }">${ element[i] }</span>`;
                }
                dropdown.innerHTML += `<a href="#">${ template }</a>`;
            });

            dropdown.childNodes.forEach(node => {
                if(node.tagName.toLowerCase() !== 'a')
                    return;
    
                node.addEventListener('click', (e) => {
                    input.value = e.currentTarget.text;
                    dropdown.innerHTML = '';
                    dropdown.classList.remove('show');
                }, { capture: true, once: true });
            });
            dropdown.classList.add('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1: %s', task1());
    console.log('Результат задачи №2: %s', task2());
    console.log('Результат задачи №2: %s', task3());
    task4();
}, false);