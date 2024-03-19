// let firstName = document.querySelector("#first-name");
// let lastName = document.querySelector("#last-name");
// let country = document.querySelector("#country");
// let phoneNumber = document.querySelector("#phone-number");
// let state = document.querySelector("#state");
// let city = document.querySelector("#city");
// let village = document.querySelector("#village");

// window.addEventListener("load", getData);

// function getData() {
//     firstName.textContent = prompt("Enter your first name");
//     lastName.textContent = prompt("Enter your last name");
//     country.textContent = prompt("Enter your country");
//     phoneNumber.textContent = prompt("Enter your phone number");
//     state.textContent = prompt("Enter your state");
//     city.textContent = prompt("Enter your city");
//     village.textContent = prompt("Enter your village");
// }

// console.log(firstName, lastName, country, phoneNumber, state, city, village);

const storedUserData = localStorage.getItem("userInformation");

if (storedUserData) {
    console.log("User information stored");
    const userInformation = JSON.parse(storedUserData);
    document.querySelector("#first-name").textContent = userInformation.firstName;
    document.querySelector("#last-name").textContent = userInformation.lastName;
    document.querySelector("#country").textContent = userInformation.country;
    document.querySelector("#phone-number").textContent = userInformation.phoneNumber;
    document.querySelector("#state").textContent = userInformation.state;
    document.querySelector("#city").textContent = userInformation.city;
    document.querySelector("#village").textContent = userInformation.village;

} else {
    console.log("No user information stored");
    userInformationToBeStored();
}

function userInformationToBeStored() {
    const fName = prompt("Enter your first name");
    const lName = prompt("Enter your last name");
    const ctry = prompt("Enter your country");
    const phone = prompt("Enter your phone number");
    const state = prompt("Enter your state");
    const city = prompt("Enter your city");
    const village = prompt("Enter your village");


    const userInformationObject = {
        firstName: fName,
        lastName: lName,
        country: ctry,
        phoneNumber: phone,
        state: state,
        city: city,
        village: village
    }

    localStorage.setItem("userInformation", JSON.stringify(userInformationObject))

    document.querySelector("#first-name").textContent = fName;
    document.querySelector("#last-name").textContent = lName;
    document.querySelector("#country").textContent = ctry;
    document.querySelector("#phone-number").textContent = phone;
    document.querySelector("#state").textContent = state;
    document.querySelector("#city").textContent = city;
    document.querySelector("#village").textContent = village;

}