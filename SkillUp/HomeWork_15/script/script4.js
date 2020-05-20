let name = prompt("Enter your name",""),
    deposit = prompt("Enter deposit amount",""),
    term = prompt("Enter deposit term (month)",""),
    income;

if (term < 6) {
  income = deposit*.15/12*term;
  alert("Dear " + name + " you make deposit at 15% per year,for the period of " + term + " month. Your income for this period " + income.toFixed (2));};
if ((term > 6) && (term < 9)) {
  income = deposit*.16/12*term;
  alert("Dear " + name + " you make deposit at 16% per year,for the period of " + term + " month. Your income for this period " + income.toFixed (2));};
if (term > 9) {
  income = deposit*.17/12*term;
  alert("Dear " + name + " you make deposit at 17% per year,for the period of " + term + " month. Your income for this period " + income.toFixed (2));};