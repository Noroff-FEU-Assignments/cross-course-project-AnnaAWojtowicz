const contactForm = document.querySelector("#contactForm");

const yourName = document.querySelector("#name");
const yourNameError = document.querySelector("#nameError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");


const continueButton = document.getElementById("continueButton");

function validateContactForm(event) {
    event.preventDefault();
    let isNameOk = false;
    let isPasswordOk = false;




    if (checkLength(yourName.value, 0) === true) {
        yourNameError.style.display = "none";
        isNameOk = true;
    } else {
        yourNameError.style.display = "block"
    }



    if (checkLength(password.value, 9) === true) {
        passwordError.style.display = "none";
        isPasswordOk = true;
    } else {
        passwordError.style.display = "block"
    }


    if (isNameOk === true && isPasswordOk === true) {
        window.location.href = "../index2.html";
    }
}

continueButton.addEventListener("click", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
