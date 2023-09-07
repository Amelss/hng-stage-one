const todaysDate = document.getElementById("currentDate")
const todaysTime = document.getElementById('currentTime')

const getDate = new Date()
const month = getDate.getMonth()
const year = getDate.getFullYear()
const day = new Date().toLocaleString("en-GB", { weekday: "long" });
const hours = getDate.getHours()
const minutes = getDate.getMinutes()

todaysDate.innerHTML = `${day}/ ${month}/${year}`
todaysTime.innerHTML = `${hours}:${minutes}`



