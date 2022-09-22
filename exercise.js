/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    

let temp =[]; //First we have to creat a new array, to save the items
   
   
    /* Only make changes below this comment */
    
    for (let i = 0; i < arr.length; i++) { //Now we are going to take a look over all the items inside.
       
        if (Array.isArray(arr[i])) { //Here we now have to check if the item in our position i is other array inside the current pisition
            temp = temp.concat(flatten(arr[i])); //If the answer is yes, we must put the items together, but using recursive functions, we call the same flatten and send the array we are evaluating at the position i 
            //so, inside of the function, the same thing is happening, we are evaluating the current argument to chek if it have another array inside of the position
        } else{//if the current position, is not an array and just items, we are going to ignore the upside function
             temp.push(arr[i]); //and we are going to put the current itemps in the new array, just the items.
        }
    }
    console.log(temp);

    return temp;
}

flatten([1, {}, [3, [[4]]]]);

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;