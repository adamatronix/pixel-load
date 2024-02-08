interface Pixel {

}

class Pixel {
  parentEl:HTMLDivElement;
  el:HTMLDivElement;
  opacityVal:number = 1;

  constructor(container:HTMLDivElement, width: number, height: number, src:string, pixelSize: number, col: number, row: number) {
    this.parentEl = container;
    let pixelElement = document.createElement('div');
    pixelElement.style.width = `${pixelSize}px`;
    pixelElement.style.height = `${pixelSize}px`;
    pixelElement.style.backgroundImage = `url(${src})`;
    pixelElement.style.backgroundSize = `${width}px ${height}px`;
    pixelElement.style.backgroundPosition = `-${col}px -${row}px`;
    pixelElement.style.position = 'absolute';
    pixelElement.style.top = `0px`;
    pixelElement.style.left = `0px`;
    pixelElement.style.zIndex = '10';
    pixelElement.style.transform = `translate(${col}px,${row}px)`;
    pixelElement.style.opacity = `${this.opacityVal}`;

    this.el = pixelElement;
    //this.calculations();
    this.animate();
  }

  calculations = () => {

    let loop = setInterval(() => { 
      if(this.opacityVal <= 1) {
        this.opacityVal+= 0.2;
      } else {
        clearInterval(loop);
      }
    }, 1000)
  }

  animate = () => {
    this.el.style.opacity = `${this.opacityVal}`;
    requestAnimationFrame(this.animate);
  }
}

export default Pixel;