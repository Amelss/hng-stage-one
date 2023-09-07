const todaysDate = document.getElementById("currentDate")
const todaysTime = document.getElementById('currentTime')

const getDate = new Date()
const month = getDate.getMonth()
const year = getDate.getFullYear()
const day = new Date().toLocaleString("en-GB", { weekday: "long" });


const updateTime = function () {
const getTime = new Date()
const hours = getTime.getHours()
const minutes = `${getTime.getMinutes()}`.padStart(2,0)

    
    todaysTime.innerHTML = `${hours}:${minutes}`
    setInterval(updateTime, 1000)
    
};

updateTime()
todaysDate.innerHTML = `${day}-${month}-${year}`




