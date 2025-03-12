// JavaScript Strings
const fullName = 'Nargis diya';

const country = "Bangladesh";


const sen = "I'm form bangladesh"
//const sen2 = 'I'm form bangaldesh'
const sen2 = 'I\'m form bangladesh'
console.log(sen2);

const quatation = 'Bill Gates says "some text"'
const quatation2 ="Bill Gates says \"some text\""
const quatation3 ="Bill Gates says \n \"some text\""
//document.getElementById('title').innerText = quatation3
console.log(quatation2);

let info = "Nargis " + "diya";
let info2 = fullName + " " + country;
// let info3 ="I am " + fullName + " I am form " + country;
let info3 = "I am " + fullName + " \n I am form " + country;

let info4 = `I am ${fullName} I am form ${country} ${5*5}`;
let info5 = `I am ${fullName}
 I am form ${country} 
 ${5*5}`;

const fullName2 = new String('Nargis')
const fullName3 = 'Nargis'





//console.log(fullName2 [1]);
//console.log(info5.length);
//Specific word
// console.log(info5.charAt(9));
// console.log(info5.indexOf('B'));
// console.log(info5.toUpperCase());
// console.log(info5.toLowerCase());
document.getElementById('title').innerText = info5;



const student = "Nargis diya";

console.log(student.slice(10, 1));
console.log(student.substring(10, 1));


const someText = '                diya            '
console.log(someText.trimEnd());

const url = "https//diya.com/new%20Blog"
console.log(url.replace("%20", "-"));

console.log(info5.split(" "));