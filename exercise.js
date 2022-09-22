/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let arr2=[];
    let index=arr.length;
    
    const flat = (arr) =>{
        if(index>=arr.length){ //This condition is used to tell the function when to stop calling itself
              for(let i=0; i<arr.length; i++){//With this for cycle we acces the array.
            if(Array.isArray(arr[i])){
                    flat(arr[i]); //Here we use recursion to call again the function itself allowing us to access and extract the elements 
                                 //in the nested arrays.
                                 
            }else{
                    arr2.push(arr[i]);
                }
        }
        }
        return;
    }
    flat(arr); //Here we initialize the function
    return arr2;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;