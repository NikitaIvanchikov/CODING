

let userLink = prompt('Введите ссылку');
function chek(userLink){
if (userLink.startsWith('https')) {
  alert('Ура, ваша связь защищена')
}else {
  alert('Могут возникнуть проблеммы с безопасностью')
  
}
}

chek(userLink);