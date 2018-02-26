"use strict";

const timerMinus = document.querySelector(".pomodoro__length__btn__adjust__timer-minus");
const timerPlus = document.querySelector(".pomodoro__length__btn__adjust__timer-plus");
const breakMinus = document.querySelector(".pomodoro__length__btn__adjust__break-minus");
const breakPlus = document.querySelector(".pomodoro__length__btn__adjust__break-plus");
const startBtn = document.querySelector(".pomodoro__control__btn--start");
let timerLength = document.querySelector(".pomodoro__length__btn__adjust__timer");
let breakLength = document.querySelector(".pomodoro__length__btn__adjust__break");
let timerTime = document.querySelector(".pomodoro__timer__time");

//Initial function
function init() {
    // let second = 1000;
    // let minute = 1000 * 60;
    timerLength.innerText = "25:00";
    breakLength.innerText = "05:00";
    timerTime.innerText = "25:00";
}

init();

//Reduce timer length
timerMinus.addEventListener("click", function() {
    let time = timerLength.innerText;
    let splited, splitNumber, subtracted, subtractedString;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    if (splitNumber > 1) {
        String(splitNumber);
        subtracted = --splitNumber;
        subtractedString = String(subtracted);
        if (subtractedString.length === 1) {
            timerLength.innerText = `0${subtractedString}:${splited[1]}`;
            timerTime.innerText = `0${subtractedString}:${splited[1]}`;
        } else {
            timerLength.innerText = `${subtractedString}:${splited[1]}`;
            timerTime.innerText = `${subtractedString}:${splited[1]}`;
        }
    }
})

//Add length to timer
timerPlus.addEventListener("click", function() {
    let time = timerLength.innerText;
    let splited, splitNumber, subtracted, subtractedString;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    subtracted = ++splitNumber;
    subtractedString = String(subtracted);
    if (subtractedString.length === 1) {
        timerLength.innerText = `0${subtractedString}:${splited[1]}`;
        timerTime.innerText = `0${subtractedString}:${splited[1]}`;
    } else {
        timerLength.innerText = `${subtractedString}:${splited[1]}`;
        timerTime.innerText = `${subtractedString}:${splited[1]}`;
    }
});

//Reduce break length
breakMinus.addEventListener("click", function() {
    let time = breakLength.innerText;
    let splited, splitNumber, subtracted, subtractedString;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    if (splitNumber > 1) {
        String(splitNumber);
        subtracted = --splitNumber;
        subtractedString = String(subtracted);
        if (subtractedString.length === 1) {
            breakLength.innerText = `0${subtractedString}:${splited[1]}`;
        } else {
            breakLength.innerText = `${subtractedString}:${splited[1]}`;
        }
    }
})

//Add length to break
breakPlus.addEventListener("click", function() {
    let time = breakLength.innerText;
    let splited, splitNumber, subtracted, subtractedString;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    subtracted = ++splitNumber;
    subtractedString = String(subtracted);
    if (subtractedString.length === 1) {
        breakLength.innerText = `0${subtractedString}:${splited[1]}`;
    } else {
        breakLength.innerText = `${subtractedString}:${splited[1]}`;
    }
});

//Start button
startBtn.addEventListener("click", function() {
    setInterval(timer, 1000);
});

function timer() {
    let time = timerTime.innerText;
    let splited, first, second, firstString, secondString;
    splited = time.split(":");
    first = Number(splited[0]);
    if (splited[1] === "00") {
        --first;
        splited[1] = "60";
    }
    second = Number(splited[1]);
    --second;
    firstString = String(first);
    secondString = String(second);
    if (firstString.length === 1) {
        firstString = `0${firstString}`;
    }
    if (secondString.length === 1) {
        secondString = `0${secondString}`;
    } 
    timerTime.innerText = `${firstString}:${secondString}`;
}

