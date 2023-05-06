const wrapper = document.querySelector('.video-wrapper');
const iframe = wrapper.querySelector('iframe');

wrapper.addEventListener('click', () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  }
});

