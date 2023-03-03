/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
  /* Only make changes below this comment */
  ///////////// This approach uses reccursion /////////////

  // Use the reduce method to iterate through each element of the array and flatten nested arrays.
  let flattenedArr = arr.reduce(
    (acc, val) =>
      // If the current element is an array:
      // reccursively call the function "flatten" on the sub-array and concatenate this to the new array.
      // If not, just add the element to the new array
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );

  return flattenedArr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
