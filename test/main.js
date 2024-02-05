import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import ZoomArea from 'zoom-element';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" id="zoom" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
const zoomArea = new ZoomArea("zoom")
document.getElementById("counter").addEventListener("click", zoomArea.zoomIn)

setupCounter(document.querySelector('#counter'))
