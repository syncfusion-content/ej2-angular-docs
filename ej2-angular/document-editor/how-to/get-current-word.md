---
layout: post
title: Get current word in Angular Document editor component | Syncfusion
description: Learn here all about Get current word in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get current word 
documentation: ug
domainurl: ##DomainURL##
---

# Get current word in Angular Document editor component

You can get the current word or paragraph content from the Angular Document Editor component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use [`selectCurrentWord`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection#selectcurrentword) API in selection module to select the current word at cursor position and use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the selected content as plain text from Angular Document Editor component.

The following example code illustrates how to select and get the current word as plain text.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (created)="onCreated()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreated() {
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Document editor');
    // Move selection to previous character
    this.container.documentEditor.selection.moveToPreviousCharacter();
    // To select the current word in document
    this.container.documentEditor.selection.selectCurrentWord();

    // To get the selected content as text
    let selectedContentText: string = this.container.documentEditor.selection.text;
    // To get the selected content as SFDT (rich text)
    let selectedContentSFDT: string = this.container.documentEditor.selection.sfdt;
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please check this [`link`](../../document-editor/how-to/get-the-selected-content/#get-the-selected-content-as-sfdt-rich-text)

## Select and get the paragraph in current cursor position

You can use [`selectParagraph`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#selectparagraph) API in selection module to select the current paragraph at cursor position and use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API or [`sfdt`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text or SFDT from Angular Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (created)="onCreated()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreated() {
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Document editor');
    // To select the current paragraph in document
    this.container.documentEditor.selection.selectParagraph();

    // To get the selected content as text
    let selectedContentText: string = this.container.documentEditor.selection.text;
    // To get the selected content as SFDT (rich text)
    let selectedContentSFDT: string = this.container.documentEditor.selection.sfdt;
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.