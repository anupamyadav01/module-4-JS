const userDate = document.getElementById("user-date");
const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", () => {
    const birthDayValue = userDate.value;
    if(birthDayValue  === ""){
        alert("Please enter your date of birth!");
    } else {
        let userAge = getUserAge(birthDayValue);
        displayResult(userAge);
    }    
});

function getUserAge(birthday) {    
    const [year, month, day] = birthday.split("-").map((item)=> parseInt(item));    
    const today = new Date();        
    let age = today.getFullYear() - year;             
  
    if (today.getMonth() < month - 1 || (today.getMonth() == month - 1 && today.getDate() < day)) {
        age--;
    }          
    return age;
}

function displayResult(age){                     
    const answer = document.querySelector(".answer");                       
    answer.innerHTML = `Your Age is ${age} Years Old.`;                    
}   