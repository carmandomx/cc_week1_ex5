/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
  /* Only make changes below this comment */

  //Create for loop for iterate the array
  for (let i = 0; i < arr.length; i++) {
    //Create a condition for check if the input in i position is an array
    if (Array.isArray(arr[i])) {
      //Using reduce and concat method for flat the array
      arr = arr.reduce((acc, val) => acc.concat(val), []);
      //Return i to 0 for iterate the array from the begining
      i = 0;
    }
  }
  return arr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
