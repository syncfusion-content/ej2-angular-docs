---
layout: post
title: Server side export in Angular Document editor component | Syncfusion
description: Learn here all about Server side export in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Server side export 
documentation: ug
domainurl: ##DomainURL##
---

# Server side export in Angular Document editor component

## SFDT to DOCX export

Document Editor supports server-side export of **Syncfusion Document Text (.SFDT)** to Doc, DOCX, RTF, Txt, WordML, Html formats using server-side helper **Syncfusion.EJ2.DocumentEditor** available in ASP.NET Core & ASP.NET MVC platform in the below NuGet's.

* [Syncfusion.EJ2.WordEditor.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Core)
* [Syncfusion.EJ2.WordEditor.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc5)
* [Syncfusion.EJ2.WordEditor.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.EJ2.WordEditor.AspNet.Mvc4)

Please refer the following code example.

```csharp
  //API controller for the conversion.
  [HttpPost]
  public void ExportSFDT([FromBody]SaveParameter data)
  {
        //Export the document in specified format.
        Stream document = WordDocument.Save(data.content, FormatType.Docx);
        FileStream file = new FileStream("sample.docx", FileMode.OpenOrCreate, FileAccess.ReadWrite);
        document.CopyTo(file);
        file.Close();
        document.Close();
  }

  public class SaveParameter
  {
      public string content { get; set; }
  }
```

Please refer the client side example to serialize the sfdt and send to the server.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, SfdtExportService, TextExportService, WordExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      template: `<div><button ejs-button (click)="saveAsSfdt()" >Export SFDT</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableEditor]=true [enableWordExport]=true [enableSfdtExport]=true> </ejs-documenteditor></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [EditorService, SelectionService, SfdtExportService, TextExportService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public saveAsSfdt(): void {
        let http: XMLHttpRequest = new XMLHttpRequest();
        http.open('POST', 'http://localhost:5000/api/documenteditor/ExportSFDT');
        http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        http.responseType = 'json';
        //Serialize the document content as sfdt.
        let sfdt: any = { content: this.documentEditor.serialize() };
        http.send(JSON.stringify(sfdt));
    };
}
```

> `DocumentEditor` object is available in `DocumentEditorContainer` component(DocumentEditor packaged with toolbar, statusbar & properties pane) as [`documentEditor`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#documenteditor)
