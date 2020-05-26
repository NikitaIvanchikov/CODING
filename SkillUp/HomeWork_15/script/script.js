
let coust = +prompt('Введите сумму покупок','');
if (coust < 0 ) {
  console.log ('Сделайте покупки');
} else if (coust < 1000) {
  let discount = 3;
  console.log('Ваша скидка - ' + discount + ' %')
  let totalCoust = coust - (coust*discount/100);
  console.log('Сумма к оплате - ' + totalCoust + 'грн.');
} else if (coust < 5000) {
  let discount = 5;
  console.log('Ваша скидка - ' + discount + ' %')
  let totalCoust = coust - (coust*discount/100);
  console.log('Сумма к оплате - ' + totalCoust + 'грн.');
} else if (coust >=5000) {
  let discount = 10;
  console.log('Ваша скидка - ' + discount + ' %')
  let totalCoust = coust - (coust*discount/100);
  console.log('Сумма к оплате - ' + totalCoust + 'грн.');
}