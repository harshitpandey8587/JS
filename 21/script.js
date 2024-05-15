const button = document.getElementById("getLocationButton"); 
const heading = document.getElementById("resultFinal"); 

async function getData(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=94aa877c20ed4a749eb132619240905&q=${lat},${long}&aqi=yes`);
    return await promise.json()
    }

async function gotLocation(position) {
    //passing the latitude and longitude into getData fn so that weatherapi.com ki api ko hit kar paye while giving the parameters
    const result = await getData(position.coords.latitude,position.coords.longitude)
    console.log(position)
    console.log(result)
}

function failedToGetLocation(){
    console.log("There was some issue in fetching the location")
}


//Make sure ke getLocation and faileToGetLocation ke aage maine parenthesis nhi diya hai.
button.addEventListener('click' , async () => {

    const result = navigator.geolocation.getCurrentPosition(gotLocation , failedToGetLocation);
   //console.log(result)
})