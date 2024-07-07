document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        playButton.classList.add('hidden');
      } else {
        video.pause();
        playButton.classList.remove('hidden');
      }
    });

    video.addEventListener('pause', function() {
      playButton.classList.remove('hidden');
    });

    video.addEventListener('play', function() {
      playButton.classList.add('hidden');
    });
  });
  alert("video");