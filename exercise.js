/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

    //make a special copy of the receive array, using spread operator    
    let stack = [...arr];
    //we create a new array variable to store the data we're goint to get from the copy
    let resultStack = [];
    //we make a while cycle with the condition that the lenght of stack has to be more than 0
    while(stack.length){
        //we eliminate the last element of stack and we store in a new variable called nextElement
        let nextElement = stack.pop();
        //we check the condition if the element now is an Array to down the level
        if(Array.isArray(nextElement)){
            //we add the element to the stack again with the support of spread operator, with the reduced level
            stack.push(...nextElement);
        } else{
            //we store the element directly in resultStack if it is just an element, not an array
            resultStack.push(nextElement);
        }
    }   
    
    //Because of the manipulation of element with push in resultStack, we need to apply "reverse" function
    //an we get the desired resul  
    return resultStack.reverse();
    /* Only make changes below this comment */
}






/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;