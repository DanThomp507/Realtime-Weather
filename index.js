const weather = require('./helpers/weather')


let fetchData = async () => {

  try {

    let temp = await weather.fetchWeatherData()

    // conversion for temperature in Fahrenheit
    let tempinF = temp * 9 / 5 + 32

    return `The current weather is ${temp}°C or ${tempinF}°F`

  } catch (e) {
    return `No Weather info for this location`
  }
}

fetchData()
  .then(message => console.log(message))
  .catch(err => console.log(err))