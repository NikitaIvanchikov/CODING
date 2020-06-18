var clicks = 0;
function cartCount () {
  clicks+=1;
  document.getElementById("clickAmoutn").textContent = clicks;
  clickAmoutn.style.cssText=`display:block;`
  // counter.innerHTML = clicks;
  console.log(clicks);
}