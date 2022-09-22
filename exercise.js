/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
var arr = [
    24, 15,
    172, 18,
    [4, 5],9, 22
  ] 
  
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) =>{
    /* Only make changes below this comment */
   NewArray = arr.reduce((a, b) =>{
    if (Array.isArray(b)){
            a = a.concat(flatten(b));
    }
    else {a.push(b);
   }
    return a;
    }, [])
      // flattened is [0, 1, 2, 3, 4, 5]
    /* Only make changes below this comment */
    return NewArray
}






/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;