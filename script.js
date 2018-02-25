"use strict";

const timerMinus = document.querySelector(".pomodoro__length__btn__adjust__timer-minus");
const timerPlus = document.querySelector(".pomodoro__length__btn__adjust__timer-plus");
const breakMinus = document.querySelector(".pomodoro__length__btn__adjust__break-minus");
const breakPlus = document.querySelector(".pomodoro__length__btn__adjust__break-plus");
let timerLength = document.querySelector(".pomodoro__length__btn__adjust__timer");
let breakLength = document.querySelector(".pomodoro__length__btn__adjust__break");
let timerTime = document.querySelector(".pomodoro__timer__time");

//Initial function
function init() {
    // let second = 1000;
    // let minute = 1000 * 60;
    timerLength.innerText = "25:00";
    breakLength.innerText = "5:00";
    timerTime.innerText = "25:00";
}

init();

//Add length to timer
timerMinus.addEventListener("click", function() {
    let time = timerLength.innerText;
    let splited, splitNumber, subtracted;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    if (splitNumber > 1) {
        subtracted = --splitNumber;
        timerLength.innerText = `${subtracted}:${splited[1]}`;
        timerTime.innerText = `${subtracted}:${splited[1]}`;
    }
})

//Reduce timer length
timerPlus.addEventListener("click", function() {
    let time = timerLength.innerText;
    let splited, splitNumber, subtracted;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    subtracted = ++splitNumber;
    timerLength.innerText = `${subtracted}:${splited[1]}`;
    timerTime.innerText = `${subtracted}:${splited[1]}`;
});

//Add length to break
breakMinus.addEventListener("click", function() {
    let time = breakLength.innerText;
    let splited, splitNumber, subtracted;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    if (splitNumber > 1) {
        subtracted = --splitNumber;
        breakLength.innerText = `${subtracted}:${splited[1]}`;
    }
})

//Reduce break length
breakPlus.addEventListener("click", function() {
    let time = breakLength.innerText;
    let splited, splitNumber, subtracted;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    subtracted = ++splitNumber;
    breakLength.innerText = `${subtracted}:${splited[1]}`;
});

