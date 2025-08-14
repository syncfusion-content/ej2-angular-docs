---
layout: post
title: Form fields in Angular Document editor component | Syncfusion
description: Learn here all about Form fields in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form fields 
documentation: ug
domainurl: ##DomainURL##
---

# Form fields in Angular Document editor component

DocumentEditorContainer component provide support for inserting Text, CheckBox, DropDown form fields through in-built toolbar.

![Form Fields](images/toolbar-form-fields.png)

## Insert form field

Form fields can be inserted using [`insertFormField`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertformfield) method in editor module.

```typescript
//Insert Text form field
this.documentEditor.editor.insertFormField('Text');
//Insert Checkbox form field
this.documentEditor.editor.insertFormField('CheckBox');
//Insert Drop down form field
this.documentEditor.editor.insertFormField('DropDown');
```

## Get form field names

All the form fields names form current document can be retrieved using [`getFormFieldNames()`](../api/document-editor/#getformfieldnames).

```typescript
let formFieldsNames: string[] = this.documentEditor.getFormFieldNames();
```

## Get form field properties

Form field properties can be retrieved using [`getFormFieldInfo()`](../api/document-editor/#getformfieldinfo).

```typescript
//Text form field
let textfieldInfo: TextFormFieldInfo = this.documentEditor.getFormFieldInfo('Text1') as TextFormFieldInfo;
//Checkbox form field
let checkboxfieldInfo: CheckBoxFormFieldInfo = this.documentEditor.getFormFieldInfo('Check1') as CheckBoxFormFieldInfo;
//Dropdown form field
let dropdownfieldInfo: DropDownFormFieldInfo = this.documentEditor.getFormFieldInfo('Drop1') as DropDownFormFieldInfo;
```

## Set form field properties

Form field properties can be modified using [`setFormFieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#setformfieldinfo).

```typescript
// Set text form field properties
let textfieldInfo: TextFormFieldInfo = this.documentEditor.getFormFieldInfo('Text1') as TextFormFieldInfo;
textfieldInfo.defaultValue = "Hello";
textfieldInfo.format = "Uppercase";
textfieldInfo.type = "Text";
textfieldInfo.name = "Text2";
this.documentEditor.setFormFieldInfo('Text1',textfieldInfo);

// Set checkbox form field properties
let checkboxfieldInfo: CheckBoxFormFieldInfo = this.documentEditor.getFormFieldInfo('Check1') as CheckBoxFormFieldInfo;
checkboxfieldInfo.defaultValue = true;
checkboxfieldInfo.name = "Check2";
this.documentEditor.setFormFieldInfo('Check1',checkboxfieldInfo);

// Set checkbox form field properties
let dropdownfieldInfo: DropDownFormFieldInfo = this.documentEditor.getFormFieldInfo('Drop1') as DropDownFormFieldInfo;
dropdownfieldInfo.dropdownItems = ['One','Two', 'Three'];
dropdownfieldInfo.name = "Drop2";
this.documentEditor.setFormFieldInfo('Drop1',dropdownfieldInfo);
```

>Note:If a form field already exists in the document with the new name specified, the old form field name property will be cleared and it will not be accessible. Ensure the new name is unique.

## Form Field Shading

You can customize form field shading at the application level using the [`formFieldSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#formFieldSettings) property.

The example code below demonstrates how to set a custom shading color and how to disable shading (by default, shading is enabled).

```typescript
// Set a custom shading color (for example, white) 
this.container.documentEditorSettings.formFieldSettings.shadingColor = '#ffffff';

// Disable form field shading entirely 
this.container.documentEditorSettings.formFieldSettings.applyShading = false;
```

N> This customization only affects the application UI and will not be preserved when exporting the document.

## Export form field data

Data of the all the Form fields in the document can be exported using [`exportFormData`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#exportformdata).

```typescript
let formFieldDate: FormFieldData[] = this.documentEditor.exportFormData();
```

## Import form field data

Form fields can be prefilled with data using [`importFormData`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#importformdata).

```typescript
let textformField: FormFieldData = {fieldName: 'Text1', value: 'Hello World'};
let checkformField: FormFieldData = {fieldName: 'Check1', value: true};
let dropdownformField: FormFieldData = {fieldName: 'Drop1', value: 1};
//Import form field data
this.documentEditor.importFormData([textformField,checkformField,dropdownformField]);
```

## Reset form fields

Reset all the form fields in current document to default value using [`resetFormFields`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#resetformfields).

```typescript
this.documentEditor.resetFormFields();
```

## Protect the document in form filling mode

Document Editor provides support for protecting the document with `FormFieldsOnly` protection. In this protection, user can only fill form fields in the document.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<div><button ejs-button (click)="protectDocument()" >Protect</button>
  <button ejs-button (click)="unProtectDocument()" >Unprotect</button>
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]="true">
    </ejs-documenteditorcontainer>
</div>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;

  ngOnInit(): void {}
  public protectDocument(): void {
    //enforce protection
    this.container?.documentEditor.editor.enforceProtection(
      '123',
      'FormFieldsOnly'
    );
  }

  public unProtectDocument(): void {
    //stop the document protection
    this.container?.documentEditor.editor.stopProtection('123');
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In stop protection method, parameter denotes the password.