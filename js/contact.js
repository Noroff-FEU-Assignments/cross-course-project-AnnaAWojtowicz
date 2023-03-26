const contactForm = document.querySelector("#contactForm");

const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const sendButton = document.getElementById("continueButton");

function validateContactForm(event) {
    event.preventDefault();

    let isNameOk = false;
    let isEmialOk = false;
    let isSubjectOk = false;


    if (checkLength(yourName.value, 0) === true) {
        yourNameError.style.display = "none"
        isNameOk = true;
    } else {
        yourNameError.style.display = "block"
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none"
        isSubjectOk = true;
    } else {
        subjectError.style.display = "block"
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none"
        isEmialOk = true;
    } else {
        emailError.style.display = "block"
    }

    if (isNameOk === true && isEmialOk === true && isSubjectOk === true) {
        window.location.href = "../index2.html";
    }

}

sendButton.addEventListener("click", validateContactForm);


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
