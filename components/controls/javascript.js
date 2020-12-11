import { createComponent, html } from 'https://cdn.svc.oneadvanced.com/mosaicjs/latest/component.esm.js'

createComponent ('mosaic-test-env-controls-js', {
    state() {
        return {
            deskId: 'option 1, option 2'
        }
    },
    get: {

    },
    methods: {
        onSubmit (e) {
            const config = {
                loaderPath: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-loader/${e.detail.data.loader}`,
                useData: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-data/${e.detail.data.data}`,
                useCore: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-core/${e.detail.data.core}`,
                useForms: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-forms/${e.detail.data.forms}`,
                useI18n: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-i18n/${e.detail.data.i18n}`,
                useLayout: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-layout/${e.detail.data.layout}`,
                useFormExtras: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-form-extras/${e.detail.data.formExtras}`,
                useButtons: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-buttons/${e.detail.data.buttons}`,
                useControls: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-controls/${e.detail.data.controls}`,
                useMessaging: `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-messaging/${e.detail.data.messaging}`
              }

            const versions = {
                loaderPath: e.detail.data.loader,
                useData: e.detail.data.data,
                useCore: e.detail.data.core,
                useForms: e.detail.data.forms,
                useI18n: e.detail.data.i18n,
                useLayout: e.detail.data.layout,
                useFormExtras: e.detail.data.formExtras,
                useButtons: e.detail.data.buttons,
                useControls: e.detail.data.controls,
                useMessaging: e.detail.data.messaging,
                loaderScript: e.detail.data.loaderScript
            }
            
            const loader = `https://cdn.svc.oneadvanced.com/mosaic-ui/mosaic-components-loader/${e.detail.data.loaderScript}/loader.iife.js`
            localStorage.setItem('mosaic-config', JSON.stringify(config))
            localStorage.setItem('mosaic-loader-script', loader)
            window.location.reload()
        }
    },

    render () {
        return html`
        <mosaic-textarea rows="12"></mosaic-textarea>
        
        <mosaic-form-dialog id="js-settings" header-title="Mosaic UI configuration" onsubmit="${this.methods.onSubmit}">
            <mosaic-accordion sortable="controls-group" spaced>

                <mosaic-accordion-item label="Packages" color="secondary">
                    <mosaic-text-input name="loader" label="Loader" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="data" label="Data" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="core" label="Core" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="forms" label="Forms" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="layout" label="Layout" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="messaging" label="Messaging" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="formExtras" label="Form extras" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="buttons" label="Buttons" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="i18n" label="i18n" value="latest"></mosaic-text-input>
                    <mosaic-text-input name="controls" label="Controls" value="latest"></mosaic-text-input>
                </mosaic-accordion-item>

                <mosaic-accordion-item label="Loader script" color="secondary">
                    <mosaic-text-input name="loaderScript" label="Loader" value="latest"></mosaic-text-input>
                </mosaic-accordion-item>

            </mosaic-accordion>
        </mosaic-form-dialog>
      `
    }
})