let timerValue = document.getElementById("set-timer").value;
let setTimer = document.querySelector("#set-timer");

let startBtn = document.querySelector("#start-btn")

function fastestPresser() {

    if (document.getElementById("set-timer").value === "") {

        notetext.innerHTML = "please enter valid time to play!";
    }
    else if (!isNaN(document.getElementById("set-timer").value)) {
        notetext.innerHTML = "The game starts now!";
    }

}


let counterl = 1;
let counters = 1;
function keyPressCounter() {
    document.addEventListener("keypress", e => {

        if (e.key === "l" && document.getElementById("set-timer").value !== "") {
            document.getElementById("result-l").innerHTML = `${counterl++}`;
        }
        else if (e.key === "s" && document.getElementById("set-timer").value !== "") {
            document.getElementById("result-s").innerHTML = `${counters++}`;
        }

    })

}
const result = () => {
    setTimeout(() => {

        if (counterl > counters) {

            document.getElementById("result-l").innerHTML = "congratulations You Won!";
        }
        else if (counterl < counters) {


            document.getElementById("result-s").innerHTML = "congratulations You Won!";

        }
        else if (document.getElementById("set-timer").value !== "" && counterl === counters) {
            document.getElementById("result-s").innerHTML = " It's a Draw";
            document.getElementById("result-l").innerHTML = " It's a Draw";


        }
    }, document.getElementById("set-timer").value * 1000)

}

const reset = () => { 
    setTimeout(() => {
        window.location.reload();
    }, (document.getElementById("set-timer").value * 1000) + 5000)

}


startBtn.addEventListener('click', () => {
    fastestPresser()
    keyPressCounter()
    result()
    reset()

})








