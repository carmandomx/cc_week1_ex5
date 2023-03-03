/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let res = []

    for (let i = 0; i < arr.length; i++) { //analize every element of the array
        if (Array.isArray(arr[i])) { //check if the object is an array
            let flat = flatten(arr[i]);
            res.push(...flat); //put elements in a new single array
        }
        else {
            res.push(arr[i])//put elements in a new single array
        }
    }
    return res;
    /* Only make changes below this comment */
}


var arr = [1,2,3,[1,2,3,4, [2,3,4]]]
console.log(flatten(arr))//[1,2,3,1,2,3,4,2,3,4]


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;