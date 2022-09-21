/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
  /* Only make changes below this comment */
  /* return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  ); */
  let newArrFlatted = [];
  for (const indexValue of arr) {
    if (Array.isArray(indexValue)) {
      newArrFlatted = newArrFlatted.concat(flatten(indexValue));
    } else {
      newArrFlatted.push(indexValue);
    }
  }
  return newArrFlatted;
  /* Only make changes below this comment */
};

console.log(flatten([])); //
console.log(flatten([1, {}, [3, [[4]]]])); //([1, {}, 3, 4]);
console.log(flatten([1, [], [3, [[4]]]])); //([1, 3, 4]);
//console.log(!file.match(/\.\s*flat\s*\(/) && !file.match(/\.\s*flatMap\s*\(/)); //true

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
