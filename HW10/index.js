'use strict';

let Course  = function(title = 'Без названия', teacher) {
    this.title   = title;
    this.teacher = teacher;
    this.toString = () => {
        //return `Курс: ${this.title}, ${(!this.teacher instanceof Teacher)? '' : this.teacher.toString() }`; 
        return `Курс: ${this.title}`; 
    }
};

let Teacher = function(place = 'учебное заведение не указано', name = 'имя не указано', age = 'не указан', sex = 'не указан', interests = []) {
    Person.call(this, name, age, sex, interests);

    this.group;
    this.place = place;
    this.toString = () => {
        let template = `Преподаватель: ${this.name}. 
            Возраст: ${this.age} ${this._plural(this.valueOf(), ['лет', 'год', 'лет'])}. 
            Пол: ${this.sex}. 
            Интересы: ${this.interests.toString() || '- '}. 
            Обучает в ${this.place}.`;
        return template
            .replace(/[\r\n\t\f\v]/gm, "")
            .replace(/[\\s ]{2,}/gm, '')
    }
}

let Group = function(name = 'Не указана.', students = []) {
    let _students = [];

    for(let i = 0; i < students.length; i++)
        this.addStudent(students[i]);

    this.name = name;
    this.addStudent = (student) => {
        if(!student instanceof Student) {
            return console.log('Это не студент!');
        }

        let index = _students.indexOf(student);
        if(index !== -1) {
            return console.log('Этот студент уже в группе!')
        }

        _students.push(student);
    }

    this.removeStudent = (student) => {
        if(!student instanceof Student) {
            return console.log('Это не студент!');
        }

        let index = _students.indexOf(student);
        if(index === -1) {
            return console.log('Этот студент не входит в группу!')
        }

        _students.splice(index, 1);
    }

    this.students = () => [..._students]

    this.toString = () => {
        return this.name;
    }

    this.valueOf = () => {
        return _students.length || 0;
    }
};

let Person = function(name = 'Имя не указано', age = 'не указан', sex = 'не указан', interests = []) {
    this.name      = name;
    this.age       = age;
    this.sex       = sex;
    this.interests = [...interests];
    
    this._plural = (n, titles) => {
        return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
    }

    this.toString = () => {
        let template = `Человек: ${this.name}. 
            Возраст: ${this.age} ${this._plural(this.valueOf(), ['лет', 'год', 'лет'])}. 
            Пол: ${this.sex}. 
            Интересы: ${this.interests.toString() || '- '}`;
        return template
            .replace(/[\r\n\t\f\v]/gm, "")
            .replace(/[\\s ]{2,}/gm, '')
    }

    this.valueOf = () => {
        return parseInt(this.age) || 0;
    }
}

let Student = function(place = 'учебное заведение не указано', name = 'имя не указано', age = 'не указан', sex = 'не указан', interests = []) {
    Person.call(this, name, age, sex, interests);

    this.place = place;

    this.toString = () => {
        let template = `Студент: ${this.name}. 
            Возраст: ${this.age} ${this._plural(this.valueOf(), ['лет', 'год', 'лет'])}. 
            Пол: ${this.sex}. 
            Интересы: ${this.interests.toString() || '- '}. 
            Обучается в ${this.place}.`
        return template
            .replace(/[\r\n\t\f\v]/gm, "")
            .replace(/[\\s ]{2,}/gm, '')
    }
}

function task1() {
    let Product = function(name = '', price = 0) {
        this.name = name;
        this.price = price;
    }

    let ShoppingCart = function() {
        let products = []
          , qty      = 0
          , sum      = 0
          , cartLine = { product: undefined, qty: 0 };

        this.qty = () => qty;
        this.sum = () => sum;

        this.print = () => {
            if(products.length === 0)
                return console.log('Карзина пуста.');

            for(let i = 0; i < products.length; i++)
                console.log('%s | %d | %d | %d', 
                    products[i].product.name, 
                    products[i].qty, 
                    products[i].product.price,
                    products[i].qty * products[i].product.price);
            console.log('Количество товаров: %d на сумму %d', this.qty(), this.sum());
        }

        this.add = (product, quantity) => {
            let line = Object.create(cartLine);

            if(product instanceof Product) {
                line.product = product;
                line.qty     = quantity;
                qty         += quantity;
                sum         += quantity * product.price;
                products.push(line);
            }
        }

        this.clear = () => {
            products = [];
        }
    }

    let p1 = new Product('Кран-водонагреватель проточный Unipump BEF-001-02', 2139)
      , p2 = new Product('Бортики для грядок Delta-Park GL-100, 100 см х 19 см', 889)
      , sc = new ShoppingCart();

    sc.add(p1, 1);
    sc.add(p2, 4);

    sc.print();
    console.log('Очистка карзины...');
    sc.clear();
    sc.print();
}

