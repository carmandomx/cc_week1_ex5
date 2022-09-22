/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    //We declare the array that will have the final array
    let depthfla = [];

    /*We need to use another function to recursively traverse the arrays in the arrays and the arrays
    inside those arrays and so on*/

    /*Checks if the current position is an array, if not, just adds the value
    but if it's an array, sends that array to a recursive function to reduce it into
    its deepest values, push it into a temporal array and then return the new array */
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            depthfla = arrayDepth(arr[i], depthfla);
        }
        else{
            depthfla.push(arr[i]);
        }
    }

    return depthfla;

    /* Only make changes below this comment */
}

//Recursive function that checks the if the array has arrays and does the same pushing the final depth values
const arrayDepth = (arr, depthtemp) => {
    if(Array.isArray(arr)){
        for(let j = 0; j < arr.length; j++){
            if(Array.isArray(arr[j])){
                return arrayDepth(arr[j][0], depthtemp);
            }else{
                depthtemp.push(arr[j]);
            }            
        }
    }else{
        depthtemp.push(arr);
    }
    return depthtemp;
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;