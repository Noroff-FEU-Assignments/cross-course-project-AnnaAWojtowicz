const contactForm = document.querySelector("#contactForm");

const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");

const validationDate = document.querySelector("#validationDate");
const validationDateError = document.querySelector("#validationDateError");

const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

const continueButton = document.getElementById("continueButton");

function validateCardForm(event) {
    event.preventDefault();
    debugger;
    let isNameOk = false;
    let isCardNumberOk = false;
    let isValidationDateOk = false;
    let isCvvOk = false;


    if (checkLength(yourName.value, 0) === true) {
        yourNameError.style.display = "none"
        isNameOk = true;
    } else {
        yourNameError.style.display = "block"
    }

    if (checkLength(cardNumber.value, 15) === true) {
        cardNumberError.style.display = "none"
        isCardNumberOk = true;
    } else {
        cardNumberError.style.display = "block"
    }

    if (checkCardDate(validationDate.value) === true) {
        validationDateError.style.display = "none"
        isValidationDateOk = true;
    } else {
        validationDateError.style.display = "block"
    }

    if (checkLength(cvv.value, 2) === true) {
        cvvError.style.display = "none"
        isCvvOk = true;
    } else {
        cvvError.style.display = "block"
    }

    if (isNameOk === true && isCardNumberOk === true && isValidationDateOk === true && isCvvOk === true) {
        window.location.href = "../shop/shop_summary.html";
    }

}

continueButton.addEventListener("click", validateCardForm);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkCardDate(card) {
    const regEx = new RegExp("(0[1-9]|10|11|12)/20[0-9]{2}$");
    const patternMatches = regEx.test(card);
    return patternMatches;
}
