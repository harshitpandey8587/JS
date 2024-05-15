function showTime(){

    //This is how we will create an object of Date()
    const currentTime = new Date();
    
    //Below we have well formated our time. simply currentTime. karoge to aage ke functions bhi dikhne lagenge
    const gettime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    

    //Now we will print this time in our browser
    document.getElementById("time").innerText = gettime;
    console.log(gettime)
/*
    But as you will see ke upar to bas hmne ek particular time ki value ko heading me dal diya 
    but ye time abhi live ki tarh chal nahi rha hai.

    ye live chale eske liye do fn hote hain 1.setTimeOut   2.setInterval
    SetTimeout jo hai ye ek  particular fn ko run krta hai after some seconds. Eske andar hme ek fn pass krna hota hai
    Pehle parameter me fn pass krna hota hai dusre parameter me miliseconds pass krna hota i.e kitne miliseconds ke bad ye fn chal jae
    Problem bas ye hai ke jo setTimeout function hai vo bas ek bar he fn run krta hai.


    2. setInterval
    ye ek trh se cron job smjh lo devops ke terms me ek fn leta hai and dusre parameter me time interval in mililseconds.
    So basically jo get the live time we have to set the time interval of 1 second. in this fn
*/
}

//Make sure ke neeche showTime ke bad parenthesis nahi lagenge else chalega nahi fn
setInterval(showTime , 2000);