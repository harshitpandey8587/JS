//arrow function

const hello = () => {
    console.log("Vani is my daughter");
    
    console.log("Veera is my daughter");
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

//hello();

//Example of this keyword using a normal fn
//Here this keyword will act normally, it will route to the value which we defined.

const Greet ={
    value : "Hi Harshit, Are you trying to learn this keywork with normal funciton in it?",
    myFunction: function () {

        console.log("Here is the value = " + this.value);
    }

}

//Greet.myFunction();


const Greet2 ={
    value : "Hi Harshit, Are you trying to learn this keywork with normal funciton in it?",
    myFunction: () => {
        console.log(this);
    }

}

Greet2.myFunction();