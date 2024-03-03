const userInput = document.getElementById("user-input");
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        const target = event.target;
        const btnValue = target.textContent;

        if (btnValue === "AC") {
            userInput.value = "";
        } else if (btnValue === "DEL") {
            userInput.value = userInput.value.substring(0,userInput.value.length - 1);
            if(userInput.value.length == 0){
                userInput.value = 0;
            }

        } else if (btnValue === "=") {
            userInput.value = eval(userInput.value)
        } else {
            if (userInput.value == "0") {
                userInput.value = btnValue;
            } else {
                userInput.value += btnValue;
            }
        }
    })
}
