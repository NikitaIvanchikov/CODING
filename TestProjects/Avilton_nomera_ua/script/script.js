let orderPoupup = document.getElementById('orderPoupUp'),
    orderToggle = document.getElementById('headerOrderButton'),
    poupupClose = document.getElementsByClassName('close');

console.log (poupupClose);

    orderToggle.onclick = function() {
      orderPoupup.style.display = "block";
    }



    for (let i = 0; i < poupupClose.length; i++) {
    poupupClose[i].onclick = function() {
      orderPoupup.style.display = "none";
      }
    }
    window.onclick = function (e) {
      
      if (e.target === orderPoupup) {
        orderPoupup.style.display = "none";
      }
    }