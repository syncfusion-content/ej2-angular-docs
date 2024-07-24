---
layout: post
title: Lock Form Fields in Angular PDF Viewer component | Syncfusion
description: Learn here all about Lock Form Fields in a document in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Lock Form Fields in a document 
documentation: ug
domainurl: ##DomainURL##
---

# Locking Form Fields in a PDF document

The PDF Viewer component offers the ability to enable or disable the locking option for form fields within a PDF document. When a form field is locked, it's prevented from being moved, resized, or removed.

## Locking Form Fields Programmatically

Form fields can be locked either by default settings or by utilizing an event and the [isReadOnly](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formField/#isreadonly) API.

The provided code snippet exemplifies how to lock form fields in a PDF document during the document loading process. It utilizes the [documentLoad](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#documentload) event to add form fields and subsequently sets them as read-only using the [isReadOnly](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/formField/#isreadonly) API. This ensures that users cannot modify the form fields, thereby preserving data integrity.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         AnnotationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, PageOrganizerService,
         TextFieldSettings, RadioButtonFieldSettings, InitialFieldSettings,
         CheckBoxFieldSettings, SignatureFieldSettings, LoadEventArgs } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource' 
                    (documentLoad)="documentLoaded($event)"
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {

  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
  }
  public documentLoaded(e: LoadEventArgs): void {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    if (e.documentName === 'form-designer.pdf') {
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'First Name',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'Middle Name',
        bounds: { X: 338, Y: 229, Width: 150, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'Last Name',
        bounds: { X: 530, Y: 229, Width: 150, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('RadioButton', {
        bounds: { X: 148, Y: 289, Width: 18, Height: 18 },
        name: 'Gender',
        isSelected: false,
      } as RadioButtonFieldSettings);
      viewer.formDesignerModule.addFormField('RadioButton', {
        bounds: { X: 292, Y: 289, Width: 18, Height: 18 },
        name: 'Gender',
        isSelected: false,
      } as RadioButtonFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOB Month',
        bounds: { X: 146, Y: 320, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOB Date',
        bounds: { X: 193, Y: 320, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOB Year',
        bounds: { X: 242, Y: 320, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('InitialField', {
        name: 'Agree',
        bounds: { X: 148, Y: 408, Width: 200, Height: 43 },
      } as InitialFieldSettings);
      viewer.formDesignerModule.addFormField('InitialField', {
        name: 'Do Not Agree',
        bounds: { X: 148, Y: 466, Width: 200, Height: 43 },
      } as InitialFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Text Message',
        bounds: { X: 56, Y: 664, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Email',
        bounds: { X: 242, Y: 664, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Appointment Reminder',
        bounds: { X: 56, Y: 740, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Request for Customerservice',
        bounds: { X: 56, Y: 778, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Information Billing',
        bounds: { X: 290, Y: 740, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'My Email',
        bounds: { X: 146, Y: 850, Width: 200, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'My Phone',
        bounds: { X: 482, Y: 850, Width: 200, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('SignatureField', {
        name: 'Sign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
      } as SignatureFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOS Month',
        bounds: { X: 386, Y: 923, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOS Date',
        bounds: { X: 434, Y: 923, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOS Year',
        bounds: { X: 482, Y: 923, Width: 35, Height: 24 },
      } as TextFieldSettings);
    }
    var formFields = viewer.retrieveFormFields();
    formFields.map((formField: any) => {
      var isReadOnly = { isReadOnly: true };
      viewer.formDesignerModule.updateFormField(formField, isReadOnly);
    });
  }
}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         AnnotationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, PageOrganizerService,
         TextFieldSettings, RadioButtonFieldSettings, InitialFieldSettings,
         CheckBoxFieldSettings, SignatureFieldSettings, LoadEventArgs } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [serviceUrl]='service' 
                    (documentLoad)="documentLoaded($event)"
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {

  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
  public service: string = "https://services.syncfusion.com/angular/production/api/pdfviewer";
  ngOnInit(): void {
  }
  public documentLoaded(e: LoadEventArgs): void {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    if (e.documentName === 'form-designer.pdf') {
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'First Name',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'Middle Name',
        bounds: { X: 338, Y: 229, Width: 150, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'Last Name',
        bounds: { X: 530, Y: 229, Width: 150, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('RadioButton', {
        bounds: { X: 148, Y: 289, Width: 18, Height: 18 },
        name: 'Gender',
        isSelected: false,
      } as RadioButtonFieldSettings);
      viewer.formDesignerModule.addFormField('RadioButton', {
        bounds: { X: 292, Y: 289, Width: 18, Height: 18 },
        name: 'Gender',
        isSelected: false,
      } as RadioButtonFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOB Month',
        bounds: { X: 146, Y: 320, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOB Date',
        bounds: { X: 193, Y: 320, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOB Year',
        bounds: { X: 242, Y: 320, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('InitialField', {
        name: 'Agree',
        bounds: { X: 148, Y: 408, Width: 200, Height: 43 },
      } as InitialFieldSettings);
      viewer.formDesignerModule.addFormField('InitialField', {
        name: 'Do Not Agree',
        bounds: { X: 148, Y: 466, Width: 200, Height: 43 },
      } as InitialFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Text Message',
        bounds: { X: 56, Y: 664, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Email',
        bounds: { X: 242, Y: 664, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Appointment Reminder',
        bounds: { X: 56, Y: 740, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Request for Customerservice',
        bounds: { X: 56, Y: 778, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Information Billing',
        bounds: { X: 290, Y: 740, Width: 20, Height: 20 },
        isChecked: false,
      } as CheckBoxFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'My Email',
        bounds: { X: 146, Y: 850, Width: 200, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'My Phone',
        bounds: { X: 482, Y: 850, Width: 200, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('SignatureField', {
        name: 'Sign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
      } as SignatureFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOS Month',
        bounds: { X: 386, Y: 923, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOS Date',
        bounds: { X: 434, Y: 923, Width: 35, Height: 24 },
      } as TextFieldSettings);
      viewer.formDesignerModule.addFormField('Textbox', {
        name: 'DOS Year',
        bounds: { X: 482, Y: 923, Width: 35, Height: 24 },
      } as TextFieldSettings);
    }
    var formFields = viewer.retrieveFormFields();
    formFields.map((formField: any) => {
      var isReadOnly = { isReadOnly: true };
      viewer.formDesignerModule.updateFormField(formField, isReadOnly);
    });
  }
}

{% endhighlight %}
{% endtabs %}