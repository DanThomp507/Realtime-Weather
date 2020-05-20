const axios = require('axios')
const timezone = require('moment-timezone')
const moment = require('moment')


getDateWithUTCOffset = (inputOffset) => {
  // get the current time
  let now = new Date()

  // Timezone offset in hours
  let currentTzOffset = -now.getTimezoneOffset() / 60

  // Timezone difference
  let deltaTzOffset = inputOffset - currentTzOffset

  // get the number of milliseconds since unix epoch 
  let nowTimestamp = now.getTime()

  // convert hours to milliseconds (tzOffsetMilli*1000*60*60)
  let deltaTzOffsetMilli = deltaTzOffset * 1000 * 60 * 60

  // new Date object with the timezone offset applied.
  let outputDate = new Date(nowTimestamp + deltaTzOffsetMilli)

  return outputDate
}

const fetchTime = async (location) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2f5ad5e51ce03cebaca82a800dadcaec&units=metric`)

  // timezone is returned in seconds from Open Weather API
  const tzOffset = resp.data.timezone / 3600

  // use helper function to get the current time in location
  let time = getDateWithUTCOffset(tzOffset)

  // improve readability of time format
  let formattedTime = moment(time).format('h:mm a')

  return formattedTime
}

module.exports = {
  fetchTime
}