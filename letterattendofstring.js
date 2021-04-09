const confirmEnding=(str,targ)=>{
    return str.endsWith(targ)
}
const confirmEnding=(str, target)=>str.slice(str.length - target.length)===target;

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))