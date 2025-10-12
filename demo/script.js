const img = document.getElementById('DemoImage');

let scale=1;
let posX=0;
let posY=0;
let isDragging=false;
let startX,startY;


function zoomIn() {
  scale+=0.1;
  updateTransform();
}

function zoomOut() {
  scale-=0.1;
  if (scale < 0.1) scale = 0.1;
  updateTransform();
}

function resetZoom() {
  scale=1;
  posX=0;
  posY=0;
  updateTransform();
}

function updateTransform() {
  img.style.transform=`translate(${posX}px, ${posY}px) scale(${scale})`;
}

img.addEventListener('mousedown',(e)=>{
  isDragging=true;
  startX=e.clientX-posX;
  startY = e.clientY-posY;
  img.style.cursor='grabbing';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  img.style.cursor='grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  posX=e.clientX-startX;
  posY=e.clientY-startY;
  updateTransform();
});
