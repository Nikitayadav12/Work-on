document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully");
});



function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}
