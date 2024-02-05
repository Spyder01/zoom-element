# zoom-element 

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/suhanbangera/arachnoid.svg)](https://github.com/spyder01/zoom-element/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/suhanbangera/arachnoid.svg)](https://github.com/spyder01/zoom-element/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

#### <center> A simplistic, compatible library to zoom and pan your elements. </center>

## Installation

### Use NPM
```bash
npm install --save zoom-element
``` 

#### <center> or </center>

### Use Yarn
```
yarn add zoom-element
```
## Usage

This is how you create a simple zoom element. 

```js
import ZoomArea from 'zoom-element';

// Initialize element id to the class. It defaults to zoom-area.

const zoomArea = new ZoomArea('some-id', {
  minZoom: 0.3, // this defaults to 0.2
  maxZoom: 3.5, // this defaults to 2.5
  initialScale: 0.5, // this defaults to 1 
  zoomScale: 0.1, // this defaults to 0.1 
});

const ele1 = document.getElementById('element-1');
const ele2 = document.getElementById('element-2');
const ele3 = document.getElementById('element-3');

// this will zoom in the given element. 
zoomArea.zoomIn();


// this will zoom out the given element. 
zoomArea.zoomOut();

// this will reset the given element to its original size and position. 
zoomArea.reset();


// OTHER USE CASES

// Zoom In on click
ele1.onclick = zoomArea.zoomIn;

// Zoom out on click
ele2.onclick = zoomArea.zoomOut;

// Zoom reset on click
ele3.onclick = zoomArea.reset;

```




