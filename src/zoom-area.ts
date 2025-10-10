export class ZoomAreaException extends DOMException {
  constructor(msg: string = "An error occured while creating zoom area.") {
    super(msg)
  }
}

export interface ZoomAreaConfig {
  maxZoom?: number;
  minZoom?: number;
  initialScale?: number;
  zoomScale?: number;
}

const defaultZoomAreaConfig: ZoomAreaConfig = {
  minZoom: 0.2,
  maxZoom: 2.5,
  initialScale: 1,
  zoomScale: 0.1,
}

export interface Position {
  x: number;
  y: number;
}

class ZoomArea {
  private zoomArea: HTMLElement;
  private scale: number;
  private maxZoom: number;
  private minZoom: number;
  private position: Position;
  private initialPosition: Position;
  private isDragging: boolean;
  private config: ZoomAreaConfig;
  private zoomScale: number;
  private cursorTimeout: number | null = null;


  constructor(id: string = "zoom-area", config: ZoomAreaConfig = defaultZoomAreaConfig) {
    this.zoomArea = document.getElementById(id)!;
    this.scale = (config.initialScale ? config.initialScale : defaultZoomAreaConfig.initialScale)!;
    this.minZoom = (config.minZoom ? config.minZoom : defaultZoomAreaConfig.minZoom)!;
    this.maxZoom = (config.maxZoom ? config.maxZoom : defaultZoomAreaConfig.maxZoom)!;
    this.initialPosition = { x: 0, y: 0 };
    this.position = this.initialPosition;
    this.isDragging = false;
    this.zoomScale = (config.zoomScale ? config.zoomScale : defaultZoomAreaConfig.zoomScale)!
    this.config = {
      ...defaultZoomAreaConfig,
      ...config,
    };


    if (!this.zoomArea) {
      throw new ZoomAreaException()
    }

    this.init();
  }

  getScale = () => this.scale;

   setCursor = (cursorType: string) => {
    this.zoomArea.style.cursor = cursorType
  }

    setTemporaryCursor = (cursorType: string, duration: number = 300) => {

    if (this.cursorTimeout) {
      clearTimeout(this.cursorTimeout);
    }

    this.setCursor(cursorType);


    this.cursorTimeout = window.setTimeout(() => {
      if (!this.isDragging) {
        this.setCursor('grab');
      }
      this.cursorTimeout = null;
    }, duration);
  }

  zoom = (delta: number) => {
    const newScale = this.scale + delta;
    this.scale = Math.max(this.minZoom, Math.min(this.maxZoom, newScale));
    this.setDivStyle();
    return this;
  }

 zoomIn = () => {
    this.setTemporaryCursor('zoom-in');
    return this.zoom(this.zoomScale);
  }

  zoomOut = () => {
    this.setTemporaryCursor('zoom-out');
    return this.zoom(-this.zoomScale);
  }

  reset = () => {
    this.position = { x: 0, y: 0 };
    this.scale = this.config.initialScale!;
    this.setDivStyle();
    this.setCursor('grab');
    return this;
  }


  private handleDrag = (e: MouseEvent): any => {
    console.log("hello")
    if (this.isDragging) {
      const dx = e.clientX - this.initialPosition.x;
      const dy = e.clientY - this.initialPosition.y;

      const { x, y } = this.position;
      this.position = {
        x: x + dx,
        y: y + dy,
      }

      this.initialPosition = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    this.setDivStyle();
  };

  private handleCntrlWheel = (e: WheelEvent): void => {
    if (!e.ctrlKey) {
      return;
    }

    e.preventDefault();

    if (e.deltaY < 0) {
      this.setTemporaryCursor('zoom-in', 200);
    } else {
      this.setTemporaryCursor('zoom-out', 200);
    }
    
    this.initialPosition.y += e.deltaY;
    this.position.y += e.deltaY;
  }

  private setDivStyle = () => {
    this.zoomArea.style.transform = `scale(${this.scale}) translate(${this.position.x}px, ${this.position.y}px)`;
    this.zoomArea.style.transformOrigin = "center";
  }

  private init = () => {
    this.setDivStyle();
   this.setCursor('grab');

    this.zoomArea.addEventListener("mousemove", this.handleDrag);

    this.zoomArea.addEventListener("mouseup", () => {
      this.isDragging = false;
      this.setCursor('grab');
    });
    this.zoomArea.addEventListener("mousedown", e => {
      this.isDragging = true;
       this.setCursor('grabbing');
      this.initialPosition = {
        x: e.clientX,
        y: e.clientY,
      }
      this.setDivStyle();
    })
    this.zoomArea.addEventListener("wheel", this.handleCntrlWheel);
  }
}

export default ZoomArea;
