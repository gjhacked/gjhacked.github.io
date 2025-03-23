const validationForm = document.getElementById("validation");
validationForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

function checkPassword() {
    const password = document.getElementById("password");
    if (password.value === "chezdev$0705") {
        window.open("index.html", "_blank");
    } else {
        alert("Wrong...");
    }
}