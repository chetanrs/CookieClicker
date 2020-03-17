/*eslint-env browser*/

var cookieCount = 0;
var cpsCount = 0;
var mainCookie = document.getElementById("main-cookie")
var cookieCounter = document.getElementById("cookieCounter");
var clearButton = document.getElementById("clearButton");
var cpsCounter = document.getElementById("cpsCounter");
var buyHand = document.getElementById("buyHandButton");

mainCookie.addEventListener("click", cookieClicked);
clearButton.addEventListener("click", clearCookies);
buyHand.addEventListener("click", function(){buyItem("hand")});

function updateCounter() {
    cookieCounter.innerHTML = cookieCount + " cookies";
}

function updateCPSCounter() {
    cpsCounter.innerHTML = cpsCount + " cookies / s";
}

function updateCount(toAdd) {
    cookieCount += toAdd;
    updateCounter();
}

function updateCPS(toAdd) {
    cpsCount += toAdd;
    updateCPSCounter();
}

function cookieClicked() {
    updateCount(1);
}

function clearCookies() {
    updateCount(-cookieCount);
    updateCPS(-cpsCount);
}

function buyItem(item) {
    switch(item) {
        case "hand":
            updateCPS(1);
            break;
        default:
    }
}

function generateCookies() {
  updateCount(cpsCount);
}

setInterval(generateCookies, 1000);
