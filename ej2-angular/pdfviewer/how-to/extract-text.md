---
layout: post
title: Extract Text in Vue Pdfviewer component | Syncfusion
description: Learn about the Extract Text in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Extract Text
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Method in Syncfusion<sup style="font-size:70%">&reg;</sup> PdfViewer Control

The `extractText` method of the Syncfusion PdfViewer control enables text extraction from one or more pages in a PDF document. This method is useful for retrieving the text content along with its associated data, such as the bounds of each text element.

### extractText Method
The extractText method retrieves text data from the specified page(s) of a PDF document. It can extract text from one page, a range of pages, or even provide detailed text data, depending on the options specified.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex Or isOptions:** This can either be the ending page index for the text extraction (for extracting from multiple pages) or an option specifying text extraction criteria for a single page.

**options (optional):** Specifies additional options, such as extracting plain text `TextOnly` or more detailed text data `TextAndBounds`. You can specify various options for text extraction. These options determine whether you want to extract plain text, text with bounds, or detailed text data.

***TextOnly:*** Extracts only the plain text content without bounds or additional information.

***TextAndBounds:*** Extracts text content along with its bounds (coordinates) within the PDF.

#### Returns:
The method returns a Promise that resolves to an object containing two properties:

**textData:** An array of TextDataSettingsModel objects, each representing the details of the extracted text (including bounds, page text, etc.).

**pageText:** A concatenated string of plain text extracted from the specified page(s).

### Usage of extractText in Syncfusion PdfViewer Control
Here is an example that demonstrates how to use the extractText method:

```ts
import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  AnnotationService,
  TextSearchService,
  TextSelectionService,
  FormFieldsService,
  FormDesignerService,
  PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  template: `
    <div class="content-wrapper">
    <button #btn1 (click)="extrctText()">extrctText</button>
    <button #btn2 (click)="extrctsText()">extrctsText</button>
      <ejs-pdfviewer 
        id="pdfViewer"
        [resourceUrl]="resourceUrl"
        [documentPath]="document"
        style="height: 640px; display: block;">
      </ejs-pdfviewer>
    </div>
  `,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
    FormFieldsService,
    FormDesignerService,
    PrintService
  ]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourceUrl: string = 'https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib';

  ngOnInit(): void { }
  // Function to extract text from a specific page (page 1)
 extrctText(): void {   
  const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  viewer.extractText(1, 'TextOnly').then((val: any) => {
     console.log('Extracted Text from Page 1:');
      console.log(val);
  });
}

// Function to extract text from a range of pages (pages 0 to 2)
extrctsText(): void {    
  const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
  viewer.extractText(0, 2, 'TextOnly').then((val: any) => {
     console.log('Extracted Text from Pages 0 to 2:');
     console.log(val);
  });
}

}
```

#### Explanation:
**Single Page Extraction:** The first `extractText` call extracts text from page 1 (`startIndex = 1`), using the 'TextOnly' option for plain text extraction.

**Multiple Pages Extraction:** The second extractText call extracts text from pages 0 through 2 (`startIndex = 0, endIndex = 2`), using the `TextOnly` option for plain text extraction.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)