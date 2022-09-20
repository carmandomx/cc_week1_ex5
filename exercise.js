/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let arrFlattened = []; // this will be the answer
    for (let i = 0; i < arr.length; i++) {
        // iterate through all array values
        if (!Array.isArray(arr[i])) {
            // if current value is not type array
            arrFlattened.push(arr[i]); // push the value to the resulting array
        } else {
            arrFlattened = arrFlattened.concat(flatten(arr[i])); // if current value is of type array, call the flatten method again but using the current array
        }
    }

    return arrFlattened; // return the flattened array
    /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
