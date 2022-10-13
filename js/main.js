window.onload = function () {
    document.getElementById("convert").onclick = main;
};
function main() {
    var cupsInput = document.getElementById("cups");
    var cups = cupsInput.value;
    var valid = validInput(cups);
    if (valid) {
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
