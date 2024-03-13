let data = [
    {
        firstName: "Yashasvi",
        lastname: "Jaiswal",
        country: "India",
        score: 95
    },
    {
        firstName: "Rishabh",
        lastname: "Pant",
        country: "India",
        score: 96
    },
    {
        firstName: "Jasprit",
        lastname: "Bumrah",
        country: "India",
        score: 101
    }
];

let tableBody = document.querySelector("#table-body");

function displayData() {
    data.sort((a, b) => {
        return b.score - a.score;;
    })
    let playersHTML = "";
    data.forEach((player, index) => {
        playersHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>
                <span>${player.firstName}</span>
                <span>${player.lastname}</span>
                </td>
                <td>${player.score}</td>
                <td>${player.country}</td>
                <td class="edit-btns">
                <span class="plus-five">+5</span>
                <span class="minus-five">-5</span>
                <span class="delete-icon"><i class="fas fa-trash"></i></span>
                    </td>
            </tr>`;
    });

    tableBody.innerHTML = playersHTML;
}

window.addEventListener("load", displayData);
const container = document.querySelector('.container');
const formEl = document.querySelector(".form");
const closeBtn = document.querySelector(".close-btn")
const clickmebtn = document.querySelector("#button");


clickmebtn.addEventListener("click", () => {

    formEl.style.top = "50%";
    formEl.style.left = "50%";
    formEl.style.transform = "translate(-50%, -50%)";
    formEl.style.opacity = "1"

    container.classList.add("active");

});

closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    formEl.style.opacity = "0"
    formEl.style.top = "-30%";
    container.classList.remove("active");

    fname.value = "";
    lname.value = "";
    usercountry.value = "";
    userscore.value = "";
})

// input from form

let fname = document.getElementById("first-name");
let lname = document.getElementById("last-name");
let usercountry = document.getElementById("country");
let userscore = document.getElementById("score");
const addPlayer = document.getElementById("add-player");
const editBtns = document.querySelectorAll(".edit-btns");

console.log(editBtns);
// editBtn.forEach((singlebutton) => {
//     singlebutton.addEventListener("click", () => {
//         console.log("cliced");
//     });
// });

let newPlaysers = {};

addPlayer.addEventListener("click", (e) => {
    e.preventDefault();
    if (fname.value === "" || lname.value === "" || usercountry.value === "" || userscore.value === "") {
        alert("Please fill all the fields")
    } else {
        newPlaysers.firstName = fname.value
        newPlaysers.lastname = lname.value
        newPlaysers.country = usercountry.value
        newPlaysers.score = userscore.value

        data.push(newPlaysers);
        fname.value = "";
        lname.value = "";
        usercountry.value = "";
        userscore.value = "";

        formEl.style.opacity = "0"
        formEl.style.top = "-30%";
        container.classList.remove("active");

        displayData();
    }
})
