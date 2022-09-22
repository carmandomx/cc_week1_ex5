/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    const res = arr.slice(); /*slicing the array to shadow copy it*/
    let i = 0; /*counter var to go through the array*/
    while (i < res.length) { /*the counter that goes all the way to the length of the array*/
        if (Array.isArray(res[i])) { /*checks if the value is an actual array at any given intenger inside*/
                res.splice(i, 1, ...res[i]); /*splice it all the way to the last intenger, or the entire length*/
            }
        else {
            i++; /*if theres an intenger yet unchecked within the array, the counter continues on*/
        }
  }
  return res;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;