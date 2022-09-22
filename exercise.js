/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level

*/
/** DO NOT CHANGE THE FUNCTION NAME **/

const flatten = (arr) => {

    /* Only make changes below this comment */

    //The for loop will be useful to iterate each elemet for the array
    for (let i = 0; i < arr.length; i++) { 

    //condition to found a sub-array
        if (Array.isArray(arr[i])){
    
    //To convert a flat
            arr = arr.reduce((acc, val) => acc.concat(val), []);
            i = 0; //we return the index 'i' to '0' 
        } 
    }
    return arr; 
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;