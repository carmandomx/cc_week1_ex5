/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    let flat = []
    for (let i = 0; i < arr.length; i++) { //each element
        const cur = arr[i]
        if (!Array.isArray(cur)) {   //to find//
            flat.push(cur)
        } else {
            for (let j = 0; j < cur.length; j++) { //convert//
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