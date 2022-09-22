/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    // Declare variable flattenArray and initialize it as an empty array
    let flattenArray = [];
    // for cycle will evaluate every array (initial and nested arrays)
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            // Evaluate if the element is an array
            if(Array.isArray(element)) {
                /* 
                Call the function "flatten" recursively when the element is an array
                Concatenate the returned value to the array "flattenArray"
                */
            flattenArray = flattenArray.concat(flatten(arr[i]));
        } else {
            // If the elemen is not an array then just push it into the array "flattenArray"
            flattenArray.push(arr[i]);
        }
    }
    // Return the flatten array
    return flattenArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;