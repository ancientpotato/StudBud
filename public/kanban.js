//Kanban Modal
var taskModal = document.getElementById("addTaskModal");
// Get the column elements
var todoCol = document.getElementById('kanBanToDo');
var inProgressCol = document.getElementById('kanBanInProgress');
var doneCol = document.getElementById('kanBanDone');

function openTaskModal() {
    taskModal.style.display = "block";
}

function closeTaskModal() {
    taskModal.style.display = "none";
}

// Lists for the kanban
var toDoItems = [];
var inProgressItems = [];
var doneItems = [];

// set kanban arrays to what is in local storage
// Storing objects code from Stack overflow (referenced in markdown)
toDoItems = JSON.parse(localStorage.getItem('toDoItems'));
inProgressItems = JSON.parse(localStorage.getItem('inProgressItems'));
doneItems = JSON.parse(localStorage.getItem('doneItems'));

if (!toDoItems) {
  // if there is nothing in local storage;
  toDoItems = [];
}

if (!inProgressItems) {
  // if there is nothing in local storage;
  inProgressItems = [];
}

if (!doneItems) {
  // if there is nothing in local storage;
  doneItems = [];
}

loadStoredKanbans();

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

    // Call function which creates a card using the above data
    var kanBanhtml = kanBanTemplate(kanBan);
  
    /* Depending on the status that the user chooses in the modal,
    this conditional will ensure that it ends up in the right column*/
    if (document.getElementById('status1').checked) {
        doneCol.insertAdjacentHTML('beforeend', kanBanhtml);
        doneItems.push(kanBan);
        // Storing objects code from Stack overflow (referenced in markdown)
        localStorage.setItem('doneItems', JSON.stringify(doneItems));

    } else if (document.getElementById('status2').checked) {
        inProgressCol.insertAdjacentHTML('beforeend', kanBanhtml);
        inProgressItems.push(kanBan);
        localStorage.setItem('inProgressItems', JSON.stringify(inProgressItems));

    } else if (document.getElementById('status3').checked) {
        todoCol.insertAdjacentHTML('beforeend', kanBanhtml);
        toDoItems.push(kanBan);
        localStorage.setItem('toDoItems', JSON.stringify(toDoItems));

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

function loadStoredKanbans() {
  doneItems.forEach(function(kanban) {
    var html = kanBanTemplate(kanban);
    doneCol.insertAdjacentHTML('beforeend', html);
  });

  inProgressItems.forEach(function(kanban) {
    var html = kanBanTemplate(kanban);
    inProgressCol.insertAdjacentHTML('beforeend', html);
  });

  toDoItems.forEach(function(kanban) {
    var html = kanBanTemplate(kanban);
    todoCol.insertAdjacentHTML('beforeend', html);
  });
}