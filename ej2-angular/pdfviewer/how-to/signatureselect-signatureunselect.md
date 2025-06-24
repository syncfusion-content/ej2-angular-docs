---
layout: post
title: Signature selection events in Angular PDF Viewer component| Syncfusion
description: Learn here all about signatureSelect and signatureUnselect event event in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# SignatureSelect and SignatureUnselect event

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer provides event-handling capabilities for various actions, including selecting and unselecting handwritten signatures. The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events enable developers to programmatically manage the selection state of signatures within the PDF Viewer component.

**signatureSelect** 

The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) event triggers when a handwritten signature annotation is selected. This event allows developers to capture the signature selection and handle it programmatically, such as updating the UI or storing the selection data for further processing.

**signatureUnselect**

The [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) event triggers when a handwritten signature annotation is unselected. This event enables developers to manage the unselection programmatically, which can be useful for tasks like cleanup operations or updating the application's state to reflect that a signature is no longer selected.

The code snippet demonstrates how to subscribe to the [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               (signatureSelect)='signatureSelect($event)'
               (signatureUnselect)='signatureUnselect($event)'
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public signatureSelect(args: any): void {
  console.log('Signature selected:', args);
}

public signatureUnselect(args: any): void {
  console.log('Signature unselected:', args);
}
```

The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer offer robust options for managing the state of handwritten signatures within your application. By handling these events, developers can create a more interactive and dynamic user experience, responding programmatically to signature selection and unselection.

[View sample in GitHub]()