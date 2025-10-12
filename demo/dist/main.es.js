/**
 * MOCK Implementation of the ZoomElement class.
 * This simulates the library's public API for demonstration purposes.
 * Replace this content with the actual compiled library code when testing 
 * within the actual project build environment.
 */

class ZoomElement {
    constructor(element, options = {}) {
        this.element = element;
        this.scale = 1;
        this.minScale = options.minScale || 0.5;
        this.maxScale = options.maxScale || 4.0;
        this.step = 0.2; 

        // Initial setup
        console.log(`[ZoomElement Mock] Initialized on: ${element.id}`);
        this.updateTransform();
    }

    // Apply the current scale to the element using CSS Transform
    updateTransform() {
        this.element.style.transition = 'transform 0.3s ease-in-out';
        this.element.style.transform = `scale(${this.scale})`;
    }

    // Public API Method 1: zoomIn()
    zoomIn() {
        this.scale = Math.min(this.scale + this.step, this.maxScale);
        this.updateTransform();
    }

    // Public API Method 2: zoomOut()
    zoomOut() {
        this.scale = Math.max(this.scale - this.step, this.minScale);
        this.updateTransform();
    }

    // Public API Method 3: reset()
    reset() {
        this.scale = 1;
        this.updateTransform();
    }
}

// Export the class so script.js can import it.
export default ZoomElement;