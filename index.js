const banner = document.querySelector('.banner');
let position = 0;

function slide() {
  position -= 300;
  banner.style.transform = `translateX(${position}px)`;
  if (position <= -600) {
    position = 0;
    banner.style.transform = `translateX(${position}px)`;
  }
}

setInterval(slide, 3000);
