/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let res = [];
    res = [].concat(...arr);
    for(i=0; i<res.length; i++) {
        if (Array.isArray(res[i])) {
            res = [].concat(...res);
            i = 0;
        } 
    }
    /* Only make changes below this comment */
    return res;
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;