// Selecting the input fields
const heightInput = document.getElementById("height") as HTMLInputElement;
const weightInput = document.getElementById("weight") as HTMLInputElement;

// Selecting the button
const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;

// Selecting result display areas
const bmiValue = document.getElementById("bmiValue") as HTMLElement;
const bmiStatus = document.getElementById("bmiStatus") as HTMLElement;

calculateBtn.addEventListener("click", function(){
   let hInput :any = heightInput.value;
   let wInput : any = weightInput.value;
   let result : any = Math.floor(wInput/hInput*703);
//    console.log(result);
   bmiValue.innerText = result;

hInput.innerText = "";
wInput.innerText = "";
let status = "";
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


}

    

)