/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    

    // Throw and error is the array is empty.
    if (arr === []){
        throw "The array is empty";
    }

    // For loop to reduce every nested array and to merge them to the single level array.
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (Array.isArray(element)) {
            arr = arr.reduce((acc,val) => acc.concat(val), []);
            index--;                                               // Avoid to skip elements from the array. 
        }
    }
    
    return arr;
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;