function task2() {
    let p1 = new Person('Иван', 25, 'м', ['Музыка', 'Программирование']);
    console.log(p1.toString());
    console.log((p1 > 25)? 'Больше 25 лет.' : 'Меньше или равно 25 лет.');

    let s1 = new Student('ITMO', 'Андрей', 19, 'м', ['Музыка', 'Программирование']);
    console.log(s1.toString());
    console.log((s1 > 25)? 'Больше 25 лет.' : 'Меньше или равно 25 лет.');
}

function task3() {
    let User = function(name = 'Имя не указано') {
        this.name = name;
        this._plural = (n, titles) => {
            return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
        }
        this.toString = () => {
            return `Пользователь: ${this.name}`;
        }
    }

    User.anonymous = function() {
        return new User('anonymous');
    }

    User.withAge = function(name, age) {
        let user = new User(name);
        user.age = age;
        user.toString = function() {
            return `Пользователь: ${this.name}. Возраст: ${this.age} ${this._plural(this.age || 0, ['лет', 'год', 'лет'])}.`;
        }
        return user;
    }

    let u1 = new User();
    console.log('Обычный пользователь с не заданным именем: %o', u1.toString());
    let u2 = User.anonymous();
    console.log('Анонимный пользователь: %o', u2.toString());
    let u3 = User.withAge('Максим', 40);
    console.log('Пользователь с добавленным свойством age: %o', u3.toString());
}

function task4() {
    /*
    1.
    Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number().
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
    */

    /*
    2.
    Объект ArrayBuffer используется для работы с бинарными данными. Он представляет собой ссылку на поток "сырых" двоичных данных, 
    однако работать с ними напрямую возможности не дает. Вместо этого, вы можете создать типизированный массив или объект DataView, 
    который можно использовать для чтения и записи данных в ArrayBuffer. 
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
    */

    /*
    3.
    Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) и преобразования значений в JSON.
    Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух методов он не содержит никакой интересной функциональности.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON
    */

    /*
    4.
    Объект Promise (обещание) используется для отложенных и асинхронных вычислений. 
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
    */

    /*
    5.
    Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. 
    Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
    */

    /*
    6.
    Объект WeakMap — коллекция пар ключ-значение. В качестве ключей могут быть использованы только объекты, а значения могут быть произвольных типов.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
    */

    /*
    7.
    Объект WeakSet - коллекция, элементами которой могут быть только объекты. Ссылки на эти объекты в WeakSet являются слабыми. 
    Каждый объект может быть добавлен в WeakSet только один раз.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
    */

    /*
    8.
    Объект WeakSet - коллекция, элементами которой могут быть только объекты. Ссылки на эти объекты в WeakSet являются слабыми. 
    Каждый объект может быть добавлен в WeakSet только один раз.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
    */

    /*
    9.
    Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
    */

    /*
    10.
    Объект Atomics предоставляет атомарные операции как статические методы. Используется вместе с объектом SharedArrayBuffer.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Atomics
    */
    console.log('См. комментарии в функции task4()...');
}

function task5() {
    let course = new Course('2019_05_JS');
    let teacher = new Teacher('ITMO', 'Александр Разыграев');

    course.teacher = teacher;
    
    let group = new Group('NodeJS апрель - июль');
    group.addStudent(new Student('ITMO', 'Деонизия Адулайевна'));
    group.addStudent(new Student('ITMO', 'Егор Николаевич'));
    group.addStudent(new Student('ITMO', 'Максим Юрьевич'));
    group.addStudent(new Student('ITMO', 'Алексей Дмитриевич'));
    group.addStudent(new Student('ITMO', 'Ксения Сергеевна'));
    group.addStudent(new Student('ITMO', 'Святослав Вячеславович'));
    group.addStudent(new Student('ITMO', 'Екатерина Александровна'));
    group.addStudent(new Student('ITMO', 'Дмитрий Владимирович Малегов'));
    group.addStudent(new Student('ITMO', 'Алексей Валерьевич'));
    group.addStudent(new Student('ITMO', 'Кирилл Михайлович'));
    group.addStudent(new Student('ITMO', 'Роман Владимирович'));
    group.addStudent(new Student('ITMO', 'Ксения Алексеевна'));
    group.addStudent(new Student('ITMO', 'Евгений Александрович'));
    group.addStudent(new Student('ITMO', 'Виталий Владимирович'));
    group.addStudent(new Student('ITMO', 'Кирилл Станиславович'));
    group.addStudent(new Student('ITMO', 'Никита Владимирович'));
    group.addStudent(new Student('ITMO', 'Дмитрий Владимирович Юрасов'));
    teacher.group = group;

    console.log(course.toString());

    console.log('Группа: %s, количество студентов: %d, состав группы:', teacher.group.toString(), +teacher.group);
    let students = group.students();
    for(let i = 0; i < students.length; i++) {
        console.log(students[i].toString());
    }
    console.log(teacher.toString());


}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1:'), task1();
    console.log('Результат задачи №2:'), task2();
    console.log('Результат задачи №3:'), task3();
    console.log('Результат задачи №4:'), task4();
    console.log('Результат задачи №5:'), task5();
}, false);