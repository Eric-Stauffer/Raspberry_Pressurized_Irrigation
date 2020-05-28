    let dayNumber = new Date().getDay();
    for(i = 0;i < 7; i++) {
        isWatering(dayNumber, i)
            if(dayNumber === 6){dayNumber = 0}
    else {dayNumber++}
    }
    function isWatering(dayNumber,cardNumber) {
    $.getJSON('/is_day_on/'.concat(dayNumber),function (data) {
        if(data.isDayOn === true){
            document.getElementById('card-'.concat(cardNumber).concat('-small-img')).src = "/static/images/raindrop.png";
        }
        else {document.getElementById('card-'.concat(cardNumber).concat('-small-img')).innerHTML = "Not Watering <br> Today"}
    })}

    let daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let today = new Date().getDay();

    for (i = 0; i < 7; i++){
        document.getElementById("card-".concat(i).concat('-title')).innerHTML = daysOfTheWeek[today];
        if(today === 6){today = 0}
        else {today++}
    }

      for (i = 0; i < 7; i++){
        descriptionOfWeather(i)
    }
    function descriptionOfWeather(dayNumber){
    $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=40.098201599999996&lon=-111.6209152&exclude=minutely,current,hourly&units=imperial&appid=3a00f281352563677d5a0ec2ddb2232c',function (data) {
        let weatherDescription = JSON.stringify(data.daily[dayNumber].weather[0].description);
        let weatherTempMin = JSON.stringify(data.daily[dayNumber].temp.min);
        weatherTempMin = Math.round(weatherTempMin)
        let weatherTempMax = JSON.stringify(data.daily[dayNumber].temp.max);
        weatherTempMax = Math.round(weatherTempMax)
        displayPictureOfWeather(weatherDescription, dayNumber)
        displayTemp(weatherTempMin,weatherTempMax,dayNumber)

    });
    }
    function displayPictureOfWeather(weatherString,dayNumber) {
        let imgUrl = ''

        switch (weatherString) {
            case "\"clear sky\"":
                imgUrl = " http://openweathermap.org/img/wn/01d@2x.png"
                break;
            case "\"few clouds\"":
                imgUrl = " http://openweathermap.org/img/wn/02d@2x.png"
                break;
            case "\"scattered clouds\"":
                imgUrl = " http://openweathermap.org/img/wn/03d@2x.png"
                break;
            case "\"broken clouds\"":
                imgUrl = " http://openweathermap.org/img/wn/04d@2x.png"
                break;
            case "\"shower rain\"":
                imgUrl = " http://openweathermap.org/img/wn/09d@2x.png"
                break;
            case "\"rain\"":
                imgUrl = " http://openweathermap.org/img/wn/10d@2x.png"
                break;
            case "\"thunderstorm\"":
                imgUrl = " http://openweathermap.org/img/wn/11d@2x.png"
                break;
            case "\"snow\"":
                imgUrl = " http://openweathermap.org/img/wn/13d@2x.png"
                break;
            case "\"mist\"":
                imgUrl = " http://openweathermap.org/img/wn/50d@2x.png"
                break;
            case "\"light rain\"":
                imgUrl = "http://openweathermap.org/img/wn/10d@2x.png"
                break;
            default:
                console.log(weatherString)
                imgUrl = " http://openweathermap.org/img/wn/10d@2x.png"
        }
        document.getElementById("card-".concat(dayNumber).concat("-img")).src = imgUrl;

        }

    function displayTemp(tempMin,tempMax,dayNumber) {
        let tempString = "".concat(tempMin).concat('°/').concat(tempMax).concat('°')
        console.log(tempString)
        document.getElementById("card-".concat(dayNumber).concat("-temp")).innerHTML = tempString;

    }