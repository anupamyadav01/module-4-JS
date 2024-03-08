const hourEl = document.getElementById("hourel");
const minutesEl = document.getElementById("minuteel");
const secondsEl = document.getElementById("secondel");

// getting buttons 
const startbtn = document.getElementById("start_btn");
const stopbtn = document.getElementById("stop_btn");
const resetbtn = document.getElementById("reset_btn");
const lapbtn = document.getElementById("lap_btn");



setInterval(function () {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    hourEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
}, 1000);