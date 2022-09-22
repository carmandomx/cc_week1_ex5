/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    
    //Using the reduce method
    let arr2 = arr.reduce((acc, i) => {
        
        //This checks if there is an array inside the array
        if(Array.isArray(i)){
            
            //If true then recursive calling the function again and do it again
            acc = acc.concat(flatten(i));
            
        }else{
            //If there is no array within the array push element
            acc.push(i)
        }
        //Return acc variable after the all the recursions
        return acc;
    }, []);

    //Returns the new array without the nested arrays
    return arr2;


    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;