//  selecting the elements
const count = document.getElementById("count") as HTMLElement;
const decrement = document.getElementById("decrement") as HTMLButtonElement;
const increment = document.getElementById("increment") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;

//  declaring the variables
let countNum = 0;

//  adding event listeners
decrement.addEventListener("click", () => {
    countNum--;
    count.innerText = countNum.toString();
});

increment.addEventListener("click", () => {
    countNum++;
    count.innerText = countNum.toString();
});

reset.addEventListener("click", () => {
    countNum = 0;
    count.innerText = countNum.toString();
});