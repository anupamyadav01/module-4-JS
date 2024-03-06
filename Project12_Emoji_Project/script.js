const windowEl = window;
const resultContainer = document.querySelector(".results");
function displayEmoji(data = emojiList) {

    resultContainer.innerHTML = "";
    data.forEach(obj => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const emojiImg = document.createElement("div");
        const emojiName = document.createElement("div");
        const emojiDescription = document.createElement("div");

        emojiImg.setAttribute("class", "img");
        emojiName.setAttribute("class", "name");

        emojiImg.innerText = obj.emoji;
        emojiName.innerText = obj.aliases[0].toUpperCase();

        card.appendChild(emojiImg);
        card.appendChild(emojiName);

        resultContainer.appendChild(card);
    })

}

// function if user search for any emoji 
function getdata(event) {
    const query = event.target.value;
    const filteredData = emojiList.filter((singleEmoji) => {
        if (singleEmoji.tags.find((ele) => ele === query)) {
            return true;
        }
        if (singleEmoji.aliases.find((ele) => ele === query)) {
            return true;
        }
        if (singleEmoji.description.indexOf(query) !== -1) {
            return true;
        }

    })

    displayEmoji(filteredData);
    // console.log(query);
}


window.addEventListener("load", () => {
    displayEmoji();
})
// if user search for emoji
const userInput = document.getElementById("user-input");
userInput.addEventListener("input", getdata)
