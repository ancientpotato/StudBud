//Timer

//Code inspired from Florin Pop (referenced in markdown)
var initialTimeInMins = 25;
var time = initialTimeInMins * 60;

var timerCountdown = document.getElementById('countdownTimer');
var countdownTimerModal = document.getElementById('countdownTimerModal');

var timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    timerCountdown.innerHTML = `${minutes}:${seconds}`;
    countdownTimerModal.innerHTML = `${minutes}:${seconds}`;
    time--;
}
