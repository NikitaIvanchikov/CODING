// let clicks = 0;


// function cartCount () {
//   clicks+=1;
//   document.getElementById("clickAmoutn").innerHTML = clicks;
//   clickAmoutn.style.cssText=`display:block;`;
  
  // counter.innerHTML = clicks;
//   console.log(clicks);
// }
// addCartButton.addEventListener("click" , cartCount());

// console.log (document.getElementsByClassName('add-to-cart'));
// console.log(addCartButton);
// for (let i = 0; i < length.addCartButton; i++) {

// }

let productsCountEl = document.getElementById('products-count'),
    addToCartButtons = document.getElementsByClassName('add-to-cart');

for (let i =0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount +1;
    console.log (prevProductsCount)
  })
}







-
-