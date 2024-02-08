import PixelLoad from './pixelload';
import './style.css'
import rabbitImage from '/Rabbit_1@2x.jpg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="rabbit-image" data-src="${rabbitImage}">
     <img src="${rabbitImage}" class="rabbit" alt="Rabbit logo" />
  </div>
`

new PixelLoad(document.querySelector('#rabbit-image')!, { pixelSize: 10, fps: 40, rowIncrement: 4, colIncrement: 10 })