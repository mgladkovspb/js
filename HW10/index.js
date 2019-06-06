'use strict';

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
    
}

function task3() {
    
}

function task4() {
    
}

function task5() {
    
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Результат задачи №1:'), task1();
    console.log('Результат задачи №2:'), task2();
    console.log('Результат задачи №3:'), task3();
    console.log('Результат задачи №4:'), task4();
    console.log('Результат задачи №5:'), task5();
}, false);