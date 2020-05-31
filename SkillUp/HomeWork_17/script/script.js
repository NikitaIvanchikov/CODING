let purchase = {};
let purchaseNumber = +prompt('Введите количество покупок','');

for (i=1; i <= purchaseNumber; i++) {
  let purchaseName;
  do {
    purchaseName = prompt ('Введите название покупки','');
  } while (purchaseName == 0);
  let purchaseCoust
  do {
    purchaseCoust = prompt ('Введите стоимость покупки', '');
  } while (purchaseCoust == 0);
  purchase[purchaseName] = purchaseCoust;
  
}

console.log (purchase);

for (let key in purchase) {
  console.log (key + ' : ' + purchase[key])
};

function purchaseSum (purchase) {
  let sum = 0;
  for (let purch of Object.values(purchase)) {
    sum += +purch;
    console.log (sum);
  }
  return sum;
};

alert ('За прошлый месяц вы потратили ' + purchaseSum(purchase) + ' грн.')