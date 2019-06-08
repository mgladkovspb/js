'use strict';

let Product = function(name = '', price = 0) {
    this.name = name;
    this.price = price;
}

let ShoppingCart = function() {
    this.products = [];
    this.qty = 0;
    this.sum = 0;
}

ShoppingCart.prototype.print = function() {
    if(this.products.length === 0)
        return console.log('Карзина пуста.');

    for(let i = 0; i < this.products.length; i++)
        console.log('%s | %d | %d | %d', 
            this.products[i].product.name, 
            this.products[i].qty, 
            this.products[i].product.price,
            this.products[i].qty * this.products[i].product.price);
    console.log('Количество товаров: %d на сумму %d', this.qty, this.sum);
}

ShoppingCart.prototype.add = function(product, quantity) {
    let line = { product: undefined, qty: 0 };

    if(product instanceof Product) {
        line.product = product;
        line.qty     = quantity;
        this.qty    += quantity;
        this.sum    += quantity * product.price;
        this.products.push(line);
    }
}

ShoppingCart.prototype.clear = function() {
    this.products = [];
}

let Person = function(name = 'Имя не указано', age = 'не указан', sex = 'не указан', interests = []) {
    this.name      = name;
    this.age       = age;
    this.sex       = sex;
    this.interests = [...interests];
}

Person.prototype._plural = function(n, titles) {
    return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n %10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
}

Person.prototype.toString = function() {
    let template = `Человек: ${this.name}. 
        Возраст: ${this.age} ${this._plural(this.valueOf(), ['лет', 'год', 'лет'])}. 
        Пол: ${this.sex}. 
        Интересы: ${this.interests.toString() || '- '}`;
    return template
        .replace(/[\r\n\t\f\v]/gm, "")
        .replace(/[\\s ]{2,}/gm, '')
}

Person.prototype.valueOf = function() {
    return parseInt(this.age) || 0;
}

let Student = function(place = 'учебное заведение не указано', name = 'имя не указано', age = 'не указан', sex = 'не указан', interests = []) {
    Person.call(this, name, age, sex, interests);
    this.place = place;
}

Student.prototype.toString = function() {
    let template = `Студент: ${this.name}. 
        Возраст: ${this.age} ${this._plural(this.valueOf(), ['лет', 'год', 'лет'])}. 
        Пол: ${this.sex}. 
        Интересы: ${this.interests.toString() || '- '}. 
        Обучается в ${this.place}.`
    return template
        .replace(/[\r\n\t\f\v]/gm, "")
        .replace(/[\\s ]{2,}/gm, '')
}

Student.prototype.__proto__ = Person.prototype;


function task1() {
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
    console.log('Велосипед MVVM');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1:'), task1();
    console.log('Результат задачи №2:'), task2();
}, false);