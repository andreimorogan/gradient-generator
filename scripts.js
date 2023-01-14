const firstColor = document.querySelector("#color1");
const secondColor = document.querySelector("#color2");
const css = document.querySelector("h3");
const body = document.querySelector("body");
const gradientButton = document.querySelector("#random-button");

function changeColor() {
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
    css.textContent = "background: " + body.style.background + ";";
}

firstColor.addEventListener("input", changeColor);

secondColor.addEventListener("input", changeColor);

function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function randomize() {
    firstColor.value = generateRandomColor();
    secondColor.value = generateRandomColor();
    changeColor();
}

gradientButton.addEventListener("click", randomize);



