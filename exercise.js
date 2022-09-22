/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    /* I decided to use the reduce method because as its behavior states, it is always working with two elements of the actual array, in this case
    inside the reduce method first we ask if the first  element of the array (later i will explain why the first element if we are saying that it is the "next")
     is a nested array inside the principal array, if true we call this same function to make kind of deep flat of the arrays then we have those values without the nested
     array then we can concat to the nex one, the result is now storage on the "actual" part of the reduce method, if the element of the principal array is not a nested
     array, it just concat without any problems. Before the reduce finishes, we got an empty array, this is the first "actual" that reduces will compare */
    return arr.reduce((actual, next) => Array.isArray(next) ? actual.concat(flatten(next)) : actual.concat(next), []);
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;