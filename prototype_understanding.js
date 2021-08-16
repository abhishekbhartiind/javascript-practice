//! Function.prototype.apply and Function.prototype.call

/*
The only difference between apply and call is how we pass the arguments in the function being called. 
In apply we pass the arguments as an array and in call we pass the arguments directly in the argument list.
*/

const obj1 = { result: 0 };
const obj2 = { result: 0 };

function reduceAdd(){
    let result = 0;
    for(let i = 0, len = arguments.length; i < len; i++){
        result += arguments[i];
    }
    this.result = result;
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); // returns 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15