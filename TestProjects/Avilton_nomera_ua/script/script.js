let orderPoupup = document.getElementById('orderPoupUp'),
    orderToggle = document.getElementById('headerOrderButton'),
    poupupClose = document.getElementsByClassName('close');


    orderToggle.onclick = function() {
      orderPoupup.style.display = "flex";
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

    let orderToggleSeviceItem = document.getElementsByClassName('service-item__order');
console.log(orderToggleSeviceItem);
    for (let i = 0; i < orderToggleSeviceItem.length; i++) {
      orderToggleSeviceItem[i].onclick = function () {
        orderPoupup.style.display = "flex";
      }
    }