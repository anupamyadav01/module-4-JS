const container = document.querySelector(".container");

const h1 = document.querySelector("h1");
const keyCodeEl = document.querySelector(".key-code");
const body = document.body;
body.addEventListener("keyup", (event) => {
    const box = document.querySelector(".box");
    let pressedKey = event.key;
    let pressedKeyCode = event.keyCode;

    let span = document.createElement("span");
    
    h1.innerText = "You pressed ";
    span.innerText = pressedKey;
    span.style.fontSize = "3rem"
    span.style.letterSpacing = "2px"
    h1.appendChild(span);
    h1.style.fontSize = "2.5rem";
    keyCodeEl.style.display = "block";
    keyCodeEl.innerText = pressedKeyCode;
})
