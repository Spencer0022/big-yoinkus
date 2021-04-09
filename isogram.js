const isIsogram=str=>!/(\w).*\1/i.test(str);


console.log(isIsogram("Dolphin")); //ISOGRAM CHECKER
console.log(isIsogram("Texas"));
console.log(isIsogram("Missouri"));
console.log(isIsogram("abcdef"));

flipString=str=>str.split("").reverse().join(""); //FLIP STRING