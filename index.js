const weather = require('./helpers/weather')


let fetchData = async () => {

  try {

    let temp = await weather.fetchWeatherData()
    console.log(temp)
    // conversion for temperature in Fahrenheit
    let tempinF = temp * 9 / 5 + 32

    return `The current weather is ${temp}°C or ${tempinF.toFixed(2)}°F`

  } catch (e) {
    return `No Weather info for this location`
  }
}

fetchData()
  .then(message => console.log(message))
  .catch(err => console.log(err))
