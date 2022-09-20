/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    //store the result of the reduce in flattenArr
    let flattenArr = arr.reduce((a,item)=>{
        if(Array.isArray(item)){
            //if the element is an array, use again the flatten function to flatten the array
            a = a.concat(flatten(item));
        }
        else{
            //not array so add to a
            a.push(item);
        }
        return a;
    },[]);
    //return the flatten array
    return flattenArr;


    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;