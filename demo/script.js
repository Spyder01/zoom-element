const img = document.getElementById('myImage');
let scale = 1; // initial zoom

document.getElementById('zoomIn').addEventListener('click', () => {
  scale += 0.2;
  img.style.transform = `scale(${scale})`;
});

document.getElementById('zoomOut').addEventListener('click', () => {
  scale = Math.max(0.2, scale - 0.2);
  img.style.transform = `scale(${scale})`;
});

document.getElementById('reset').addEventListener('click', () => {
  scale = 1;
  img.style.transform = `scale(${scale})`;
});
