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

  if (songIndex < 0) {
    songIndex = songTitle.length - 1
  }

  loadSong(songIndex);

  playSong();
}

function nextSong() {
  songIndex++

  if (songIndex > songTitle.length - 1) {
    songIndex = 0
  }

  loadSong(songIndex);

  playSong();

}

function updateSongProgress(progressLength) {
  const { duration, currentTime } = progressLength.srcElement;
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
playButton.addEventListener('click', function () {
  const isPlaying = musicPlayer.classList.contains('play');
  if (isPlaying) {
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