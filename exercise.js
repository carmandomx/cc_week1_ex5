/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        let item = arr[i];
        if(Array.isArray(item)==true){
            arr2 = arr2.concat(flatten(item));
        }else{
            arr2.push(item)
        }
    }

    return arr2;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;