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
        [schema]="schema"
        (submit)="onSubmit($event)">
      </ejs-form-renderer>
    </div>`
})
export class AppComponent {
    public schema: Schema = {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "submit": {
                "id": "submit_button_initial",
                "name": "defaultFormsubmit",
                "type": "button",
                "label": "Submit",
                "buttonType": "submit",
                "widget": "button",
                "style": "primary",
                "disabled": false
            }
        },
        "layout": [
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" },
            { "type": "field", "propertyId": "submit" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    };

    public onSubmit(args: any): void {
        if (args.data) {
            console.log('Submit event fired:', args);
            console.log('Form data:', args.data, 'isValid:', args.isValid);
        }
    }
}
