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
    if (event.target === musicModal) {
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
    if (event.target === podcastModal) {
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


// Music Player
// Code inspired from tutorial by Traversy Media (referenced in markdown)

const musicPlayer = document.querySelector('.audioPlayer');
const prevButton = document.querySelector('#prev');
const playButton = document.querySelector('#play');
const nextButton = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progressBar');
const progressContainer = document.querySelector('.progressContainer');
const title = document.querySelector('#songTitle');
const artist = document.querySelector('#songArtist');
const cover = document.querySelector('#cover');

const musicModalCover = document.querySelector('#musicModalCover');
const musicModalTitle = document.querySelector('#musicModalTitle');
const musicModalArtist = document.querySelector('#musicModalArtist');

// Song Titles
const songTitle = ['Kirby and the Forgotten Land - Alivel Mall', 
'花に亡霊 (Ghost In A Flower)', 
'ギラギラ (Gira Gira)', 
'夜に駆ける (Racing into the Night)'];

const songArtist = ['HAL Laboratory', 'Yorushika', 'Ado', 'YOASOBI']

// Keep track of songs - Song default on startup
let songIndex = 0;

// Initially load song
loadSong(songIndex);


// Update Song Details
function loadSong(songIndex) {
    title.innerHTML = songTitle[songIndex];
    musicModalTitle.innerHTML = songTitle[songIndex];
    artist.innerHTML = songArtist[songIndex];
    musicModalArtist.innerHTML = songArtist[songIndex];
    audio.src = `music/${songTitle[songIndex]}.mp3`;
    cover.src = `images/${songTitle[songIndex]}.jpg`;
    musicModalCover.src = `images/${songTitle[songIndex]}.jpg`;
}

function playSong() {
    musicPlayer.classList.add('play');
    playButton.querySelector('i.fa-solid').classList.remove('fa-play');
    playButton.querySelector('i.fa-solid').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicPlayer.classList.remove('play');
    playButton.querySelector('i.fa-solid').classList.add('fa-play');
    playButton.querySelector('i.fa-solid').classList.remove('fa-pause');
    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songTitle.length - 1
    }

    loadSong(songIndex);

    playSong();
}

function nextSong() {
    songIndex++

    if(songIndex > songTitle.length - 1) {
        songIndex = 0
    }

    loadSong(songIndex);

    playSong();

}

function updateSongProgress(progressLength) {
    const {duration, currentTime} = progressLength.srcElement;
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

}

function chooseProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Music Player Event Listeners
    //Play and Pause song
playButton.addEventListener('click', function() {
    const isPlaying = musicPlayer.classList.contains('play');
    if(isPlaying) {
        pauseSong() 
    } else {
        playSong()
    }
})

    //Change Song
    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    //See Progress Bar of Song
    audio.addEventListener('timeupdate', updateSongProgress)

    //Click on the progress bar to choose song timestamp
    progressContainer.addEventListener('click', chooseProgress);

    //When song ends, it will go to the next song
    audio.addEventListener('ended', nextSong)


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


