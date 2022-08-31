//1-Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

const callText = (sec) => {
    setTimeout(() => { console.log(`Called after ${sec} seconds`) }, sec * 1000);
}

callText(2.5)

//2- Create a function that takes 2 parameters: delay and stringToLog. 
//Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments. 

const LogString = (delay, stringToLog) => {

    setTimeout(() => { console.log(stringToLog) }, delay * 1000);
}

LogString(6, "This string logged after 6 seconds")
LogString(10, "This string logged after 10 seconds")

//3-Create a button in html. When clicking this button, use the function 
//you created in the previous task to log out the text:Called after 5 seconds 5 seconds after the button is clicked.

const main = document.createElement('main')
document.body.appendChild(main)
const delayButton = document.createElement('button');

delayButton.setAttribute("id", "btn");
delayButton.innerHTML = 'Click';
main.appendChild(delayButton);
const p1 = document.createElement('p');
document.body.appendChild(p1)
delayButton.addEventListener('click', () => {
    callText(5);
})

//4- planet Logger Function
const earthLogger = () => {
    console.log("Earth");
}
const saturnLogger = () => {
    console.log("Satrun");
}

const planetLogFunction = (fun) => {
    fun === earthLogger ? earthLogger() : saturnLogger();
}

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)

// 5- Create a button with the text called "Log location".The location (latitude, longitude) of the user.
const locationButton = document.createElement('button');

locationButton.setAttribute("id", "locationbtn");
locationButton.innerHTML = 'Log location';
document.body.appendChild(locationButton);
const p2 = document.createElement('p');
document.body.appendChild(p2)

function logLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition);

    } else {
        p2.innerHTML = "Geolocation is not available.";
    }
}
function displayPosition(position) {
    p2.innerHTML = `This is the Latitude     ${position.coords.latitude} 
  <br> This is the Longitude      ${position.coords.longitude}`;
}
locationButton.addEventListener('click', logLocation)

//7-Create a function called runAfterDelay. It has two parameters: delay and callback

const callback = () => { console.log(`I get it.`) };

const runAfterDelay = (delay, callback) => {
    setTimeout(callback, delay * 1000);
}
runAfterDelay(4, callback)

//8-Check if we have double clicked on the page


let countClick = 0;
window.addEventListener('click', function (e) {

    //clearTimeout(timeOutFunction)
    countClick++;
    let timeOutFunction = setTimeout(() => {
        if (countClick === 1) {
            // handle for single click
            console.log('Single click')
        } else if (countClick === 2) {
            // handle for double click
            console.log('Double click')
        }
        countClick = 0;
    }, 500)
})

//9-Create a function called jokeCreator that has three parameters: 
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke()
}
const logFunnyJoke = () => { console.log("Funny Joke") };
const logbadJoke = () => { console.log("bad Joke") };
jokeCreator(true, logFunnyJoke, logbadJoke)

///2.3.1Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const firstFun = () => console.log("First function executed");
const secondFun = () => console.log("Second function executed");
const thirdFun = () => console.log("Third function executed")

const funArray = [firstFun, secondFun, thirdFun]
funArray.forEach((fun) => { fun() });

//2.3.2Create a function as a const and try creating a function normally. Call both functions. 
const division = (a, b) => a / b;
function sum(c, d) { c + d };
console.log(division(4, 4)) // output  1
console.log(sum(2, 3)) // undefined

//2.3.3 Create an object that has a key whose value is a function. Try calling this function.

const func = (a, b) => a * b;
obj = { name: 'Haile', school: 'HYF', fun: func }

obj.fun(3, 6)
const sqrfun = (q) => q ** 2;
console.log(sqrfun(obj.fun(3, 3)))