// let discount = 20;
// let currency  = 'грн';

// function calcDiscount (n) {
//     let productPrice = +prompt('Введите стоимость товара','');
//     let prodPriceWithDiscpunt = productPrice - (productPrice*discount/100);
//     console.log(' Стоимость товара ' + n +' со скидкой ' + prodPriceWithDiscpunt + ' ' + currency);

// }

// calcDiscount(1)
// calcDiscount(2)
// calcDiscount(3)


// function ask(question,success,error) {
//     if(confirm(question)) {
//         success()
//     } else {
//         error()
//     }
// }


// function showSuccess() {
//     alert("Ура, ви згідні!!!")
// }

// function showCancel() {
//     alert("Жаль, ви не згідні!!!")
// }

// ask("Ви згідній з обробкою даних?",showSuccess,showCancel)



// let discount = 20;
// let currency  = 'грн';
// let n = 1;

// function calcDiscount () {
//     let productPrice = +prompt('Введите стоимость товара','');
//     let prodPriceWithDiscpunt = productPrice - (productPrice*discount/100);
//     console.log(' Стоимость товара ' + n++ +' со скидкой ' + prodPriceWithDiscpunt + ' ' + currency);

// }

// calcDiscount(1)
// calcDiscount(2)
// calcDiscount(3)

let user = {
    name: 'Nikita',
    age: 32,
    fullName: 'Ivanchykov'
}

console.log (user);
console.log (user.age);   //dotted notation
console.log (user ['age']);
user.city = 'Kiyv';

for (let key in user) {
    console.log (key + ':' + user[key])
}