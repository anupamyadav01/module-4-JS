const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function displayTime() {


    setInterval(() => {
        const date = new Date();
        hourEl.innerText = date.getHours()
        if (hourEl.innerText < 10) {
            hourEl.innerText = "0" + hourEl.innerText;
        } else {
            hourEl.innerText = hourEl.innerText;
        }
        minutesEl.innerText = date.getMinutes();
        if (minutesEl.innerText < 10) {
            minutesEl.innerText = "0" + minutesEl.innerText;
        } else {
            minutesEl.innerText = minutesEl.innerText;
        }
        secondsEl.innerText = date.getSeconds();
        if (secondsEl.innerText < 10) {
            secondsEl.innerText = "0" + secondsEl.innerText;
        } else {
            secondsEl.innerText = secondsEl.innerText;
        }
    }, 1000);
}

window.addEventListener("load", () => {
    displayTime();
})

