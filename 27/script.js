/*
IIFE vo function hote hain jo immediately banakar run kiye jate hain, ya ye kehlo they can be run as soon as they are defined
Syntax: parenthesis me ek fn define krdo fir uske just bad ek aur parenthesis me values dedo,kam hogya bas..

Use case: jaise hme koi variable use krna hai kisi fn me and hm use global variable nhi bnana chahte hain , bcz global var ban kr vo conflicts create kr skta hai


*/
(function add(a ,  b){
    console.log(a+b);
})(3,5); 

console.log("another simple example of IIFE"); //jabtk maine yaha pe semi colon nahi lagaya tha tbtk neeche vala fn nahi chal rha tha.
/////////////////////////////////////////////////////////////////////////////////
(function greet(){
    console.log("Hello boys, we are learing IIFE");
})();



/////////////////////////////////////////////////////////////////////////////////


console.log("Invoking IIFE via arrow fn");
(() => {console.log('arrow function invoked IIFE')})();
/////////////////////////////////////////////////////////////////////////////////

console.log("<----------------------------------------------->");

console.log("We can even return a value from IIFE fn like below");
const value = (() => 100)();
console.log(value)

console.log("<----------------------------------------------->");
/////////////////////////////////////////////////////////////////////////////////

//Async fn bhi banaye ja skte hain in IIFE.Jaise dekhne se he pata lag rha hai below statement me that
//fetch ke andar koi URL hoga, vaha se data pick hoga and 'data' me store hojaega .

const data = (async () => {await fetch("")})();


/////////////////////////////////////////////////////////////////////////////////

//IIFE is also used for initializing private and public variable
//in below ex hmne initialBalance ko private kr liya hai and widthdraw fn ko expose kr diya hai

const atm = function(initialBalance) {
    let balance = initialBalance;
    function widthdraw(amt){
         if(amt > balance)
         {console.log("Are you kidding bro?")} else {
            balance -= amt;
            return balance;
         }  
    }
    return {widthdraw};       //widthdraw ke as pas maine curley braces nhi lagaye the esslye error aa rha tha. Makesure to give curely braces here
}

const Harshit = atm(2000);
console.log(Harshit.widthdraw(200)) //ab 1800 balance bacha
console.log(Harshit.widthdraw(200)) //ab 1600 balance bacha