/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    /* Only make changes below this comment */

    var arr2 = [];

    //I do a for loop to go through the elements in the array 
    for (let i = 0; i < arr.length; i++) {
        //this 'if' is to check if it's an array 
        if (Array.isArray(arr[i])) {
            //then what I do is fill the new array with 'concat' to take the elements of the array
            arr2 = arr2.concat(flatten(arr[i]));
        }
        else
        //The push() method adds new items to the end of an array. The push() method changes the length of the array.
        arr2.push(arr[i]);
    }

    return arr2;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;