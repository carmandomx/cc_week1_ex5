/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level

*/
/** DO NOT CHANGE THE FUNCTION NAME **/

const flatten = (nested) => {
  const flat = [];

  //Created a function to make able to perform a recursion so i can check all the
  //values within the array. The "flat" constant can not be inside the function or it will
  //restart everytime the function its called again.

  const recursion = (arr) => {
    //A iteration its done up to the lenght of the array in order to check all the positions
    for(var i = 0; i < arr.length; i++) {

      //Verify that the object its an array, if yes. The current array will be introduced as argument into
      //the function to check the current one.
      if (Array.isArray(arr[i])) {
        recursion(arr[i])
      }

      //If the object that is being checked in the moment is not array, the value will be stored in "flat"
      else{
        flat.push(arr[i]);
      }
    }
  }

  recursion(nested)
  return flat;
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;