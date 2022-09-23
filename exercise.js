/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    
    while(Array.isArray(arr)) //Checking for valid argument
{

    var c =[]; //Empty global arrays to work
    let narray=[];
    let flatten=1; //Setting flatten to 1 for run the inner while at least 1 time
 
    while(flatten>0) //This algorith will run while the array still unflat
        {
            c=[]; //Reseting values 
            narray=[];

            flatten=0; //Asuming this is the last iteraction

            //If the element is an array, it's items will be concatenated to the main array
            //if is another type of element, it will be pushed to the main array
            for(let i=0; i<arr.length; i++) 
        {
            if(Array.isArray(arr[i])) 
            {
                c=c.concat(arr[i]);
                console.log(c);
           
            }
            else{
                c.push(arr[i]);
            }

        }

    //Checking if the current new array has inner arrays        

        for(let y=0; y<c.length; y++)
        {
        
        if(Array.isArray(c[y])) //If yes, the flatten flag will be activated and we will run another while cycle
            {
            flatten=1;
            }
        
        }
            arr=c; //Copyng c into arr before the value gets reseted;
        }

    return arr; //returnig our new flattered array
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;
