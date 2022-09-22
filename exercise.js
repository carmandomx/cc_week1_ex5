/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    const flatArray = [];                       //Create an empty array where the flattened array will be stored
    const recFlat = (array) => {                //Create another function to make the function recursible
    for (let i = 0; i < array.length; i++) {    //Create a for loop to go over all the elements of the array
        if(Array.isArray(array[i])) {           //Check if the current element of the array is an array
            recFlat(array[i]);                  //If true, call the function again and repeat the process
        }
        else {
            flatArray.push(array[i]);           //Push the element into the empty array
        }
    }
}
    recFlat(arr);                               //Call the function again to check if there is another nested array
    return flatArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;