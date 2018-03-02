"use strict";

const timerMinus = document.querySelector(".pomodoro__length__btn__adjust__timer-minus");
const timerPlus = document.querySelector(".pomodoro__length__btn__adjust__timer-plus");
const breakMinus = document.querySelector(".pomodoro__length__btn__adjust__break-minus");
const breakPlus = document.querySelector(".pomodoro__length__btn__adjust__break-plus");
const startBtn = document.querySelector(".pomodoro__control__btn--start");
const stopBtn = document.querySelector(".pomodoro__control__btn--stop");
const resetBtn = document.querySelector(".pomodoro__control__btn--reset");
const audio = document.querySelector("audio");
let timerLength = document.querySelector(".pomodoro__length__btn__adjust__timer");
let breakLength = document.querySelector(".pomodoro__length__btn__adjust__break");
let timerName = document.querySelector(".pomodoro__timer__name");
let timerTime = document.querySelector(".pomodoro__timer__time");
let titleBar = document.querySelector("title");
let timerBorder = document.querySelector(".pomodoro__timer");
let startBtnPushed;
let timer;

//Initial function
function init() {
    timerLength.innerText = "25:00";
    breakLength.innerText = "05:00";
    timerTime.innerText = "25:00";
    timerName.innerText = "Timer";
    timerBorder.style.borderColor = "rgb(245, 13, 13)";
    timerName.style.color = "rgb(221, 35, 35)";
    startBtnPushed = false;
}

init();

//Reduce timer length
timerMinus.addEventListener("click", function() {
    let time = timerLength.innerText;
    let splited, splitNumber, subtracted, subtractedString;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    if (timerName.innerText === "Timer" && timerLength.innerText !== "01:00") {
        clearInterval(timer);
        startBtnPushed = false;
    }
    if (splitNumber > 1) {
        String(splitNumber);
        subtracted = --splitNumber;
        subtractedString = String(subtracted);
        if (subtractedString.length === 1) {
            timerLength.innerText = `0${subtractedString}:${splited[1]}`;
            if (timerName.innerText === "Timer") {
                timerTime.innerText = `0${subtractedString}:${splited[1]}`;
                titleBar.innerText = "Pomodoro Timer";
            }
        } else {
            timerLength.innerText = `${subtractedString}:${splited[1]}`;
            if (timerName.innerText === "Timer") {
                timerTime.innerText = `${subtractedString}:${splited[1]}`;
                titleBar.innerText = "Pomodoro Timer";
            }
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
    if (timerName.innerText === "Timer") {
        clearInterval(timer);
        startBtnPushed = false;
    }
    if (subtractedString.length === 1) {
        timerLength.innerText = `0${subtractedString}:${splited[1]}`;
        if (timerName.innerText === "Timer") {
            timerTime.innerText = `0${subtractedString}:${splited[1]}`;
            titleBar.innerText = "Pomodoro Timer";
        }
    } else {
        timerLength.innerText = `${subtractedString}:${splited[1]}`;
        if (timerName.innerText === "Timer") {
            timerTime.innerText = `${subtractedString}:${splited[1]}`;
            titleBar.innerText = "Pomodoro Timer";
        }
    }
});

//Reduce break length
breakMinus.addEventListener("click", function() {
    let time = breakLength.innerText;
    let splited, splitNumber, subtracted, subtractedString;
    splited = time.split(":");
    splitNumber = Number(splited[0]);
    if (timerName.innerText === "Break!" && breakLength.innerText !== "01:00") {
        clearInterval(timer);
        startBtnPushed = false;
    }
    if (splitNumber > 1) {
        String(splitNumber);
        subtracted = --splitNumber;
        subtractedString = String(subtracted);
        if (subtractedString.length === 1) {
            breakLength.innerText = `0${subtractedString}:${splited[1]}`;
            if (timerName.innerText === "Break!") {
                timerTime.innerText = `0${subtractedString}:${splited[1]}`;
                titleBar.innerText = "Pomodoro Timer";
            }
        } else {
            breakLength.innerText = `${subtractedString}:${splited[1]}`;
            if (timerName.innerText === "Break!") {
                timerTime.innerText = `${subtractedString}:${splited[1]}`;
                titleBar.innerText = "Pomodoro Timer";
            }
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
    if (timerName.innerText === "Break!") {
        clearInterval(timer);
        startBtnPushed = false;
    }
    if (subtractedString.length === 1) {
        breakLength.innerText = `0${subtractedString}:${splited[1]}`;
        if (timerName.innerText === "Break!") {
            timerTime.innerText = `0${subtractedString}:${splited[1]}`;
            titleBar.innerText = "Pomodoro Timer";
        }
    } else {
        breakLength.innerText = `${subtractedString}:${splited[1]}`;
        if (timerName.innerText === "Break!") {
            timerTime.innerText = `${subtractedString}:${splited[1]}`;
            titleBar.innerText = "Pomodoro Timer";
        }
    }
});

//Start button
startBtn.addEventListener("click", function() {
    if (!startBtnPushed) {
        startBtnPushed = true;
        timer = setInterval(function() {
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
            if (timerTime.innerText === "00:00" && timerName.innerText === "Timer") {
                breakTime();
            } 
            if (timerTime.innerText === "00:00" && timerName.innerText === "Break!") {
                audio.currentTime = 0;
                timerName.innerText = "Timer";
                timerBorder.style.borderColor = "rgb(245, 13, 13)";
                timerName.style.color = "rgb(221, 35, 35)";
                timerTime.innerText = timerLength.innerText;
            }
            if (timerName.innerText === "Timer") {
                titleBar.innerHTML = `Timer ${timerTime.innerText}`;
            } else if (timerName.innerText === "Break!") {
                titleBar.innerHTML = `Break! ${timerTime.innerText}`;
            }
        } , 1000);
    }
});

function breakTime() {
    timerName.innerText = "Break!";
    timerBorder.style.borderColor = "rgb(4, 196, 4)";
    timerName.style.color = "rgb(4, 196, 4)";
    timerTime.innerText = breakLength.innerText;
}

//Stop button
stopBtn.addEventListener("click", function() {
    startBtnPushed = false;
    clearInterval(timer);
    titleBar.innerText = "Pomodoro Timer";
});

//Reset button
resetBtn.addEventListener("click", function() {
    if (timerName.innerText === "Timer") {
        timerTime.innerText = timerLength.innerText;
        clearInterval(timer);
        startBtnPushed = false;
    } else if (timerName.innerText === "Break!") {
        timerTime.innerText = breakLength.innerText;
        clearInterval(timer);
        startBtnPushed = false;
    }
    titleBar.innerText = "Pomodoro Timer";
});


