import { Component, ViewChild } from '@angular/core';
import { FormBuilderComponent, Schema, FormBuilderModule, FormWidgetType, ToolboxItemSettingDirective, ToolboxItemSettingsDirective } from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderModule, ToolboxItemSettingDirective, ToolboxItemSettingsDirective],
  template: `
  <ejs-form-builder [schema]="schema" #formObj >
    <e-toolboxitemsettings>
      <e-toolboxitemsetting [type]="formType">
        <ng-template #template let-data>
          <input 
            [type]="data.fieldData?.textboxType || data.textboxType"
            [id]="data.fieldData?.id || data.id"
            [name]="data.fieldData?.name || data.name"
            [placeholder]="data.fieldData?.placeholder"
            class="custom-input"
            [value]="data.value || ''"
            (input)="onInputChange($event, data)"
          />
        </ng-template>
      </e-toolboxitemsetting>
    </e-toolboxitemsettings>
  </ejs-form-builder>
  `
})
export class AppComponent {
  @ViewChild('formObj') public formObj?: FormBuilderComponent;

  public formType: any = FormWidgetType.Textbox;
  public onInputChange(event: Event, data: any) {
    const value = (event.target as HTMLInputElement).value;
    if (this.formObj) {
      this.formObj!.setFieldValue(data.fieldData.id, value);
    }
  }
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
}