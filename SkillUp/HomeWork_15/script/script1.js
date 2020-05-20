function discountCalc (disccount) {
  
  let currency = "грн";
  productPrice = +prompt('Введите стои мость товара','');
  let prodPriceWithDiscount = productPrice - (productPrice*disccount/100);
  return prodPriceWithDiscount;
}

console.log(discountCalc(20));
console.log(discountCalc(10));
console.log(discountCalc(30));
console.log(discountCalc(20));