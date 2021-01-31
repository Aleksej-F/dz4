'use strict';

function getList(list){
    switch (list) {
        case 1:
            function fg (i){
                let hit = ['сотни', 'десятки', 'единицы'];
                let num = {};
                if (Number(i) > 999 ) {
                    console.log('число превышает 999');
                    return num;
                }
                let x = (typeof i !=='string') ? String(i) : i;
                console.log(i);
                x=('000' + x).slice(x.length, x.length + 3);
               
                for (let j = x.length-1; j >= 0; --j ) {
                    num[hit[j]] = x.slice(j, j + 1);
                }
                return num;
            }

            while (true) {
                let vir = +prompt('Введите число от 0 до 999');
                if ( vir >0) {
                    console.log( fg(vir));
                    break;
                }
            }
            
            
            
        break;
        case 2:
            class Basket {  // корзина
                constructor() {
                    this.segments = [];
                }
                completion() {  // наполнение корзины
                    let a = Math.floor(Math.random() * (6) + 1); // колличество товаров в корзине
                    let title = ['кросовки', 'тапки', 'футболка', 'джинсы'];
                    for (let i = 0; i < a; i++) {
                        let b = Math.floor(Math.random() * (3));        // выбор товара
                        let c = Math.floor(Math.random() * (10) + 1);   // штук
                        let d = Math.floor(Math.random() * (300) + 50); // цена
                        this.segments.push(new Product(title[b], c, d));
                    }
                }
                countBasketPrice(){ // подсчет стоимости товара в корзине
                    let total = 0;
                    for (let i = 0; i<this.segments.length; i++ ){
                        total += this.segments[i].quantity * this.segments[i].price;
                    }
                    return total;
                }
            } 
            
            class Product {  // продукт
                constructor(title, quantity, price) {
                    this.title = title;
                    this.quantity = quantity;
                    this.price = price;
                }
            }
            
            let basket = new Basket();

            basket.completion();
            let total = basket.countBasketPrice();
            console.log(basket);
            console.log(total);
            

            alert('Общая сумма к оплате  ' + total);

        break;
    }
}