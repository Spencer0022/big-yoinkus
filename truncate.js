function truncateString(str, num) {
    let newString1 ='';
    newString1 = str.slice(0,num);
    newString1+="...";


    console.log(newString1);
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  truncateString("Peter Piper picked a peck of pickled peppers", 11);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

  
//   //Truncate a string (first argument) if it is longer than
//   the given maximum string length (second argument). Return the truncated string with a ... ending.


// let string1 = 'a tisket a tasket.';
// console.log(string1);

// let string2 = string1.slice(0,3);
// console.log(string2)
