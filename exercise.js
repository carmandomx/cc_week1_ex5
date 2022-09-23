/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
 
        const flat = [];
        const handleFlat = (array) => {
          let counter = 0
          while (counter < array.length) {
            const val = array[counter];
            if (Array.isArray(val)) {
              handleFlat(val);
            } else {
              flat.push(val)
            }
            counter++;
          }
        }
        handleFlat(arr);
        return flat;
      
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;