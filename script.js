const todaysDate = document.getElementById("currentDate")
const todaysTime = document.getElementById('currentTime')

const getDate = new Date()
const month = getDate.getMonth()
const year = getDate.getFullYear()
const day = new Date().toLocaleString("en-GB", { weekday: "long" });
const time = getDate.toUTCString()



todaysTime.innerHTML = `Time: ${time}`

todaysDate.innerHTML = `Day: ${day}`


console.log(time);



