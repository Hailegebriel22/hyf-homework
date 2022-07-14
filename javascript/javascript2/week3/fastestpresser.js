let timer = document.getElementById("set-timer");
let setTimer = document.querySelector("#set-timer");
let resultS = document.getElementById("result-s");
let resultL = document.getElementById("result-l")

let startBtn = document.querySelector("#start-btn")

function fastestPresser() {

    if (timer.value === "") {

        notetext.innerHTML = "please enter valid time to play!";
    }
    else if (!isNaN(timer.value)) {
        notetext.innerHTML = "The game starts now!";
    }

}


let counterl = 0;
let counters = 0;
function keyPressCounter() {
    document.addEventListener("keypress", e => {

        if (e.key === "l" && timer.value !== "") {
            resultL.innerHTML = `${++counterl}`;
        }
        else if (e.key === "s" && timer.value !== "") {
            resultS.innerHTML = `${++counters}`;
        }

    })

}
const result = () => {
    setTimeout(() => {

        if (counterl > counters) {

            resultL.innerHTML = "congratulations You Won!";
        }
        else if (counterl < counters) {


            resultS.innerHTML = "congratulations You Won!";

        }
        else if (timer.value !== "" && counterl === counters) {
            resultL.innerHTML = " It's a Draw";
            resultS.innerHTML = " It's a Draw";


        }
    }, timer.value * 1000)

}

const reset = () => {
    setTimeout(() => {
        window.location.reload();
    }, (timer.value * 1000) + 5000)

}


startBtn.addEventListener('click', () => {
    fastestPresser()
    keyPressCounter()
    result()
    reset()

})








