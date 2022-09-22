/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    const notFlatten = [arr]; //Recieve the elements of the parameter
    const flat = []; //Result variable

    /* This block will looping until "notFlatten.length" is 0 
    first we need to filter out all the arrays in the original array and get one single array
    the loop will not stop until "notFlatten" array is empty so
    we need to get out the elementes and pased to other array which will be the solution 
    but it will be positioned on reverse so it need be fixt */
    while (notFlatten.length) {

        // Variable where will save the last element from an array if is the case of it
        let lastElement; 
        
        /* The ".pop()" method removes the last element from an array and returns that element */
        lastElement = notFlatten.pop();

        /* The "Array.isArray()" method returns true if an object is an array, otherwise false. 
        this is the filter, if "lastElement" is an array then it will be pushed again in "notFlatten" array
        but it will be at same level as the elements before */
        if (Array.isArray(lastElement)) {

            // The ".push()" method adds new items to the end of an array
            notFlatten.push(...lastElement); // Spreat elements in "lastElement" array and then push them
        } 
        
        /* Here is where saves the elements to "flat" variable which will be the result array
        once the array "notFlattern" hasn't a single array then the conditional will be "false"
        and will enter to else block */
        else {
            flat.push(lastElement); // Push the "lastElement" to the "flat" variable
        }

    }

    /* Here returns the fixed result array
    The ".reverse()" method reverses the order of the elements in an array */
    return flat.reverse();

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;