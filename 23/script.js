/*
Clousures is most asked topic in JS interview
BDSNA(Dekh he lo yr, qki sach me bina dekhe ye lec smjh me nhi aega. maine to bas yaha pe eska practical krke dekh rha hun neche)

A closure is the combination of function bundled together withreferences to its surrounding state.
Inner functions have access to the variables of outer functions or say enclosed functions

(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
Ye link hai.
*/ 
function adder(num){

    function add(a){
        //const value = ();
        console.log(num +a)

    }

    return add;
}

const addTo5 = adder(5);


// Pehle mujhe bhi laga tha ke addTo5 to ek variable hai but No, addTo5 me to ek function return
//hokr aya hai na; To it is a function basically.

//addTo5 me ek function aagya hai , es function me num =5 pehle se he hoga.

//To agar simply main console.log(addTo5) karunga to mujhe vo returned fn dikh jaega


//but mujhe to returned fn nahi dekhna hai,mujhe to value dekhni hai final vali, so to see that I need
//to simply call addTo5 like this: addTo5(<jo bhi number hm 5 me add krke dekhna chahte hon>);
console.log(addTo5);    //Ek fn return hokr

addTo5(2);          //Dhyan rahe ke addTo5 me maine 2 ko pass kiya hai. qki addTo5 me num ki value to pehle se he 5 thi, ab I am trying to pass 2 and check ke answer 7 ata hai ya nhi

/*in the above example, add function jo hai vo ek closure fn hai qki vo enclosed hai adder se, and add fn can also access the variables of adder fn*/


//One more thing is that ke closure function run krte hain jb hm ekbar to uski value jo hoti hai
//vo memory me store hojati hai, to next time jab run krte hain to fir value directly update hojati hai