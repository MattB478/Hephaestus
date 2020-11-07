function getWeather() {
    let zip = document.getElementById('zipCode').value

    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

    if (isValidZip === true) {
        let href = `https://api.openweathermap.org/data/2.5/weather?zip=`+ zip +`&appid=25fd2b84e9296987fb359f25033af609&units=imperial`
        fetch(href)
        .then(res=> res.json())
        .then(weather => {
            let icon = `http://openweathermap.org/img/wn/` + weather.weather[0].icon + `@2x.png`
            let wind = weather.wind.deg
            var degToCard = function(deg){
                if (deg>11.25 && deg<33.75){
                  return "NNE";
                }else if (deg>33.75 && deg<56.25){
                  return "ENE";
                }else if (deg>56.25 && deg<78.75){
                  return "E";
                }else if (deg>78.75 && deg<101.25){
                  return "ESE";
                }else if (deg>101.25 && deg<123.75){
                  return "ESE";
                }else if (deg>123.75 && deg<146.25){
                  return "SE";
                }else if (deg>146.25 && deg<168.75){
                  return "SSE";
                }else if (deg>168.75 && deg<191.25){
                  return "S";
                }else if (deg>191.25 && deg<213.75){
                  return "SSW";
                }else if (deg>213.75 && deg<236.25){
                  return "SW";
                }else if (deg>236.25 && deg<258.75){
                  return "WSW";
                }else if (deg>258.75 && deg<281.25){
                  return "W";
                }else if (deg>281.25 && deg<303.75){
                  return "WNW";
                }else if (deg>303.75 && deg<326.25){
                  return "NW";
                }else if (deg>326.25 && deg<348.75){
                  return "NNW";
                }else{
                  return "N"; 
                }
              }
            document.getElementById('weather').classList.add("Weather")
            document.getElementById('weather').innerHTML = `
             <h1>${weather.name}</h1>
             <img src="${icon}" alt=""> 
             <p class = "temp">${weather.main.temp}°<p>
             <div id = "info">
             <h2>Feels like ${weather.main.feels_like}°<h2>
                 <p>Current Conditions: ${weather.weather[0].description}</p>
                 <p>Winds are ${weather.wind.speed}MPH From the ${degToCard(wind)} <p>
             </div>`    
        })
    } else{
        document.getElementById('weather').classList.add("Weather")
        document.getElementById('weather').innerHTML = `<h2>Invalid Zip code<h2>`
    }
}