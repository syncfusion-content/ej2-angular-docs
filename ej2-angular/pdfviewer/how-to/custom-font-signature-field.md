---
Layout: post
title: To change the font family in Syncfusion Angular Pdfviewer component 
description: Learn how to change the font family in Form Field's Type Signature in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---


# To Change the Font Family 
Change the Font Family in Type Signature of the Syncfusion PDF Viewer by adding a custom css stylesheet to the document , and then apply the desired font family to the type signature element. Include the Google font link in the HTML head section to apply the Google Font. 

### Signature Field 

The following steps are used to include custom fonts for signature and initial field using `typeSignatureFonts` property.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for using custom fonts in Signature field.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
changeFontFamily(){
	var pdfviewer=(<any>document.getElementById('pdfviewer')).ej2_instances[0];
	pdfviewer.SignatureFieldSettings.typeSignatureFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
   }
   
```
### Initial Field
Insert the following code snippet to implement the functionality for using custom fonts in Initial field.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts
changeFontFamily(){
	var pdfviewer=(<any>document.getElementById('pdfviewer')).ej2_instances[0];
	pdfviewer.InitialFieldSettings.typeInitialFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
   }
```

By implementing this , you can use custom fonts in form field's signature in both `signature` and `initial` field