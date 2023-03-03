/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    let res = []; // New array to contain the result of the original array

    /* forEach to loop through each element of the array  */
    arr.forEach(element => {
        /* Here we detect if an element of the array is another array */
        if(Array.isArray(element)) {
            /* Add each elemement of the inside array to the final array */
            res = res.concat(flatten(element));
        }
        /* If is not we just push the element to the new array */
        else {
            res.push(element);
        }
    });
    
    /* Only make changes below this comment */
    return res; // Return the new array
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;