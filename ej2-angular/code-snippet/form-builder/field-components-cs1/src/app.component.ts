import { Component, ViewChild } from '@angular/core';
import { FormBuilderComponent, FormBuilderModule } from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderModule],
  template: `
  <ejs-form-builder #formObj [formTemplates]="formTemplates" ></ejs-form-builder>
  `
})
export class AppComponent {
  @ViewChild('formObj') public formObj?: FormBuilderComponent;

  public formTemplates = [
    {
      id: "login form",
      title: "login",
      schema: {
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
      }
    }
  ];
}