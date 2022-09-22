/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    let flat = []
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i]
        if (!Array.isArray(cur)) {   //check//
            flat.push(cur)
        } else {
            for (let j = 0; j < cur.length; j++) { //confirm//
                flat.push(cur[j])
            }
        }
    }
    return flat
}


console.log(flatten([[1], [2], 3, 4, [5]]))

console.log(flatten([]))

/* Only make changes below this comment */



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;