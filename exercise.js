/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    let flat = []; //Declare my future return value as an array.

    for (let index = 0; index < arr.length; index++) { //Start a for loop to run through the array from beginning to end.
        
        if (Array.isArray(arr[index])) { //I put a conditional to check if that element is an array.
            
            flat.push(...flatten(arr[index])); //I place that element inside my return value while I call the function again (making it recursive) and store all the elements of an array with the three dots method (...).
        
        } else { //If it is not an array, I simply add it to the array to be returned.
            
            flat.push(arr[index]); //Add it to the array to be returned.
        }
        
    }

    return flat; //Return the flatten array.
    
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;