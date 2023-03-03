/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let newArr = [];
    arr.forEach(x => { Array.isArray(x)? newArr = newArr.concat(flatten(x)) : newArr.push(x)});
    return newArr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;