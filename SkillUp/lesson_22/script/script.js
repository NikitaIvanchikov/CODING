let div = document.querySelectorAll("div");
console.log(div);

// for (let i = 0; i < div.length ;i++) {
// div[i].addEventListener("click", function() {
//   console.log(i);
//     div[i].style.backgroundColor = "blue"
// })
// }


// for (let i = 0; i < div.length ;i++) {
//   div[i].addEventListener("click", function(e) {
//     let target = e.target;
//     console.log(target);
//       target.style.backgroundColor = "blue"
//   })
//   }

for (let i = 0; i < div.length ;i++) {
  div[i].addEventListener("click", function(e) {
    
    console.log(this);
      this.style.backgroundColor = "blue"
  })
  }

  let imgEl = document.querySelector("img");
  console.log (ingEl);
  function changeImg() {
    let imgSrc = imgEl.getAttribute('src');
    if ( imgSrc === "1.png" ) {
      
    }
  }