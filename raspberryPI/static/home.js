// element that the weather cards should be built in
let weatherCards = document.getElementById("weather-cards")

// the current day as an integer
let today = new Date().getDay()

// api key for open weather API
let apiKey = '3a00f281352563677d5a0ec2ddb2232c'
createCards()

// This function creates the card items for each day of the week
// using the helper functions below
async function createCards() {
    for (i = 0; i < 7; i++){
        let day = getDayNumber(i+today)
        let card = document.createElement('div')
        card.classList.add("card")
        weatherData = await get_weather(day)
        let weatherIcon = document.createElement('img')
        weatherIcon.src = getWeatherURL(weatherData.description)
        weatherIcon.classList.add("card-img-top")
        card.appendChild(weatherIcon)

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let title = document.createElement('h4');
        title.classList.add('card-title')
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        title.innerHTML = days[day]
        cardBody.appendChild(title);
        let tempature = document.createElement('h6')
        tempature.classList.add('card-temp')
        tempature.innerHTML = weatherData.tempMin + '°/' + weatherData.tempMax + '°'
        cardBody.appendChild(tempature)

        let waterIcon = document.createElement('img')
        waterIcon.classList.add("card-small-img")
        waterIcon.src = "/static/images/raindrop.png"
        if(await isWatering(day)) {
            cardBody.appendChild(waterIcon)
        }
        card.appendChild(cardBody)
        weatherCards.appendChild(card)
    }


}
// this function returns a dictionary that contains the description of the weather
// the min and max temps of the days of the week starting with the current day.
// We use open weather api in order to call this
async function get_weather(day) {
    let response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.098201599999996&lon=-111.6209152&' +
        'exclude=minutely,current,hourly&units=imperial&appid='.concat(apiKey))
    let result = await response.json()
    let weatherDescription = JSON.stringify(result.daily[day].weather[0].description);
    let weatherTempMin = Math.round(JSON.stringify(result.daily[day].temp.min));
    let weatherTempMax = Math.round(JSON.stringify(result.daily[day].temp.max));

    return {
        "description": weatherDescription,
        "tempMin": weatherTempMin,
        "tempMax": weatherTempMax
    }
}

// This function gets the url for the weather icon picture based
// off of the description we pass in
function getWeatherURL(description) {
            switch (description) {
                case "\"clear sky\"":
                    return " http://openweathermap.org/img/wn/01d@2x.png"
                    break;
                case "\"few clouds\"":
                    return " http://openweathermap.org/img/wn/02d@2x.png"
                    break;
                case "\"scattered clouds\"":
                    return " http://openweathermap.org/img/wn/03d@2x.png"
                    break;
                case "\"broken clouds\"":
                    return " http://openweathermap.org/img/wn/04d@2x.png"
                    break;
                case "\"shower rain\"":
                    return " http://openweathermap.org/img/wn/09d@2x.png"
                    break;
                case "\"rain\"":
                    return " http://openweathermap.org/img/wn/10d@2x.png"
                    break;
                case "\"thunderstorm\"":
                    return " http://openweathermap.org/img/wn/11d@2x.png"
                    break;
                case "\"snow\"":
                    return " http://openweathermap.org/img/wn/13d@2x.png"
                    break;
                case "\"mist\"":
                    return " http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "\"light rain\"":
                    return "http://openweathermap.org/img/wn/10d@2x.png"
                    break;
                default:
                    return " http://openweathermap.org/img/wn/10d@2x.png"
            }
}

// Calls our own API to determine if that day is going to water.
async function isWatering(day) {
    let response = await fetch('/is_day_on/'.concat(day))
    let result = await response.json()
    return result.isDayOn
}

// Finds the correct day integer according to what day it is today
function getDayNumber(day) {
    if(day > 6){
        day -= 7
    }
    return day
}

