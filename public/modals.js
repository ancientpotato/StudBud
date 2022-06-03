

//Timer Modal
var timerModal = document.getElementById("openTimerModal");
var timerBtn = document.getElementById("timer");
var timerClose = document.getElementsByClassName("cancel-timer")[0];
var timerBtnSwitch = document.getElementById("timerBtnInactive");

//Changing the display of the modal to be visible and invisible on click
if (timerBtn) {
  timerBtn.onclick = function () {
    timerModal.style.display = "block";
    stopwatchModal.style.display = "none";
  }
}

if (timerClose) {
  timerClose.onclick = function () {
    timerModal.style.display = "none";
  }
}




//Stopwatch Modal
var stopwatchModal = document.getElementById("openStopwatchModal");
var stopwatchBtn = document.getElementById("stopwatchBtnInactive");
var stopwatchClose = document.getElementsByClassName("cancel-stopwatch")[0];
//Changing the display of the modal to be visible and invisible on click
if (stopwatchBtn) {
  stopwatchBtn.onclick = function () {
    timerModal.style.display = "none";
    stopwatchModal.style.display = "block";
  }
}

if (stopwatchClose) {
  stopwatchClose.onclick = function () {
    stopwatchModal.style.display = "none";
  }
}

if (timerBtnSwitch) {
  timerBtnSwitch.onclick = function () {
    timerModal.style.display = "block";
    stopwatchModal.style.display = "none";
  }
}

//Music Modal
var musicModal = document.getElementById("openMusicModal");
var musicBtn = document.getElementById("music");
//Changing the display of the modal to be visible and invisible on click
if (musicBtn) {
  musicBtn.onclick = function () {
    musicModal.style.display = "block";
  }
}

window.onclick = function (event) {
  if (event.target === musicModal) {
    musicModal.style.display = "none";
    podcastModal.style.display = "none";
  }
}

//Podcast Modal
var podcastModal = document.getElementById("openPodcastModal");
var podcastBtn = document.getElementById("podcast");

//Changing the display of the modal to be visible and invisible on click
if (podcastBtn) {
  podcastBtn.onclick = function () {
    podcastModal.style.display = "block";
  }
}

window.onclick = function (event) {
  if (event.target === podcastModal) {
    podcastModal.style.display = "none";
    musicModal.style.display = "none";
  }
}



