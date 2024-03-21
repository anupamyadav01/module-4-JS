const textArea = document.querySelector("#textarea");

let saveDataToLocalStorage = () => {
    let data = textArea.value;
    // console.log(data);
    localStorage.setItem("userData", (data));
}
textArea.addEventListener("input", saveDataToLocalStorage);
