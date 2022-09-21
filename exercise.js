/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    //We gona solve it with a 'for' to walk into each elements of the firts level array
    for (let a = 0; a < arr.length; a++) { 
        if (Array.isArray(arr[a])){ //if into this elements with found a  sub-array we gonna stop and make a flat
            arr = arr.reduce((acc, val) => acc.concat(val), []); // This is one of the way of make a flat in Js
            a = 0; //we return the index 'a' to '0' to rewalk the array and looking for another sub-array
        } 
    }
    
    return arr; //Once everything is ready We return the arr clean
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;

