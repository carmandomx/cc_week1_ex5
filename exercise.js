/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    //let nuevo1=arr.flat(infinity);
    let nuevo1=[]
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
          nuevo1=nuevo1.concat(flatten(arr[i]));  
        }else {
         nuevo1.push(arr[i])
        }
      
    }
     return nuevo1;
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;