function frankenSplice(arr1, arr2, n) {

    let x = [];
    x.push(...arr2);
    
    x.splice(n,0,...arr1)

    console.log(x)

    return x;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice([1, 2], ["a", "b"], 1);
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

  /**take each element of array1 and push or shift into array 2 starting at a certain array point.
   * array.splice(index, how many to delete, element 1, element 2).
   * 
   */