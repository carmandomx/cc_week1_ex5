/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
let result= [];    
arr.forEach((item) => {  // we make the code below for each element  inside of the array
        if(Array.isArray(item)){ //then we concatenate each element inside of the result if the result is an array 
     result = result.concat(flatten(item));// we use a recursive function
    } else {
    result.push(item);  //as we are not receiving an array perse we just put it into our array result
    }
},[]);
return result;

 /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;