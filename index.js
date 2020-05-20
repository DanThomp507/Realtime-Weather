const weather = require('./helpers/weather')
const time = require('./helpers/time')
const argv = require('./config').argv


let fetchData = async (location) => {

  try {
    // fetch weather data 
    let temp = await weather.fetchWeatherData(location)
    // fetch current time in location
    let currentTime = await time.fetchTime(location)

    // conversion for temperature in Fahrenheit
    let tempinF = temp * 9 / 5 + 32

    return `It's ${currentTime} in ${location} and the current weather is ${temp}°C or ${tempinF.toFixed(2)}°F`

  } catch (e) {
    return `No Weather info for this location`
  }
}

fetchData(argv.location)
  .then(resp => console.log(resp))
  .catch(err => console.log(err))
