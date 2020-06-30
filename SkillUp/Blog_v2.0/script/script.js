
//poupup
let modalBtn = document.querySelectorAll('#open__modal'),
    modal = document.querySelector('.poupup'),
    closeBtn = document.querySelector('.close');

console.log(modal);


function openModal (modalID) {
  modalID.classList.add('show');
  modalID.classList.remove('hide');
}

modalBtn.forEach(function(btn) {
  
  btn.addEventListener('click', function(e) {
    if (e.target == btn) {
      console.log(e.target)
      openModal (modal);
    }
  })
})

function closeModal (modalID) {
  modalID.classList.add('hide');
  modalID.classList.remove('show');
}
closeBtn.addEventListener('click', function(e) {
  if (e.target == closeBtn) {
    closeModal(modal);
    
  }
});

modal.addEventListener('click', function(e) {
  if (e.target == modal) {
    closeModal(modal);
  }
})

// scroll


let modalSubscribe = document.querySelector('.subscribe');

window.addEventListener('scroll', function () {
  let scrollPosition = +pageYOffset,
  poupupInitiationPosition = +Math.round(document.documentElement.scrollHeight / 2),
  divergens = scrollPosition - poupupInitiationPosition;
  document.getElementById('scrollPosition').innerHTML = 'scroll pos ' + scrollPosition;
  document.getElementById('initPos').innerHTML = 'poup init ' + poupupInitiationPosition;
  if ( scrollPosition === poupupInitiationPosition) {
    openModal(modalSubscribe);
  }
  if ((divergens > -5) && (divergens < 5)) {
    openModal(modalSubscribe);
  }
});

console.log('modalSubscribe =' + modalSubscribe);

closeBtn.addEventListener('click', function(e) {
  if (e.target == closeBtn) {
    for( let i=0; i < modalSubscribe.length; i++) {
    closeModal(modalSubscribe);
    }
  }
});

modal.addEventListener('click', function(e) {
  if (e.target == modalSubscribe) {
    closeModal(modalSubscribe);
  }
})