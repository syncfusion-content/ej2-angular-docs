---
layout: post
title: Insert text in current position in Angular Document editor component | Syncfusion
description: Learn here all about Insert text in current position in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Insert text in current position 
documentation: ug
domainurl: ##DomainURL##
---

# Insert text in current position in Angular Document editor component

You can insert the text, paragraph and rich-text content in Angular Document Editor component.

## Insert text in current cursor position

You can use [`insertText`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#inserttext) API in editor module to insert the text in current cursor position.

The following example illustrates how to add the text in current selection.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorContainerComponent, ToolbarService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      // specifies the template string for the Document Editor container component
      template: `<div><button ejs-button (click)="insertText()" >Insert Text</button>
      <ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;

    public insertText(): void {
        // It will insert the provided text in current selection
        this.container.documentEditor.editor.insertText('Syncfusion');
    }
}
```

Please check below gif which illustrates how to insert text in current cursor position on button click:

![Insert text in current cursor position in Javascript document editor](../images/insert_text.gif)

## Insert paragraph in current cursor position

To insert new paragraph at current selection, you can can use [`insertText`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#inserttext) API with parameter as `\r\n` or `\n`.

The following example code illustrates how to add the new paragraph in current selection.

```typescript
// It will add the new paragraph in current selection
this.container.documentEditor.editor.insertText('\n');
```

## Insert the rich-text content

To insert the HTML content, you have to convert the HTML content to SFDT Format using [`web service`](../../document-editor/web-services-overview). Then use [`paste`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#paste) API to insert the sfdt at current cursor position.

>Note: Html string should be welformatted html. [`DocIO`](https://help.syncfusion.com/file-formats/docio/html) support only welformatted XHTML.  

The following example illustrates how to insert the HTML content at current cursor position.

* Send the HTML content to server side for SFDT conversion. Refer to the following example to send the HTML content to server side and inserting it in current cursor position.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "searchHighlightColor" [enableToolbar]=true (created)="onCreated()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreated() {
    let proxy = this;
    let htmltags: string =
      "<?xml version='1.0' encoding='utf - 8'?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN''http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'><html xmlns ='http://www.w3.org/1999/xhtml' xml:lang='en' lang ='en'><body><h1>The img element</h1><img src='https://www.w3schools.com/images/lamp.jpg' alt ='Lamp Image' width='500' height='600'/></body></html>";
      document.getElementById('export').addEventListener('click', () => {
          let http: XMLHttpRequest = new XMLHttpRequest();
          http.open('POST', 'http://localhost:5000/api/documenteditor/LoadString');
          http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
          http.responseType = 'json';
          http.onreadystatechange = function () {
            if (http.readyState === 4) {
              if (http.status === 200 || http.status === 304) {
                // Insert the sfdt content in cursor position using paste API
                proxy.container.documentEditor.editor.paste(http.response);
              } else {
                alert('failed;');
              }
            }
          };

          let htmlContent: any = { content: htmltags };
          http.send(JSON.stringify(htmlContent));
      });
  }
}
```

* Please refer the following code example for server-side web implementation for HTML conversion using DocumentEditor.

```c#
//API controller for the conversion.
[HttpPost]
public string LoadString([FromBody]InputParameter data)
{
      // You can also load HTML file/string from server side.
      Syncfusion.EJ2.DocumentEditor.WordDocument document = Syncfusion.EJ2.DocumentEditor.WordDocument.LoadString(data.content, FormatType.Html); // Convert the HTML to SFDT format.
      string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
      document.Dispose();
      return json;
}

public class InputParameter
{
      public string content {get; set; }
}
```

>Note: The above example illustrates inserting HTML content. Similarly, you can insert any rich-text content by converting any of the supported file formats (DOCX, DOC, WordML, HTML, RTF) to SFDT.