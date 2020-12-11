import { createComponent, html } from 'https://cdn.svc.oneadvanced.com/mosaicjs/latest/component.esm.js'
import './javascript.js'
import './html.js'

createComponent ('mosaic-test-env-controls', {
  state () {
    return {
      deskId: 'option 1, option 2'
    }
  },
  get: {

  },
  methods: {

  },

  render () {
    return html`
        <style>
          .mc-accordion__content {
            padding: 6px;
          }
        </style>
        <mosaic-accordion>
          <mosaic-accordion-item label="HTML" icon="html_5" color="secondary">
            <mosaic-test-env-controls-html></mosaic-test-env-controls-html>
          </mosaic-accordion-item>
          <mosaic-accordion-item label="CSS" icon="css3" color="secondary">
          <mosaic-textarea
              rows="12"></mosaic-textarea>
          </mosaic-accordion-item>
          <mosaic-accordion-item label="JS" icon="source_code" color="secondary">
            <mosaic-accordion-header-items>
              <mosaic-icon-button dialog="js-settings" icon="settings"></mosaic-icon-button>
            </mosaic-accordion-header-items>
            <mosaic-test-env-controls-js></mosaic-test-env-controls-js>
          </mosaic-accordion-item>
        </mosaic-accordion>
      `
  }
})