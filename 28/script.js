/*
Pehle ye lec dkh kr complicated lagra tha but bad me ye bht simple lagne laga, due to generator fn and yield keyword.
Notes bana diye hain neeche bht BDSNA.

We will learn what are iterator Pattern in JS
What is Generator Functions in JS
what is YIELD keyword in JS

All these are advanced topics.
(1) Iterators and Generators : They provide the mechanism of customizing the for..of loops

Suppose hmare pas ek array hai [1,2,3,4,5]
Suppose main es array pe loop iterate krna chahta hun: to ek tareek to ye hai:-
for(const val of [1,2,3,4,5]){
    console.log(val)
}

Abtk hme yahi pata tha ke for ko hm aise likhte hain for (let i=0;i <5 ...)
But upar jo tareeka likha hai usse bhi print hojaega sahi results.how?
vo aise hoega bcz 'Array' ke andar built-in ek iterator fn hai jo array ko btata
 hai that agar kbhi agar tmhare pas ek array ata hai to usko kaise process krna hai.

But real-time me hm built-in iterators ke sath he kam thodi kroge bcz eske
 ke alava aur bhi datatypes ka use krte hain  hm production applications me jaise: percentage /tree/linkedlist

To uske upar iterate krne ka jo pattern/mechanism(that es data type ke upar kaise iterate krna hai ) hai vo tmhe khud he code krna pdta hai
To us chiz ko banane ke liye we have
1. Iteration protocols
2. Generator 
3. yield


Generator fn vo function hote hain jinke aage ek asteric laga hota hai like this:   function* <function-name>(){}

Agar hme yield keyword ka use krna hai to generator fn ke andar he kar skte hain hmlog, ek normal fn ke andar
nahi kr skte hain.

I have successfully written below code without watching the lecture on screen, mtlb yad krke khud se likh
kr try kiya hai aur hogya, bcz ye simple he hai.s

*/
const  btn  = document.getElementById("mybtn");  
function* myIterator (start , end){      //by default  step size ki value 1 hoti hai.
    for( let i = start; i < end ; i +=2)    //but hme step size ko 2 kr diya hai yaha pe i+=2 krke
    {yield i}
}

let one = myIterator(2,30)
btn.addEventListener('click',() =>{
    btn.innerText = one.next().value;   //ye jo next() likha hai ye ek trh se built-in fn hai jiska kam hai iterator ki value ko ek step increase kr dena
});


/* Iterator jo hote hain unke total 3 fn hote hain 
1. value
 2.done(jiski value true ya false hoti hai);True mtlb ye last value thi aur False mtlb aur bhi values hain abhi iterate krne ko
  3.next() jiska kam hai next iterator value par le jana

  */