let name = prompt("Enter your name",""),
    deposit = prompt("Enter deposit amount",""),
    term = prompt("Enter deposit term (month)",""),
    income;
    income = deposit*.20/12*term;
alert("Dear " + name + " you make deposit at 20% per year,for the period of " + term + " month. Your income for this period " + income.toFixed (2));