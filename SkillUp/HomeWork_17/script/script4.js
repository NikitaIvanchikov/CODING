let today = new Date();
console.log (today);
let currentYear = today.getFullYear();
console.log (currentYear);
let year;

function calcAge () {
  year = +prompt ('Введите год своего рождения','');
  console.log (year);
};

function yearsUntilRetirement (userName) {
  let userAge = currentYear - year;
  if(year > currentYear) {
    console.log (userName + ' ещё не родился')
  }else if (userAge > 122) {
    console.log(userName + ' R.I.P');
  }else if (userAge < 60) {
    console.log (userName + ' вийде на пенсію через ' + (60 - userAge) + ' років.')
  }else if ((userAge >60) && (userAge <= 122)) {
    console.log (userName + ' уже пенсионер')
  }else {
    console.log ('Год указан неверно')
  }
}

calcAge ();
yearsUntilRetirement ('Nikita')