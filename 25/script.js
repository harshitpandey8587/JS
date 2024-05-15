/*
Maine kamse kam 3 bar ye lec dekha hai tb jakr smjh aya hai.
preshan nahi ho, ajaega ,bs dhere dhere dekho es lect ko 2-3 bar

Composition with modern javascript bhi smjh aarha hai eslye preshan nahi ho,ajaega lekin notes nahi banaye hain maine

*/


//Modern javascript ko kaise likhte hain yemaine neeche karke dekha  hai, tm lect dkh lo tbhi smjh aega ye sb

function multiply(args){   //yaha args ka mtlb hai ek array mang rha hai as argument, and neech array ka first element *(into) array ka second element
    return args[0] * args[1]
}

function square(a){
    return a * a;
}

const composeAll = (...fns) => (...val) => fns.reduce((a,b) => b(a) , val);

//Basically ho ye rha hai yaha ke jo multiply fn ka output hai vo square fn me chala jaega as input..
const task = composeAll(multiply, square)   
console.log(task(2,3))

//We can add multiple functions together here basically compose kr diya sare fn ko hmne, Jaise neeche ek third fn k add kr diya hai.
const task2 = composeAll(multiply, square, (val) => val + 1)
console.log("Value of Task2 is given below")
console.log(task2(2,3))
