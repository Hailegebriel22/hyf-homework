// Create your own json file

/* JSONData='{
    "teamname": "Denmark National Team",
    "group": "A",
    "managernames": {
        "headmanager": "Kasper Hjulmand",
        "assistantmanager": "Morten Wieghorst"
    },
    "averageage": 27.74,
    "worldrank": 11,
    "groupopponents":["France","Tusina","Australia"]
}' 
 */

// Find a cool api

function fetchHarvard() {
    fetch('https://api.harvardartmuseums.org/gallery?apikey=495c8bdc-2017-45ec-9aaf-bad408249365')
        .then(response => response.json())
        .then(data => console.log(data));
}
fetchHarvard()

/* Harvard Art Museums API
The api responds  with a string.
The data structured as array of objects as bellow,  

{info: {…}, records: Array(10)}
info: {totalrecordsperquery: 10, totalrecords: 64, pages: 7, page: 1, next: 'https://api.harvardartmuseums.org/gallery?apikey=495c8bdc-2017-45ec-9aaf-bad408249365&page=2'}
records: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
[[Prototype]]: Object */

//  create a Weather app

/* The chosen city  
Temperature   
Icon for the weather type
Wind speed  
How clowdy it is   
When sunrise and sunset is      */



const cityButton = document.getElementById("weather-btn")
const ul = document.createElement('ul');

function weatherData() {
    removeAllChildNodes(ul)
    if (city.value === "") {
        alert("Please write a city for weather information!")
    }
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=bad81b49a2bd6444de220852346826b0`)

            .then(response => response.json())
            .then(data => { weatherDisplay(data) })
    }
}

function weatherDisplay(data) {
    const weatherInfoTitle = document.createElement('h1')
    ul.appendChild(weatherInfoTitle)
    weatherInfoTitle.innerHTML = `The latest weather in  ${data.name} :`
    const weatherInfoList = {
        "City": `${data.name}`, "Temperature": `${data.main.temp}`,
        "Icon for the weather type": `${data.weather[0].icon}`,
        "Wind speed": `${data.wind.speed}`, "Cloudiness": `${data.weather[0].description}`,
        "Sunrise": `${data.sys.sunrise}`, "Sunset": `${data.sys.sunset}`
    }

    Object.entries(weatherInfoList).forEach(entry => {
        const [key, value] = entry;
        const li = document.createElement('li');
        li.innerHTML = `${key}  ${value}`
        ul.appendChild(li)

    });
    document.body.appendChild(ul)

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Use my current position weather API

const weatherByLocationbtn = document.getElementById("weatherByLocation-btn")
function logLocation() {
    removeAllChildNodes(ul)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);

    } else {
        alert("Geolocation is not available.");
    }
}

function getPosition(position) {
    const latLon = [position.coords.latitude, position.coords.longitude];
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=bad81b49a2bd6444de220852346826b0`)
        .then(response => response.json())
        .then(data => {
            weatherDisplay(data)
        })

}

weatherByLocationbtn.addEventListener('click', logLocation)// Use my current position weather API

cityButton.addEventListener('click', () => {
    weatherData()
})