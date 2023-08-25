const video = document.getElementById('responsive-video');

window.addEventListener('resize', () => {
  adjustVideoSize();
});

function adjustVideoSize() {
  const containerWidth = video.parentElement.offsetWidth;
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;

  const scaleFactor = containerWidth / videoWidth;
  const adjustedHeight = videoHeight * scaleFactor;

  video.style.width = containerWidth + 'px';
  video.style.height = adjustedHeight + 'px';
}

window.addEventListener('load', () => {
  adjustVideoSize();
});
