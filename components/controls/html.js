import { createComponent, html } from 'https://cdn.svc.oneadvanced.com/mosaicjs/latest/component.esm.js'
import debounce from 'https://unpkg.com/utility-functions-js@latest/functions/debounce.js'

createComponent ('mosaic-test-env-controls-html', {
    state() {
        return {
            deskId: 'option 1, option 2'
        }
    },
    get: {

    },
    methods: {
        onInput (e) {
            debounce(() => this.methods.injectToCanvas(e), 1000)
        },
        injectToCanvas (e) {
            const page = document.querySelector('mosaic-page')
            const temp = document.createElement('div')
            temp.innerHTML = e.detail.value
            page.innerHTML = ''
            if (temp.firstChild && temp.firstChild.nodeType === 1) page.appendChild(temp.firstChild)
        }
    },

    render () {
        return html`
        <mosaic-textarea rows="12" oninput="${this.methods.onInput}"></mosaic-textarea>
      `
    }
})