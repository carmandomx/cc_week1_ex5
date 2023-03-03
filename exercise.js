/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr,flattened=[]) => { /*Recursive function that keeps through iterations with variable flattened*/
    for (let i=0;i<arr.length;i++){ /*Iterating through the whole array element by element */
        let position_i=arr[i]/*element in position i of array arr */
        if (Array.isArray(position_i)){ /*If that object is an array... */
            flatten(position_i,flattened) /*we enter the array to do the flattening */
        } else{
            flattened.push(position_i) /*else, if element is not an array, we just add it tu flattened */
        }
    }
    return flattened
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;