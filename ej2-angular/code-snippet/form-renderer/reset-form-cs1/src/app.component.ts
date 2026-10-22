import { Component } from '@angular/core';
import { FormRendererAllModule, Schema } from '@syncfusion/ej2-angular-form-renderer';

@Component({
    imports: [
        FormRendererAllModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `
    <div class="form-container">
      <ejs-form-renderer
        [schema]="schema">
      </ejs-form-renderer>
    </div>`
})
export class AppComponent {
    public schema: Schema = {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1792584735912_973",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox",
                "labelPosition": "top"
            },
            "password": {
                "id": "textbox_1792584735912_500",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox",
                "labelPosition": "top"
            },
            "rememberMe": {
                "id": "checkbox_1792584735912_491",
                "name": "remember",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "submit": {
                "id": "default-submit-button",
                "name": "defaultSubmit",
                "type": "button",
                "label": "Submit",
                "buttonType": "submit",
                "widget": "button",
                "allowMultiple": true,
                "style": "primary",
                "buttonsGroups": [
                    {
                        "id": "reset_button_initial",
                        "name": "defaultFormreset",
                        "type": "reset",
                        "label": "Reset",
                        "buttonType": "reset",
                        "widget": "button",
                        "style": "error",
                        "disabled": false
                    },
                    {
                        "label": "Submit",
                        "type": "submit",
                        "style": "primary",
                        "iconCss": "",
                        "iconPosition": "Left",
                        "disabled": false
                    }
                ],
                "gap": "16px"
            }
        },
        "layout": [
            {
                "type": "field",
                "propertyId": "emailAddress"
            },
            {
                "type": "field",
                "propertyId": "password"
            },
            {
                "type": "field",
                "propertyId": "rememberMe"
            },
            {
                "type": "field",
                "propertyId": "submit"
            }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    };
}
