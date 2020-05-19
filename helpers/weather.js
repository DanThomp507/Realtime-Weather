const axios = require('axios')



const fetchWeatherData = async () => {
  // sample lat and lng for testing without user input
  let lat = 26.355440
  let lng = -80.245050

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2f5ad5e51ce03cebaca82a800dadcaec&units=metric`)

  return resp.data.main.temp

}

module.exports = {
  fetchWeatherData
}