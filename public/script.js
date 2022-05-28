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

