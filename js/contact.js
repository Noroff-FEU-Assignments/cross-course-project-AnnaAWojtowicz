const contactForm = document.querySelector("#contactForm");

const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordtError");

const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");


function validateContactForm(event) {
    event.preventDefault();

    if (checkLength(yourName.value, 0) === true) {
        yourNameError.style.display = "none"
    } else {
        yourNameError.style.display = "block"
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none"
    } else {
        emailError.style.display = "block"
    }


    if (checkLength(password.value, 9) === true) {
        passwordError.style.display = "none"
    } else {
        passwordError.style.display = "block"
    }



    if (checkLength(confirmPassword.value, 9) === true) {
        confirmPasswordError.style.display = "none"
    } else {
        confirmPasswordError.style.display = "block"
    };
}

contactForm.addEventListener("continue", validateContactForm);

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