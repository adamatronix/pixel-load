import './style.css'
import rabbitImage from '/Rabbit_1@2x.jpg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
     <img src="${rabbitImage}" class="rabbit" alt="Rabbit logo" />
  </div>
`