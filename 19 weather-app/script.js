const button = document.getElementById("searchButton");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");



async function getData(cityName) {
const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=94aa877c20ed4a749eb132619240905&q=${cityName}&aqi=yes`);

return await promise.json()
}


console.log(cityTemp);
button.addEventListener("click" ,async () => {
    const value = input.value;
    const result = await getData(value);
    //console.log(result);

    cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innterText = result.current.temp_c;

});
 