function findBigger () {
  let a = +prompt('Enter a = ','');
  let b = +prompt('Enter b = ','');

  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else if (a == b) { 
    return 'a = b'
  } else {
    return 'Error'
  }
  
}

console.log (findBigger ());