/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
  /* Only make changes below this comment */
  //We create a new array that storage our new element.
  let newArrFlatted = Array();
  if (!arr) {
    //Validation if "arr" exist (true); in case that result false we send a warning.
    return "Please input any value in a array";
  } else if (!Array.isArray(arr)) {
    //validation in case that "arr" not be a Array, we send another alert.
    return "First write a array";
  } else {
    //if "arr" exist (true) and is a Array, we do a cycle for-of for iterate our array values.
    for (const indexValue of arr) {
      /* case true for array. Per value of index (indexValue) we evaluate if is a Array (sub-array in "arr") and if that it's True then our new array (newArrFlatted) the result of evaluate itself (recursive function) for next that merge it (concat) to "newArrFlatted" */
      if (Array.isArray(indexValue)) {
        newArrFlatted = newArrFlatted.concat(flatten(indexValue));
      } else {
        /*opposite case, when all values of arr ("indexValue") not be sub-arrays, then we can push them in the new array.*/
        newArrFlatted.push(indexValue);
      }
    }
    //and return our new array that storage only the values without sub-arrays.
    return newArrFlatted;
  }
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
