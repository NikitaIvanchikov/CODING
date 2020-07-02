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


//add to cart
let productsCountEl = document.getElementById('products-count'),
    addToCartButtons = document.getElementsByClassName('add-to-cart');

for (let i =0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount +1;
    console.log (prevProductsCount)
  })
}


//change like state

let likeButtons = document.querySelectorAll('.like');
console.log(likeButtons);


// for ( let i=0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener('click', function() {
//     if(this.classList.contains("liked")) {
//       this.classList.remove('liked')
//     }else {
//       this.classList.add("liked")
//     }

//   })
// }

for ( let i=0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function() {
    this.classList.toggle("liked");
  });
}


//Modal window
let moreDetailsButton = document.querySelectorAll('.more-details-button'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.btn-close');
function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
}
moreDetailsButton.forEach(function(btn){
  btn.addEventListener('click', openModal)
})

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
}


closeBtn.addEventListener('click',closeModal);


modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal()
  }
});

function openModalByScroll() {
  if (window.pageYOffset >= document.documentElement.scrollHeight / 2) {
    openModal();
    window.removeEventListener('scroll', openModalByScroll)
  }
  
}

// window.addEventListener ('scroll', function() {
//   let scrollPosition = +pageYOffset;
//   if ( scrollPosition > document.documentElement.scrollHeight / 2) {
//     openModal()
//   }
// })
window.addEventListener ('scroll', openModalByScroll);



 /// Slider (SlikSlider)

 $('.slider-block').slick({
   dots:true,
   autoplay:true,
   autoplay:3000
 })

