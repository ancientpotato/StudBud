//Code inspired from Florin Pop (referenced in markdown)
var initialTimeInMins = 25;
var breakTimeinMins = 5;
var time;
var timer;
var isTimerRunning = false; //initially set to false since no timer is running 
var isBreakTime = false;

//grabbing the timer elements
var timerCountdown = document.getElementById('countdownTimer');
var countdownTimerModal = document.getElementById('countdownTimerModal');
var startBtn = document.getElementById('timerBtn');
var timerStatus = document.getElementById('counterMode');

function startTimer() {
    //the timer starts/restarts when button is clicked
    if (isTimerRunning) {
        isTimerRunning = false;
        startBtn.innerHTML = "Start";
        clearInterval(timer);

    } else {
        //when clicked, button will change and timer stops
        isTimerRunning = true;
        startBtn.innerHTML = "Stop";
        time = (initialTimeInMins * 60) - 1;
        timer = setInterval(updateCountdown, 1000);
        timerStatus.innerHTML = "FOCUS MODE!"
    }
}

function updateCountdown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    timerCountdown.innerHTML = `${minutes}:${seconds}`;
    countdownTimerModal.innerHTML = `${minutes}:${seconds}`;
    time = time - 60;

    if (time <= 0) {
        if (isBreakTime) {
            isBreakTime = false;
            time = (initialTimeInMins * 60) - 1;
            timerStatus.innerHTML = "FOCUS MODE!"
        } else {
            isBreakTime = true;
            time = (breakTimeinMins * 60) - 1;
            timerStatus.innerHTML = "BREAK TIME!"
        }
    } 
}
