// const box = document.querySelector(".color");
// const colorCode = document.querySelector(".colorcode");


// window.addEventListener("load", () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     let rgb = `rgb(${red}, ${green}, ${blue})`;
//     box.style.backgroundColor = rgb;
//     box.innerText = rgb;
// })

const boxes = document.querySelectorAll(".color");
console.log(boxes.length);

for (let i = 0; i < boxes.length; i++) {
    let singleBox = boxes[i];

    window.addEventListener("load", () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        let rgb = `rgb(${red}, ${green}, ${blue})`;
        singleBox.style.backgroundColor = rgb;
        singleBox.innerText = rgb;
    })

}