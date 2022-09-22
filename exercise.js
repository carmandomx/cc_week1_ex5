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
   NewArray = arr.reduce((Pvalue, Cvalue) =>{
    if (Array.isArray(Cvalue)){
        Pvalue = Pvalue.concat(flatten(Cvalue));
    }
    else {Pvalue.push(Cvalue);
   }
    return Pvalue;
    }, [])
      // flattened is [0, 1, 2, 3, 4, 5]
    /* Only make changes below this comment */
    return NewArray
}

console.log(flatten(arr))




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;