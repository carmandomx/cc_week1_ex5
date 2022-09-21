/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let res = []; //set result variable as an empty array
    res = [].concat(...arr); //using spread on array and then concatenating to return all of the elements in depth 1
    for(i=0; i<res.length; i++) { //creating a for loop to iterate through the flattened array
        if (Array.isArray(res[i])) { //if there are any other subarrays...
            res = [].concat(...res); //flatten them too!
            i = 0; //return to the first position, so it will execute untill all the elements are flattened.
        } 
    }
    /* Only make changes below this comment */
    return res;
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;