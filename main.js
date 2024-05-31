

let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("ctrlicon");


song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
  console.log(progress.max);
}

function playPause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    song.play();
    img.style.cssText = `  animation: rotate 14s infinite linear;`

  }
  else{
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    song.pause();
    img.style.cssText = `  animation: rooo 14s infinite linear;`

  }
}

let img = document.querySelector("img")

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}


progress.onchange = function(){
  song.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
  song.currentTime = progress.value;
}


