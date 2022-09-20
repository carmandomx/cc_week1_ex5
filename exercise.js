/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    //Flatten
    
    /*THIS IS PART IS NOT MY ANSWER, I discover somethin interesting here:
    The code between 33 - 50 works, if I return the variable "result"
    all the test will pass "correctly" but the true it is not correct
    if you show the answer with a console log in the test file, it's the 
    only form to see it.
    for example:
    flatten([1, {}, [3, [[4]]]]): return-> "[      1,         {},
                                                3,         4,
                                                undefined, undefined,
                                                undefined, undefined,
                                                undefined, undefined,
                                                ]"
    and with the code bt 53-71 it works correctly.
    But the only way to know  it's  print it the return.
    */
    //empty array for the result

    let result = [];
    //length of my array
    let len = arr.length

    //Cycle to flatten my array
    for(let i = 0;i<len;i++){
        //If my element in the position i is an array
        if(Array.isArray(arr[i])){
            //flat the element and push it in my result
            result = result.concat(flatten(arr[i]));
            /*modify the length of my cycle  bc when 
            I flat the array, it would finish longer 
            and with others arrays inside*/
            len +=flatten(arr[i]).length
        }else{
            result.push(arr[i])
        }
    }

    //CORRECT---
    //I use the reduce method
    let flatArray = arr.reduce((acc, i) => {
        //If the element(a space in my array) is an array
        if(Array.isArray(i)){
            //as it is an array, I call again the same function to do the metho recursive
            acc = acc.concat(flatten(i));
        }else{
            //as it is NOT and array, I just push the element
            acc.push(i)
        }
        //return my array flatted
        return acc;
    }, []);

    //return the answer
    return flatArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;