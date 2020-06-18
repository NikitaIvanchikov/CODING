//noprotect
let arrString = prompt('ВВЕДИТЕ числовой массив через запятую','');

let arrNumber = arrString.split(',');
console.log (arrNumber);




function arrSum(arrNumber){                                 //Задача 2
  let sum = 0;
    for ( let i = 0; i < arrNumber.length; i++) {
      sum += (+arrNumber[i]);
      
    }
  return sum;
}

console.log(arrSum(arrNumber));

arrNumber.sort();
console.log(arrNumber);                                // Задача 3 (на данны   момент работает только с цифрами)

/// собственно после сортирования массива 0-й елемент будет самый маленький, последний - самый большой // Задача 4

console.log (arrNumber.pop());                         // Задача 1





