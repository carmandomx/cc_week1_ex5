/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let arr2 = []; // we create a new empty array to save the answer
    for(let i=0;i<arr.length;i++){ // we iterate thorugh the input array
        let item = arr[i]; //we save each item of the array in the variable item
        if(Array.isArray(item)==true){ //if one of this items is another array we go into this contidition 
            arr2 = arr2.concat(flatten(item));//we concatenate items in the answer and use some recursive function if there is another array nested
        }else{
            arr2.push(item) // if not we add items into the answer array
        }
    }

    return arr2;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;