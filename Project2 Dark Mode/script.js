const btn = document.querySelector(".outer-circle");
const body = document.body;
const heading = document.querySelector(".heading");

const circle = document.querySelector(".circle");

let count = 1;
btn.addEventListener("click", () => {


    if (count === 1) {
        body.style.backgroundColor = "black";
        heading.style.color = "white";
        circle.style.transform = "translateX(60px)";
        count = 0;
    } else {
        body.style.backgroundColor = "white";
        heading.style.color = "black";
        circle.style.transform = "translateX(-0px)";
        count = 1;
    }
})