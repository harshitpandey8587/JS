function printsomething() {

    console.log('Veera is my daughter')
}

//calling the function
//printsomething()

function addNumbers(){

    let ans = 0;
    for(let i=0; i< arguments.length ; i++)
    {
        ans = ans + arguments[i]
    }
    return ans
}

result = addNumbers(10,20,20,20)
console.log("Here is the result: ", result)