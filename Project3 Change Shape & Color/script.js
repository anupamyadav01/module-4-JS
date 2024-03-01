const circle = document.querySelector(".circle");
const shape = document.querySelector("#shape");
const body = document.body;

const changeColor = document.querySelector(".change-color");
const changeShapeBtn = document.querySelector(".change-shape");

let colors = ["#FF5733", "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845", "#7D3C98", "#9A12B3", "#4A235A", "#1F618D", "#2874A6", "#2980B9", "#5DADE2", "#48C9B0", "#16A085", "#1E8449", "#239B56", "#27AE60", "#2ECC71", "#58D68D", "#82E0AA", "#F4D03F", "#F7DC6F", "#FAD7A0", "#FDEBD0"];

const shapesArr = [
    "50% 0%, 0% 100%, 100% 100%",
    "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%",
    "50% 0%, 100% 50%, 50% 100%, 0% 50%",
    "50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%",
    "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%"
]

changeColor.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 20);
    circle.style.backgroundColor = colors[randomNumber];
    let randomNumber2 = randomNumber + 1;
    body.style.backgroundColor = colors[randomNumber2];
});

changeShapeBtn.addEventListener("click", changeShape);

function changeShape() {
    const randomNum = Math.floor(Math.random() * shapesArr.length);
    shape.style.setProperty("--shape", shapesArr[randomNum]);
}
