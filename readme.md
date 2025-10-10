# 🧭 zoom-element

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/spyder01/zoom-element.svg)](https://github.com/spyder01/zoom-element/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/spyder01/zoom-element.svg)](https://github.com/spyder01/zoom-element/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-blueviolet.svg)](https://hacktoberfest.com/)

---

### <center>🎯 A lightweight, framework-agnostic library to easily zoom and pan HTML elements.</center>

---

## ⚙️ Installation

### Using NPM

```bash
npm install --save zoom-element
```

### Using Yarn

```bash
yarn add zoom-element
```

---

## 🚀 Usage

Here’s how you can set up a simple zoomable element in seconds:

```js
import ZoomArea from 'zoom-element';

// Initialize with a target element ID
const zoomArea = new ZoomArea('some-id', {
  minZoom: 0.3,      // default: 0.2
  maxZoom: 3.5,      // default: 2.5
  initialScale: 0.5, // default: 1
  zoomScale: 0.1,    // default: 0.1
});

const ele1 = document.getElementById('element-1');
const ele2 = document.getElementById('element-2');
const ele3 = document.getElementById('element-3');

// Zoom In
ele1.onclick = zoomArea.zoomIn;

// Zoom Out
ele2.onclick = zoomArea.zoomOut;

// Reset
ele3.onclick = zoomArea.reset;
```

---

## 💡 Available Methods

| Method      | Description                                        |
| ----------- | -------------------------------------------------- |
| `zoomIn()`  | Zooms in the element by the defined `zoomScale`.   |
| `zoomOut()` | Zooms out the element while respecting `minZoom`.  |
| `reset()`   | Resets element to its original scale and position. |

---

## 🧩 Configuration Options

| Option         | Type     | Default | Description                          |
| -------------- | -------- | ------- | ------------------------------------ |
| `minZoom`      | `number` | `0.2`   | Minimum zoom level.                  |
| `maxZoom`      | `number` | `2.5`   | Maximum zoom level.                  |
| `initialScale` | `number` | `1`     | Starting zoom level.                 |
| `zoomScale`    | `number` | `0.1`   | Increment/decrement per zoom action. |

---

## 🧠 Example Use Cases

* Zoomable image viewers or diagrams
* Interactive maps or charts
* Canvas-based drawing tools
* Presentation or document preview components

---

## 🌍 Demo (Coming Soon)

A live example showcasing zoom and pan functionality will be available soon!

---

## 🛠️ Roadmap

* [ ] Add mouse scroll zoom support
* [ ] Add pinch-to-zoom for mobile devices
* [ ] Add panning while zoomed
* [ ] Add TypeScript definitions
* [ ] Create demo page with interactive examples

---

## 🎃 Hacktoberfest 2025 — Contribute & Learn!

We’re participating in **Hacktoberfest 2025**!
If you’re a beginner or intermediate developer looking for open source contributions, **zoom-element** is a perfect start.

### ✅ Ways to Contribute

* Add features like **scroll-zoom**, **touch gestures**, or **panning**
* Improve documentation and add code examples
* Write **unit tests** for zoom functions
* Create a **demo page** using HTML/CSS/JS
* Add **TypeScript support**

### 🧩 Getting Started

1. **Fork** the repository
2. **Clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/zoom-element.git
   ```
3. **Create a branch**:

   ```bash
   git checkout -b feature/add-scroll-zoom
   ```
4. **Make your changes** and **commit**:

   ```bash
   git commit -m "Added scroll zoom support"
   ```
5. **Push your branch**:

   ```bash
   git push origin feature/add-scroll-zoom
   ```
6. **Open a Pull Request** on GitHub 🎉

---

## 🧾 Contributing Guidelines

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.
Make sure to follow our simple code style and PR checklist.

---

## 🧑‍💻 Maintainer

**[@spyder01](https://github.com/spyder01)**

---

## 📄 License

Licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

---

## 🌟 Support the Project

If you like **zoom-element**, consider giving it a ⭐ on GitHub!
It helps others discover the project and keeps development active.

---
