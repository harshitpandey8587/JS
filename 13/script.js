const Weather = ["spring" , "summer" , "winter"];
console.log(Weather);
console.log("Print Specific index number")
console.log(Weather[2]);

Weather.reverse()
console.log(Weather);

const numbers = [1, 2, 3,4 , 5 ,6 ];
let ans = numbers.findIndex( num => num ===4);
console.log(ans)
console.log(numbers[ans])