let clicks = 0;
// let addCartButton = document.getElementsByClassName('add-to-cart');


function cartCount () {
  clicks+=1;
  document.getElementById("clickAmoutn").innerHTML = clicks;
  clickAmoutn.style.cssText=`display:block;`;
  
  // counter.innerHTML = clicks;
  console.log(clicks);
}
// addCartButton.addEventListener("click" , cartCount());

// console.log (document.getElementsByClassName('add-to-cart'));
