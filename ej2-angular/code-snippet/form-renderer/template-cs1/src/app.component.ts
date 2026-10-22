import { Component, signal, ViewChild } from '@angular/core';
import { FormRendererModule, FormRendererComponent, Schema, CustomWidgetSettingsDirective, CustomWidgetSettingDirective, CustomWidgetSettingModel } from '@syncfusion/ej2-angular-form-renderer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormRendererModule, CustomWidgetSettingDirective, CustomWidgetSettingsDirective],
    template: `
  <ejs-form-renderer #formObj [schema]="schema"  (submit)="onSubmit($event)">
    <e-customwidgetsettings>
      <e-customwidgetsetting type="textbox">
        <ng-template #template let-data>     
          <input
            [type]="data.fieldData?.textboxType || data.textboxType"
            [id]="data.fieldData?.id || data.id"
            [name]="data.fieldData?.name || data.name"
            [placeholder]="data.fieldData?.placeholder"
            class="custom-input"
            [value]="data.value || ''"
            (input)="onInputChange($event, data, formObj)"
          />
        </ng-template>
      </e-customwidgetsetting>
    </e-customwidgetsettings>
</ejs-form-renderer>`
})
export class AppComponent {
    @ViewChild('formObj') public formObj?: FormRendererComponent;
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
                "placeholder": "Enter your email",
                "widget": "textbox",
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "placeholder": "Enter your password",
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

    public onInputChange(event: Event, data: any, formObj: FormRendererComponent) {
        const value = (event.target as HTMLInputElement).value;
        if (this.formObj) {
            this.formObj!.setFieldValue(data.fieldData.id, value);
        }
    }
    public onSubmit(args: any) {
        if (args.data) {
            console.log(args.data, args.isValid);
        }
    }
}