let number = prompt ("Введите число 0-59", "");
let answer = (number < 15 ) ? "1-я четверть" :
             (number < 30 ) ? "2-я четверть" :
             (number < 45 ) ? "3-я четверть" :
             (number < 60 ) ? "4-я четверть" :
             "вне диапазона";
alert (answer);