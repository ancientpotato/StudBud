// Lists for the kanban
var toDoItems = [];
var inProgressItems = [];
var doneItems = [];

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

function openModal() {
    taskModal.style.display = "block";
}

function closeModal() {
    taskModal.style.display = "none";
}


function getKanBanData() {

    // Hides the modal once user clicks save
    taskModal.style.display = "none";

    // Get the data from the inputs on the modal
    var title = document.getElementById('task-title').value;
    var description = document.getElementById('task-description').value;
    var priority = 'LOW'; //If no priority is chosen, will be low by default
    var dueDate = document.getElementById('dueDate').value;
    var estTimeHr = document.getElementById('estTimeHours').value;
    var estTimeMin = document.getElementById('estTimeMinutes').value;

   


    // Check that there is an option checked first before accessing .value;
    // Code from StackOverflow (referenced in markdown)
    if (document.querySelector('input[name=task-priority]:checked')) {
        priority = document.querySelector('input[name=task-priority]:checked').value;
    }

    // Prepare the object with the data from the modal above
    var kanBan = {
        TaskTitle: title,
        TaskDescription: description,
        priority: priority,
        estimatedTimeInHours: estTimeHr,
        estimatedTimeInMinutes: estTimeMin,
        dueDate: dueDate
      
    };

    // Store object into list array
    toDoItems.push(kanBan);
    inProgressItems.push(kanBan);
    doneItems.push(kanBan);

    // Call function which creates a card using the above data
    var html = kanBanTemplate(kanBan);

    // Get the column elements
    var todoCol = document.getElementById('kanBanToDo');
    var inProgressCol = document.getElementById('kanBanInProgress');
    var doneCol = document.getElementById('kanBanDone');

    
  
    /* Depending on the status that the user chooses in the modal,
    this conditional will ensure that it ends up in the right column*/
    if (document.getElementById('status1').checked) {
        doneCol.insertAdjacentHTML('beforeend', html);

    } else if (document.getElementById('status2').checked) {
        inProgressCol.insertAdjacentHTML('beforeend', html);

    } else if (document.getElementById('status3').checked) {
        todoCol.insertAdjacentHTML('beforeend', html);

    }

    /* Depending on the priority that the user chooses in the modal,
    this conditional will change the background colour of the priority*/
    if (document.getElementById('priority1').checked) {
        document.getElementsByClassName('priority').style.backgroundColor = '#00CC9B';
    }
}

// Creates a card containing data for the card
function kanBanTemplate(kanBan) {
    return `<div class="kanbanColumnDescription">
    <div class="taskTopRow">
      <div class="priority">${kanBan.priority}</div>
      <i class="fa-solid fa-pen"></i>
    </div>
    <div class="kanbanTaskTitle">
      ${kanBan.TaskTitle}
    </div>
    <div class="kanbanTaskDescription">
      ${kanBan.TaskDescription}
    </div>
    <div class="lineSeparation"></div>
    <div class="kanbanNumericalItems">
      <div class="estTime">Est. Time: ${kanBan.estimatedTimeInHours}HR ${kanBan.estimatedTimeInMinutes}MINS</div>
      <div class="dueDateIcon">
        <i class="fa-regular fa-calendar"></i>
        <div class="dueDate">${kanBan.dueDate}</div>
      </div>
    </div>
  </div>`
}
