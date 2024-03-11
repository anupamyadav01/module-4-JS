const startbtn = document.querySelector("#start");
const pausebtn = document.querySelector("#pause");
const resetbtn = document.querySelector("#reset");

let hourEl = document.querySelector("#hour");
let minuteEl = document.querySelector("#minute");
let secondEl = document.querySelector("#second");
let miliSecondsEl = document.querySelector("#milisecond");


let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let timer = null;

function startTimer() {
    if (!timer) {
        timer = true;
        stopWatch();
    }
}

function stopTimer() {
    timer = false;
    stopWatch();
}

function resetTimer() {
    timer = null;
    stopWatch();
}
let id;
function stopWatch() {
    if (timer) {
        id = setInterval(() => {
            count += 1;
            if (count == 100) {
                count = 0;
                second += 1;
                if (second == 60) {
                    second = 0;
                    minute += 1;
                    if (minute == 60) {
                        minute = 0;
                        hour += 1;
                    }
                }
            }


            hourEl.innerHTML = hour < 10 ? "0" + hour : hourEl;
            minuteEl.innerHTML = minute < 10 ? "0" + minute : minute;
            secondEl.innerHTML = second < 10 ? "0" + second : second;
            miliSecondsEl.innerHTML = count < 10 ? "0" + count : count;

        }, 10);
    } else if (timer == false) {
        clearInterval(id);
    } else if (timer == null) {
        hour = 0;
        minute = 0;
        second = 0;
        count = 0;
        clearInterval(id);
        hourEl.innerHTML = "00";
        minuteEl.innerHTML = "00";
        secondEl.innerHTML = "00";
        miliSecondsEl.innerHTML = "00";
    }
}

startbtn.addEventListener("click", startTimer);
pausebtn.addEventListener("click", stopTimer);
resetbtn.addEventListener("click", resetTimer);
