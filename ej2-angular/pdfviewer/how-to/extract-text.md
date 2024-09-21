---
layout: post
title: Extract text in Angular Pdfviewer component | Syncfusion
description: Learn here all about Extract text in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Extract text 
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text using the Syncfusion PDF Viewer

The PDF Viewer library allows you to extract the text from a page along with the bounds. Text extraction can be done using the [**isExtractText**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#isextracttext) property and [**extractTextCompleted**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#extracttextcompleted) event.

The following steps are used to extract the text from the page.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to extract the text from a page .

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               (extractTextCompleted)='extractTextCompleted($event)'
               [isExtractText]=true
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public extractTextCompleted(e: ExtractTextCompletedEventArgs): void {
// Extract the Complete text of load document
console.log(e);
console.log(e.documentTextCollection[1]);
// Extract the Text data.
console.log(e.documentTextCollection[1][1].TextData);
// Extract Text in the Page.
console.log(e.documentTextCollection[1][1].PageText);
// Extract Text along with Bounds
console.log(e.documentTextCollection[1][1].TextData[0].Bounds);
}
```

Find the Sample, [how to Extract Text](https://stackblitz.com/edit/angular-uvgdd7?devtoolsheight=33&file=app.component.html)
