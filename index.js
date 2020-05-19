const weather = require('./helpers/weather')
const argv = require('./config').argv


let fetchData = async (location) => {

  try {

    let temp = await weather.fetchWeatherData(location)
    // conversion for temperature in Fahrenheit
    let tempinF = temp * 9 / 5 + 32

    return `The current weather is ${temp}°C or ${tempinF.toFixed(2)}°F`

  } catch (e) {
    return `No Weather info for this location`
  }
}

fetchData(argv.location)
  .then(message => console.log(message))
  .catch(err => console.log(err))
