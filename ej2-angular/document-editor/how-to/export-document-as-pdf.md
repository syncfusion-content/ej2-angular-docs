---
layout: post
title: Export document as pdf in Angular| Syncfusion
description: Learn here all about Export document as pdf in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export document as pdf 
documentation: ug
domainurl: ##DomainURL##
---

# Export document as pdf in Angular Document editor component

In this article, we are going to see how to export the document as PDF format. You can export the document as PDF in following ways:

## Export the document as pdf in client-side

Use [`pdf export component`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export) in application level to export the document as pdf using [`exportasimage`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#exportasimage) API. Here, all pages will be converted to image and inserted as pdf pages(works like print as PDF).

>Note: 
* You can install the pdf export packages from this [`link`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export).
* There is one limitation we can’t search the text because we are exporting the pdf as image. 

The following example code illustrates how to export the document as pdf in client-side.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
  ImageFormat,
} from '@syncfusion/ej2-angular-documenteditor';
import {
  PdfBitmap,
  PdfDocument,
  PdfPageOrientation,
  PdfPageSettings,
  PdfSection,
  SizeF,
} from '@syncfusion/ej2-pdf-export';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<button id='export'(click)="onClick()">Export</button>
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
    [enableToolbar]=true >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onClick(): void {
    let pdfdocument: PdfDocument = new PdfDocument();
    let count: number = (this.container as DocumentEditorContainerComponent)
      .documentEditor.pageCount;
    let documentName: string = (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.documentName;
    (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.documentEditorSettings.printDevicePixelRatio = 2;
    let loadedPage = 0;
    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        let format: ImageFormat = 'image/jpeg' as ImageFormat;
        // Getting pages as image
        let image = this.container?.documentEditor.exportAsImage(i, format);
        (image as HTMLImageElement).onload = function () {
          let imageHeight = parseInt(
            (image as HTMLImageElement).style.height
              .toString()
              .replace('px', '')
          );
          let imageWidth = parseInt(
            (image as HTMLImageElement).style.width.toString().replace('px', '')
          );
          let section: PdfSection = pdfdocument.sections.add() as PdfSection;
          let settings: PdfPageSettings = new PdfPageSettings(0);
          if (imageWidth > imageHeight) {
            settings.orientation = PdfPageOrientation.Landscape;
          }
          settings.size = new SizeF(imageWidth, imageHeight);
          (section as PdfSection).setPageSettings(settings);
          let page = section.pages.add();
          let graphics = page.graphics;
          let imageStr = (image as HTMLImageElement).src.replace(
            'data:image/jpeg;base64,',
            ''
          );
          let pdfImage = new PdfBitmap(imageStr);
          graphics.drawImage(pdfImage, 0, 0, imageWidth, imageHeight);
          loadedPage++;
          if (loadedPage == count) {
            // Exporting the document as pdf
            pdfdocument.save(
              (documentName === '' ? 'sample' : documentName) + '.pdf'
            );
          }
        };
      }, 500);
    }
  }
}
```

## Export document as pdf in server-side using Syncfusion DocIO

With the help of [`Syncfusion DocIO`](https://help.syncfusion.com/file-formats/docio/word-to-pdf), you can export the document as PDF in server-side. Here, you can search the text.

The following way illustrates how to convert the document as PDF:

* Using [`serialize`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#serialize) API, convert the document as Sfdt and send it to server-side.

The following example code illustrates how to convert the document to sfdt and pass it to server-side.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
  imports: [DocumentEditorContainerModule],

  standalone: true,
  selector: 'app-container',
  // specifies the template string for the DocumentEditorContainer component
  template: `<button id='export'(click)="onClick()">Export</button><ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
  providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;

  ngOnInit(): void {}
  onClick(): void {
    let obj = this;
    let http: XMLHttpRequest = new XMLHttpRequest();
    // Replace your running web service Url here
    http.open('POST', 'http://localhost:62869/api/documenteditor/ExportPdf');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    //Serialize document content as SFDT.
    let sfdt: any = { content: obj.container?.documentEditor.serialize() };
    //Send the sfdt content to server side.
    http.send(JSON.stringify(sfdt));
  }
}
```

* Using Save API in server-side, you can convert the sfdt to stream.
* Finally, convert the stream to PDF using [`Syncfusion.DocIORenderer.Net.Core`](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) library.

The following example code illustrates how to process the sfdt in server-side.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("ExportPdf")]
public void ExportPdf([FromBody]SaveParameter data)
{
    // Converts the sfdt to stream
    Stream document = WordDocument.Save(data.content, FormatType.Docx);
    Syncfusion.DocIO.DLS.WordDocument doc = new Syncfusion.DocIO.DLS.WordDocument(document, Syncfusion.DocIO.FormatType.Docx);
    //Instantiation of DocIORenderer for Word to PDF conversion
    DocIORenderer render = new DocIORenderer();
    //Converts Word document into PDF document
    PdfDocument pdfDocument = render.ConvertToPDF(doc);
    // Saves the document to server machine file system, you can customize here to save into databases or file servers based on requirement.
    FileStream fileStream = new FileStream("sample.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite);
    //Saves the PDF file
    pdfDocument.Save(fileStream);
    pdfDocument.Close();
    fileStream.Close();
    document.Close();
}
```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Export-document-as-PDF-in-Document-Editor/).