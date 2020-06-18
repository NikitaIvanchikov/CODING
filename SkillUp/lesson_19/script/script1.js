let text = 'lorem world lorpgsdfgpokesfpg spgkops';


function changeFirstLetter (text){

let firstLetter = text.charAt(0);
console.log (firstLetter);
let firstLetterUpper = firstLetter.toUpperCase();
console.log (firstLetterUpper);
let textChanged = text.replace(firstLetter,firstLetterUpper);
console.log(textChanged);

}
changeFirstLetter (text)