var input = document.getElementById('city-name')
var temperature = document.getElementById('temperature')
var displayCity = document.getElementById ('display-city')
var description = document.getElementById('description')


input.addEventListener ('keypress', pressInput)

function pressInput (evt){
    if (evt.keyCode == 13){
        getWeather (input.value)
    }
}

const apiData = {
    url: 'http://api.openweathermap.org/data/2.5/weather?q=',
    id: '&APPID=11490225ae04c0b2adaabecd73fb36fb'
}

const {url, id} = apiData

function getWeather (cityName){
    fetch (`${url}${cityName}${id}`)
    .then ((data) => data.json())
    .then ((weather) => {
        console.log (weather)
        if(weather.message =="city not found"){
            displayCity.innerHTML = "There is no city with this name!"
            temperature.innerHTML = " "
            description.innerHTML = " "
        }
        displayCity.innerHTML = weather.name + ", " + weather.sys.country
        temperature.innerHTML = Math.round(weather.main.temp - 273.15) + " °C"
        description.innerHTML = weather.weather[0].description
    })
}




