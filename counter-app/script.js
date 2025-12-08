//  selecting the elements
var count = document.getElementById("count");
var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
var reset = document.getElementById("reset");
//  declaring the variables
var countNum = 0;
//  adding event listeners
decrement.addEventListener("click", function () {
    countNum--;
    count.innerText = countNum.toString();
});
increment.addEventListener("click", function () {
    countNum++;
    count.innerText = countNum.toString();
});
reset.addEventListener("click", function () {
    countNum = 0;
    count.innerText = countNum.toString();
});
