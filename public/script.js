//Resources Tab - Adding Group Modal
var groupModal = document.getElementById("addGroupModal");
var groupBtn = document.getElementById("groupBtn");
var groupClose = document.getElementsByClassName("cancel-group")[0];

if (groupBtn) {
    groupBtn.onclick = function() {
        groupModal.style.display = "block";
      }
    
}

if (groupClose) {
    groupClose.onclick = function() {
        groupModal.style.display = "none";
      }
}

 


  //Tasks Tab - Adding Column Modal
  var columnModal = document.getElementById("addColumnModal");
  var columnBtn = document.getElementById("columnBtn");
  var columnClose = document.getElementsByClassName("cancel-column")[0];

  if(columnBtn) {
    columnBtn.onclick = function() {
        columnModal.style.display = "block";
    }
  }

  if(columnClose) {
    columnClose.onclick = function() {
        columnModal.style.display = "none";
    }
  
  }

  //Timer Modal
  var timerModal = document.getElementById("openTimerModal");
  var timerBtn = document.getElementById("timer");
  var timerClose = document.getElementsByClassName("cancel-timer")[0];
  var timerBtnSwitch = document.getElementById("timerBtnInactive");

  if (timerBtn) {
      timerBtn.onclick = function() {
          timerModal.style.display = "block";
          stopwatchModal.style.display = "none";
      }
  }

  if (timerClose) {
      timerClose.onclick = function() {
          timerModal.style.display = "none";
      }
  }


  

  //Stopwatch Modal
  var stopwatchModal = document.getElementById("openStopwatchModal");
  var stopwatchBtn = document.getElementById("stopwatchBtnInactive");
  var stopwatchClose = document.getElementsByClassName("cancel-stopwatch")[0];

  if (stopwatchBtn) {
    stopwatchBtn.onclick = function() {
        timerModal.style.display = "none";
        stopwatchModal.style.display = "block";
    }
}

if (stopwatchClose) {
    stopwatchClose.onclick = function() {
        stopwatchModal.style.display = "none";
    }
}

if (timerBtnSwitch) {
    timerBtnSwitch.onclick = function() {
        timerModal.style.display = "block";
          stopwatchModal.style.display = "none";
    }
}

//Music Modal
var musicModal = document.getElementById("openMusicModal");
var musicBtn = document.getElementById("music");

if (musicBtn) {
    musicBtn.onclick = function() {
        musicModal.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == musicModal) {
        musicModal.style.display = "none";
        podcastModal.style.display = "none";
    }
}

//Podcast Modal
var podcastModal = document.getElementById("openPodcastModal");
var podcastBtn = document.getElementById("podcast");

if (podcastBtn) {
    podcastBtn.onclick = function() {
        podcastModal.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == podcastModal) {
        podcastModal.style.display = "none";
        musicModal.style.display = "none";
    }
}

//Kanban Modal

var taskModal = document.getElementById("addTaskModal");
var taskBtn = document.getElementById("taskBtn");
var taskClose = document.getElementsByClassName("cancel-task")[0];

if (taskBtn) {
    taskBtn.onclick = function() {
        taskModal.style.display = "block";
    }
}

if (taskClose) {
    taskClose.onclick = function() {
        taskModal.style.display = "none";
    }
}



