const textarea = document.getElementById("textarea");
const color = document.getElementById("color-picker");
const btn = document.querySelector(".add-notes-btn");

let count = 0;

const parentContainer = document.querySelector(".inner-box");
const displayNone = document.querySelector(".display-none");
btn.addEventListener("click", addNotes);
color.addEventListener("change", () => {
    textarea.style.backgroundColor = color.value;
})

function addNotes() {
    
    count++;
    if (textarea.value == "") {
        alert("Please enter some text !!")
        return;
    } else {
        displayNone.style.display = "none";
        const childDiv = document.createElement("div");
        const para = document.createElement("p");
        const crossBtn = document.createElement("button");

        childDiv.appendChild(para);
        childDiv.appendChild(crossBtn);
        childDiv.setAttribute("class", "childDiv");
        crossBtn.innerText = "Delete";
        crossBtn.setAttribute("class", "crossBtn");
        para.innerText = textarea.value;

        textarea.value = "";
        childDiv.style.backgroundColor = color.value;
        parentContainer.appendChild(childDiv);

        crossBtn.addEventListener("click", () => {
            childDiv.style.display = "none";
            count--;
            if(count == 0){
                displayNone.style.display = "block";
            }
        })
    }
}
