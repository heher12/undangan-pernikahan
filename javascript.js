const audio = document.getElementById('myAudio');
  
audio.addEventListener('ended', function() {
  audio.currentTime = 0;
  audio.play();
});