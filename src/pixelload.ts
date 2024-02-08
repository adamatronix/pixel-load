interface Options {
  fps?: number
  pixelSize?:number
  rowIncrement?:number
  colIncrement?:number
}


class PixelLoad {
  container:HTMLDivElement;
  options:Options;
  totalCol:number = 10;
  totalRow:number = 10;
  currentCol:number = 1;
  currentRow:number = 1;



  constructor(container:HTMLDivElement,o?:Options) {
    let defaultOptions:Options = {
      fps: 10,
      pixelSize: 10,
      rowIncrement: 1,
      colIncrement: 1
    }

    this.container = container;
    this.container.style.clipPath = `inset(100%)`;
    this.options = Object.assign(defaultOptions,o);

    const img = new Image();
    const self = this;
    img.onload = function() {
      self.init();
    }
    img.src = this.container.dataset.src || '';
        
  }

  init = () => {
    this.totalCol =  this.container.clientWidth / this.options.pixelSize!;
    this.totalRow =  this.container.clientHeight / this.options.pixelSize!;
  
    //this.container.style.clipPath = `polygon(0 0, 100% 0, 100% 98%, 96% 98%, 96% 100%, 0 100%)`;
    this.calculations();
    this.animate();
  }

  calculations = () => {
    const loop = setInterval(() => {
      const colPos = this.currentCol * this.options.pixelSize!;
      const rowPos = this.currentRow * this.options.pixelSize!;
      if(this.currentRow === 1) {
        this.container.style.clipPath = `polygon(0 0, ${colPos}px 0, ${colPos}px ${rowPos}px, 0 ${rowPos}px)`;
      } else {
        this.container.style.clipPath = `polygon(0 0, 100% 0, 100% ${rowPos - this.options.pixelSize!}px, ${colPos}px ${rowPos - this.options.pixelSize!}px, ${colPos}px ${rowPos}px, 0 ${rowPos}px)`;
      }
      

      if(this.currentCol >= this.totalCol) {
        this.currentCol = 0;
        this.currentRow = this.currentRow + this.options.rowIncrement!;
      } else {
        this.currentCol = this.currentCol + this.options.colIncrement!;
      }

      if(this.currentRow > this.totalRow) {
        clearInterval(loop)
      }
      
    }, 1000 / (this.options.fps ? this.options.fps : 5));
  }

  animate = () => {
    requestAnimationFrame(this.animate);
  }
}

export default PixelLoad;