//Code inspired from Florin Pop (referenced in markdown)
var initialTimeInMins = 25;
var time;
var timer;
var isTimerRunning = false; //initially set to false since no timer is running 

//grabbing the timer elements
var timerCountdown = document.getElementById('countdownTimer');
var countdownTimerModal = document.getElementById('countdownTimerModal');
var startBtn = document.getElementById('timerBtn');

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
    }
}

function updateCountdown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    timerCountdown.innerHTML = `${minutes}:${seconds}`;
    countdownTimerModal.innerHTML = `${minutes}:${seconds}`;
    time--;
}
