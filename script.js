// Counter1

let number1 = 0;

const like1 = document.querySelector("#like1");
const dislike1 = document.querySelector("#dislike1");

const display1 = document.querySelector("#display1");

like1.addEventListener("click", () => {
    number1++;
    display1.textContent = number1;
})

dislike1.addEventListener("click", () => {
    number1--;
    display1.textContent = number1;
})

// Counter2

let number2 = 0;

const like2 = document.querySelector("#like2");
const dislike2 = document.querySelector("#dislike2");

const display2 = document.querySelector("#display2");

like2.addEventListener("click", () => {
    number2++;
    display2.textContent = number2;
})

dislike2.addEventListener("click", () => {
    number2--;
    display2.textContent = number2;
})

// Counter3

let number3 = 0;

const like3 = document.querySelector("#like3");
const dislike3 = document.querySelector("#dislike3");

const display3 = document.querySelector("#display3");

like3.addEventListener("click", () => {
    number3++;
    display3.textContent = number3;
})

dislike3.addEventListener("click", () => {
    number3--;
    display3.textContent = number3;
})