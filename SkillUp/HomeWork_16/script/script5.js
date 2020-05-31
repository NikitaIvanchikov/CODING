
function calcAge(age) {
  return 2020 - age
}

console.log(calcAge(1988))

function yearsUntilRetirement (year, userName) {
  let age = calcAge(year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${userName} выйдет на пенсию через ${retirement} лет`);
  }else (`${userName} уже на пенсии`);
}

yearsUntilRetirement(1980,'vano')