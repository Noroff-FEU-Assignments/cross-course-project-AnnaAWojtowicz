const contactForm = document.querySelector("#contactForm");

const yourName = document.querySelector("#name");
const yourNameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const continueButton = document.getElementById("continueButton");

function validateContactForm(event) {
    event.preventDefault();
    let isNameOk = false;
    let isEmialOk = false;
    let isPasswordOk = false;
    let isConfirmPasswordOk = false;



    if (checkLength(yourName.value, 0) === true) {
        yourNameError.style.display = "none";
        isNameOk = true;
    } else {
        yourNameError.style.display = "block"
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
        isEmialOk = true;
    } else {
        emailError.style.display = "block"
    }


    if (checkLength(password.value, 9) === true) {
        passwordError.style.display = "none";
        isPasswordOk = true;
    } else {
        passwordError.style.display = "block"
    }

    if (checkLength(confirmPassword.value, 9) === true) {
        confirmPasswordError.style.display = "none";
        isConfirmPasswordOk = true;
    } else {
        confirmPasswordError.style.display = "block"
    };

    if (isNameOk === true && isEmialOk === true && isPasswordOk === true && isConfirmPasswordOk === true) {
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

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}