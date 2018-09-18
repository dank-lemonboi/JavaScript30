/* Get our elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

/* Build Functions */

function togglePlay() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
 }
}

function changeIcon() {
    console.log('Icon!')
   const icon = this.pause ? '►' : '❚ ❚';
}

/* Add event listeners */

const flag = false;
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', changeIcon)
video.addEventListener('pause', changeIcon)
