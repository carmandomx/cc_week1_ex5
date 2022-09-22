/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let flArray = []; // I created a new array that will be the flatten one

    function pushLoop(arr) { //I nested another function that will push the values into the new array and at the same time it will detect if there is an array inside of the original array
      for (let i= 0; i < arr.length; i++) { // created a for loop to iterate each value of the array
        if (arr[i] && arr[i].constructor === Array) { //if the index has a constructer property that equals that of an array it will detect that the current index is an array and continue to loop on the nested function
          pushLoop(arr[i]); //if the element is an array it will recurse until it finds only the number
        } else {
          flArray.push(arr[i]); // if it isn't an array then it will be pushed to the new flatten array
        }
      }
    }
  
    pushLoop(arr); // will run the nested function on the array until it finds the number
    return flArray; // return the flatten array
  }
    /* Only make changes below this comment */
 



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;