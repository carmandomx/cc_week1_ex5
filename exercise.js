/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    
    /* Only make changes below this comment */
    let finalArray=[];

    // If arr is empty
    if(arr.length===0){
        return finalArray;
    }else{
        let arrSize = arr.length;
        // Iterate in every arr element and pushing it in the final array if it isn't another array.
        for(let i=0;i<arrSize;i++){
            // If element is an array, use recursion to flat it
            if(Array.isArray(arr[i])){
                finalArray= finalArray.concat(flatten(arr[i]));
            }else{
                finalArray.push(arr[i]);
            }
        }
        return finalArray;
    }
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;