import { createComponent, html } from 'https://cdn.svc.oneadvanced.com/mosaicjs/latest/component.esm.js'
import './canvas/canvas.js'
import './controls/controls.js'

createComponent ('mosaic-ui-test-suite', {
  state () {
    return {
      deskId: 'option 1, option 2'
    }
  },
  get: {

  },
  methods: {

  },
  mounted () {
    window.onload = () => window.mosaicConfigure = JSON.parse(localStorage.getItem('mosaic-config'))
    setTimeout(() => {
      import(localStorage.getItem('mosaic-loader-script'))
    }, 100);
  },
  render () {
    return html`
        <style>
          html, body {
            margin: 0;
            padding: 0;
          }
          .wrapper {
            min-height: 100vh;
            display: flex;
          }
          .controls {
            min-width: 500px;
            background-color: #dcdcdc;
            overflow: auto;
            resize: horizontal;
          }
          .controls::-webkit-resizer {
            border-width: 9px;
            border-style: solid;
            border-color: transparent transparent transparent orangered;
          }
          .canvas {
          }
        </style>
        <div class="wrapper">
          <div class="controls">
            <mosaic-test-env-controls></mosaic-test-env-controls>
          </div>
          <div class="canvas">
            <mosaic-test-env-canvas></mosaic-test-env-canvas>
          </div>
        </div>
      `
  }
})