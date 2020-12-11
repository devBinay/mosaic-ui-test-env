import { createComponent, html } from 'https://cdn.svc.oneadvanced.com/mosaicjs/latest/component.esm.js'

createComponent('mosaic-test-env-canvas', {
    state () {
      return {

      }
    },
    get: {

    },
    methods: {
    },
    render () {
      return html`
        <mosaic-page>
            <mosaic-title>Test your components here!</mosaic-title>
            </mosaic-page>
      `
    }
  })