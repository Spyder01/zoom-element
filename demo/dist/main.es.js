class ZoomElement {
    constructor(element, options = {}) {
        this.element = element;
        this.scale = 1;
        this.minScale = options.minScale || 0.5;
        this.maxScale = options.maxScale || 4.0;
        this.step = 0.2;

        // 🖱️ Add configurable cursor styles
        this.cursorStyles = {
            zoomIn: options.cursorStyles?.zoomIn || 'zoom-in',
            zoomOut: options.cursorStyles?.zoomOut || 'zoom-out',
            grab: options.cursorStyles?.grab || 'grab',
            grabbing: options.cursorStyles?.grabbing || 'grabbing'
        };

        // 🖱️ Set initial cursor
        this.element.style.cursor = this.cursorStyles.grab;

        // 🧩 Bind methods to this instance
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
        this.reset = this.reset.bind(this);

        // 🧠 Add mouse event listeners for cursor behavior
        this.element.addEventListener('mousedown', () => {
            this.element.style.cursor = this.cursorStyles.grabbing;
        });

        this.element.addEventListener('mouseup', () => {
            this.element.style.cursor = this.cursorStyles.grab;
        });

        // Optional: Change cursor on scroll to indicate zoom direction
        this.element.addEventListener('wheel', (e) => {
            if (e.deltaY < 0) {
                this.element.style.cursor = this.cursorStyles.zoomIn;
            } else {
                this.element.style.cursor = this.cursorStyles.zoomOut;
            }

            // Reset back to grab after short delay
            setTimeout(() => {
                this.element.style.cursor = this.cursorStyles.grab;
            }, 300);
        });

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
