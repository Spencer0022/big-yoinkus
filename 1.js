let reg1 = /testing/gi;
let string1 = "Testing testing can you hear me?";
let result1 = string1.match(reg1);
console.log(result1);

let reg00=/s+/g;
let string00="Mississippi";
let result00=string00.match(reg00);
console.log(result00);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result[0]);


