/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level.

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
  /* Only make changes below this comment */

  /* while loop that will keep running until theres no nested array */
  let keepRunning = true;
  while (keepRunning) {
    keepRunning = false;

    /* for loop that goes through the array */
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      /* if condition to check if element is an array */
      if (Array.isArray(element) && element.length === 0) {
        /* If the nested array is empty it will be removed */
        arr.splice(i, 1);
        i--;
      } else if (Array.isArray(element)) {
        keepRunning = true;
        /* If the nested array is not empty, the values inside it will be placed correctly in the parent array */
        /* for loop that goes through the nested array */
        for (let j = 0; j < element.length; j) {
          const el = element[j];

          /* splice method to copy the current nested-array-value into parent array */
          arr.splice(i, 0, el);
          /* splice method to remove the current nested-array-value from the nested array */
          element.splice(j, 1);
          i++;
        }
      }
    }
  }

  /* return with flattened array */
  return arr;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
