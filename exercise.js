/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    let flatArr = []; // declaring an array literal to add the flat elements

        // Loop through all the elements in the given array
        for (let i = 0; i < arr.length; i++) {
            // Verify the value of the current element
            if (Array.isArray(arr[i])) {
                // When current element is an array, 
                // Call again flatten() on the element and then add the result to the flat array
                flatArr = flatArr.concat(flatten(arr[i]));
            } else {
                 // otherwise, when current element ISN'T an array, just add the element directly 
                flatArr.push(arr[i]); 
        }
    }
    return flatArr;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;