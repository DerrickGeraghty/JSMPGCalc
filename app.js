let errors = [];

function isValidNumeric(value) {
    let number = parseInt(value);
    if (isNaN(number) == true) {
        return false;
    } else {
        return true;
    }
};

function calculateMPG(milesTravelled, gallonsConsumed) {
    if (isValidNumeric(milesTravelled) == false || milesTravelled == 0) {
        errors.push("Please enter a valid miles travelled");
    }
    if (isValidNumeric(gallonsConsumed) == false || gallonsConsumed == 0) {
        errors.push("Please enter a valid gallons consumed")
    }
    let mpg = milesTravelled / gallonsConsumed;
    return Math.round(mpg);
};

const miles = document.getElementById("txtMiles");
const gallons = document.getElementById("txtGallons");
const calculate = document.getElementById("btnCalculate");
let answer = document.getElementById("answer");

calculate.addEventListener("click", calculateButtonHandler);

function calculateButtonHandler() {
    let milesValue = miles.value;
    let gallonsValue = gallons.value;
    let realAnswer = calculateMPG(milesValue, gallonsValue);
    console.log(errors.length);
    if (errors.length == 1) {
        answer.innerHTML = `<ul style="color: red;"><li>${errors[0]}</li></ul>`;
    } else if (errors.length == 2) {
        answer.innerHTML = `<ul style="color: red;"><li>${errors[0]}</li> <li>${errors[1]}</li> </ul>`;
    } else {
        answer.innerHTML = ``;
        answer.innerHTML = `<p> Miles travelled: ${milesValue} Gallons Consumed: ${gallonsValue} MPG: ${realAnswer}`;
    }

    errors = [];
};

