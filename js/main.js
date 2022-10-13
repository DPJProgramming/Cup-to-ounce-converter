window.onload = function () {
    document.getElementById("convert").onclick = main;
};
function main() {
    var cupsInput = document.getElementById("cups");
    var cups = cupsInput.value;
    var valid = validInput(cups);
    if (valid) {
        var cupsSpan = cupsInput.nextElementSibling;
        cupsSpan.innerHTML = "*";
        calculate(cups);
    }
    else {
        cupsInput.nextElementSibling.innerHTML = "Enter a number";
    }
}
function validInput(cups) {
    if (cups == "" || isNaN(cups)) {
        return false;
    }
    else {
        return true;
    }
}
function calculate(cups) {
    var totalOunces = cups * 8;
    displayResults(totalOunces);
}
function displayResults(totalOunces) {
    var result = document.getElementById("ounces");
    result.value = totalOunces.toString();
}
