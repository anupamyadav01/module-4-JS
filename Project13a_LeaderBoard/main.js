document.addEventListener("DOMContentLoaded", () => {
    const data = [
        {
            firstName: "AB de ",
            lastName: "Villiers",
            country: "South Africa",
            score: 95
        },
        {
            firstName: "Rishabh",
            lastName: "Pant",
            country: "India",
            score: 96
        },
        {
            firstName: "Jasprit",
            lastName: "Bumrah",
            country: "India",
            score: 101
        }
    ];

    const tableBody = document.querySelector("#table-body");

    function displayData() {
        data.sort((a, b) => {
            return b.score - a.score;
        });

        let playersHTML = "";
        data.forEach((player, index) => {
            playersHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <span>${player.firstName}</span>
                        <span>${player.lastName}</span>
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

        const editBtns = document.querySelectorAll(".edit-btns");
        editBtns.forEach((editBtn, index) => {
            editBtn.addEventListener("click", (e) => {
                const target = e.target;
                if (target.classList.contains("fa-trash")) {
                    data.splice(index, 1);
                    displayData();
                } else if (target.classList.contains("plus-five")) {
                    data[index].score += 5;
                    displayData();
                } else if (target.classList.contains("minus-five")) {
                    data[index].score -= 5;
                    displayData();
                }
            });
        });
    }

    displayData();

    const container = document.querySelector('.container');
    const formEl = document.querySelector(".form");
    const closeBtn = document.querySelector(".close-btn");
    const addPlayerBtn = document.querySelector("#button");

    addPlayerBtn.addEventListener("click", () => {
        formEl.style.top = "50%";
        formEl.style.left = "50%";
        formEl.style.transform = "translate(-50%, -50%)";
        formEl.style.opacity = "1";
        container.classList.add("active");
    });

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formEl.style.opacity = "0";
        formEl.style.top = "-30%";
        container.classList.remove("active");
        clearForm();
    });

    function clearForm() {
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("selectYourCountry").value = "Select your country";
        document.getElementById("score").value = "";
    }

    const addPlayer = document.getElementById("add-player");

    addPlayer.addEventListener("click", (e) => {
        e.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const country = document.getElementById("selectYourCountry").value;
        const score = parseInt(document.getElementById("score").value);

        if (!firstName || !lastName || !country || isNaN(score)) {
            alert("Please fill all the fields with valid data.");
            return;
        }

        data.push({ firstName, lastName, country, score });
        displayData();
        clearForm();
        formEl.style.opacity = "0";
        formEl.style.top = "-30%";
        container.classList.remove("active");
    });
});