

class ZoomElement {
    constructor(element, options = {}) {
        this.element = element;
        this.scale = 1;
        this.minScale = options.minScale || 0.5;
        this.maxScale = options.maxScale || 4.0;
        this.step = 0.2; 


        console.log(`[ZoomElement Mock] Initialized on: ${element.id}`);
        this.updateTransform();
    }

 
    updateTransform() {
        this.element.style.transition = 'transform 0.3s ease-in-out';
        this.element.style.transform = `scale(${this.scale})`;
    }


    zoomIn() {
        this.scale = Math.min(this.scale + this.step, this.maxScale);
        this.updateTransform();
    }

  
    zoomOut() {
        this.scale = Math.max(this.scale - this.step, this.minScale);
        this.updateTransform();
    }

    reset() {
        this.scale = 1;
        this.updateTransform();
    }
}


export default ZoomElement;