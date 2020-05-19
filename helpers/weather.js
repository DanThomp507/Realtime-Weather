const axios = require('axios')



const fetchWeatherData = async () => {
  // sample for testing without user input
  let locationName = 'New York City'

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=2f5ad5e51ce03cebaca82a800dadcaec&units=metric`)

  return resp.data.main.temp

}

module.exports = {
  fetchWeatherData
}