//String Function
let se="Msd is the best captain & finisher in the world";
// search in index
let postion=se.indexOf("is");
console.log(postion);
// Last Index
let p2=se.lastIndexOf('best');
console.log(p2);
// Substring from the string
let p3=se.slice(4,10);
console.log(p3);
// To replace one word to another
let p4=se.replace('best','greatest')
console.log(p4);
// To make Uppercase
console.log(se.toUpperCase());
//To make Lower Case
console.log(se.toLowerCase());
// To concat
let p5=se.concat('\nBaap baap hota hee.....')
console.log(p5);
//To delete white spaces
let strim="   kohli the run machine  "
console.log(strim.trim)