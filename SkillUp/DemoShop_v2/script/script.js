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
// console.log(likeButtons);


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

// products counter

// let deviceCounter = document.getElementsByClassName('device-counter__input');
    

//   for (let i=0; i < deviceCounter.length; i++) {
//     console.log(deviceCounter[i]);

//     let plusCounter = document.getElementsByClassName('device-counter-plus');
//   }








// let productsCountEl = document.getElementById('products-count'),
//     addToCartButtons = document.getElementsByClassName('add-to-cart');

// for (let i =0; i < addToCartButtons.length; i++) {
//   addToCartButtons[i].addEventListener("click", function() {
//     let prevProductsCount = +productsCountEl.textContent;
//     productsCountEl.textContent = prevProductsCount +1;
//     console.log (prevProductsCount)
//   })
// }





//product-quantity

// let decrementBtn = document.querySelectorAll('.decrement-btn'),
//     incrementBtn = document.querySelectorAll('.increment-btn'),
//     productQuantity = document.querySelectorAll('.product-quantity input')[0];


  

//     console.log(decrementBtn);
//     console.log(incrementBtn);
//     console.log(productQuantity.value);
   

    

    
    // toggleButtonState();

    // for (let i = 0; i <productQuantity.length; i++) {
    //   function toggleButtonState (i) {
    //     if (productQuantity.value <= 1)  {
  
    //       decrementBtn[i].disabled = true;
    //       decrementBtn[i].classList.add('disabled');
    //     }else if (productQuantity.value >= 5) {
    //       incrementBtn[i].disabled = true;
    //       incrementBtn.classList[i].add('disabled');
    //     }
    //     else {
    //       decrementBtn[i].disabled = false;
    //       incrementBtn[i].disabled = false;
    //       decrementBtn[i].classList.remove('disabled');
    //       incrementBtn[i].classList.remove('disabled');
    //     }
    //   }





      
    //     console.log(incrementBtn[i])
    //     incrementBtn[i].addEventListener('click', function() {
    //       console.log(incrementBtn[i])
    //       productQuantity[q].value = +productQuantity[q].value + 1;
    //       toggleButtonState(i);
          
    //     })
      
    
    
    //  decrementBtn[d].addEventListener('click', function() {
     
    //     productQuantity[q].value = +productQuantity[q].value - 1;

    //     toggleButtonState(i);
      
       
    //     })
      
    // }







let decrementBtn = document.querySelectorAll('.decrement-btn');
let incrementBtn = document.querySelectorAll('.increment-btn');
let productQuantity = document.querySelectorAll('.product-quantity input');

let currentCount = +productQuantity.value;
let minCount = 1;
let maxCount = 5;
// console.log(decrementBtn);
// function toggleButtonState(count,incrementBtn,decrementBtn) {
        
//         decrementBtn.disabled = count <= minCount;
    
//         incrementBtn.disabled = count >=maxCount;
// }



// for (let i=0; i < incrementBtn.length; i++) {
    
//     incrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount + 1;
//         productQuantity[i].value = nextCount;
//         toggleButtonState(nextCount,incrementBtn[i],decrementBtn[i]);
//     })
// }
// for (let i=0; i < decrementBtn.length; i++) {
//     decrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount - 1;
//         productQuantity[i].value = nextCount;

//         toggleButtonState(nextCount,incrementBtn[i],decrementBtn[i])
//     })
// }

// for (let i=0; i < productQuantity.length; i++) {
//   let currentCount =+productQuantity[i].value;
//   toggleButtonState(currentCount,incrementBtn[i],decrementBtn[i]);
// }



//OOP

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount = 5) {
  
  this.domRefs = {
    incrementButton,
    decrementButton,
    inputField,
  }
  console.log(this);
  this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount;
  }

  this.toggleButtonState();
  this.incremen = function () {
    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount +1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonState(nextCount)
  }
  this.decrement = function () {
    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount -1;
    this.domRefs.inputField.value = nextCount;
    this.toggleButtonState(nextCount)
  }


  this.domRefs.incrementButton.addEventListener('click', this.increment.bind(this));
  this.domRefs.decrementButton.addEventListener('click', this.decrement.bind(this));

}










