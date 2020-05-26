function foo (a,b,bool) {
  if ((bool == true) && (a > b)) {
    return a;
} else if ((bool == true) && (a < b)) {
  return b
} else if ((bool == false) && (a > b)) {
  return b
} else if ((bool == false) && (a < b)) {
  return a
} else {return 'ERROR'}
}


alert(foo (77,6,true));