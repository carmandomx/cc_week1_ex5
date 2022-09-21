/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    //I create a new array to put the result
    let result = [];

    //I am using a "forEach" to work with each element of the array ("shallow" array first)
    arr.forEach(function(elementOrArray){

        //if the array element is actually another array...
        if(Array.isArray(elementOrArray)){
            //...I concatenate the result array to the flatten function (Recursion) with that element as input
            result = result.concat(flatten(elementOrArray));
            //so, the flatten function is going to be executed at a "deeper" level until it reaches the deepest level
        }
        else{
            //if it is NOT an array, it's just an element, so I just push it to the result
            result.push(elementOrArray);
        }
    }
    );

    //when all levels have already been covered, the result should contain all elements in one level
    return result;

    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;