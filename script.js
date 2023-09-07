const todaysDate = document.getElementById("currentDate")
const todaysTime = document.getElementById('currentTime')

const getDate = new Date()
const day = getDate.getDate()
const month = getDate.getMonth()
const year = getDate.getFullYear()

const hours = getDate.getHours()
const minutes = getDate.getMinutes()

todaysDate.innerHTML = `${day}/ ${month}/${year}`
todaysTime.innerHTML = `${hours}:${minutes}`

