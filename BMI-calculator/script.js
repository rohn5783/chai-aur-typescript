// Selecting the input fields
var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
// Selecting the button
var calculateBtn = document.getElementById("calculateBtn");
// Selecting result display areas
var bmiValue = document.getElementById("bmiValue");
var bmiStatus = document.getElementById("bmiStatus");
calculateBtn.addEventListener("click", function () {
    var hInput = heightInput.value;
    var wInput = weightInput.value;
    var result = Math.floor(wInput / hInput * 703);
    //    console.log(result);
    bmiValue.innerText = result;
    hInput.innerText = "";
    wInput.innerText = "";
    var status = "";
    //  statement for bmi status
    if (result < 18.5) {
        status = "Underweight";
    }
    else if (result >= 18.5 && result < 24.9) {
        status = "Normal Weight";
    }
    else if (result >= 25 && result < 29.9) {
        status = "Overweight";
    }
    else {
        status = "Obese";
    }
    bmiStatus.innerHTML = status;
});
