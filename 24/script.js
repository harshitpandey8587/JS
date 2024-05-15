/* 
Curry fn is different from Currying in JS, ye lect direclty dkh lo qki aise smjh nahi aega
Last lecture me closure fn to mujhe achese smjh aagya tha,eslye directly lect dkhlo, to ye bhi
smjh ajaega,mushkil nhi hai bas thoda tricky hai, but han smjh agya hai, I have not made a single notes
of this lec.

Currying in the sense suppose hmare pas koi fn hai jo ki teen arguments leta hai to first of all to hm
ye chahenge ke vo fn curry ban jae jisse ek fn teen arg lene ki  jagah 3 fn ek ek argument len.
Secondly suppose hm ye chahte hain ke jabtk teeno arguments ki value na pas hojaye ye curry fn chale na.
to es case me hm Currying ka use krte hain JS me.

Ex- Suppose prod env me aise 100s of variables ke liye requirement ho tb? i.e jab 100 ke 100 values ajae tbi ye fn chale else na chlae


Es lecture ke last me currying ko arrow function me bhi convert krke dikhaya hai, its interesting


However Maine chat GPT se pucha ke isCurry function kya hota hai
here is the ans:The term "currying" in JavaScript refers to the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. 

// Normal function taking multiple arguments
function multiply(a, b) {
    return a * b;
}

// Curried version of the above function
function curryMultiply(a) {
    return function(b) {
        return a * b;
    };
}

// Using the curried function
const double = curryMultiply(2); // 'double' now holds a function that multiplies its argument by 2
console.log(double(3)); // Output will be 6 (2 * 3)

In the example above, curryMultiply is a curried version of the multiply function. 
It takes the first argument a and returns another function that takes the second argument b.
 When you call curryMultiply(2), it returns a new function that multiplies its argument by 2.
  This new function is stored in the variable double, and when you call double(3), 
  it effectively multiplies 2 by 3, resulting in 6. */


//  <------------------------------------------->
