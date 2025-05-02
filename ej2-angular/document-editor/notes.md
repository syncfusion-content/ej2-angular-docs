---
layout: post
title: Notes in Angular Document editor component | Syncfusion
description: Learn here all about Notes in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Notes 
documentation: ug
domainurl: ##DomainURL##
---

# Notes in Angular Document editor component

DocumentEditorContainer component provides support for inserting footnotes and endnotes through the in-built toolbar. Refer to the following screenshot.

![Insert footnote endnote](images/note-toolbar.jpg)

The Footnotes and endnotes are both ways of adding extra bits of information to your writing outside of the main text. You can use footnotes and endnotes to add side comments to your work or to place other publications like books, articles, or websites.

## Insert footnotes

Document Editor exposes an API to insert footnotes at cursor position programmatically or can be inserted to the end of selected text.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the DocumentEditorContainer component
  template: `<div style="width:100%;"><button ejs-button (click)="insertFootnote()" >Insert Footnote</button>
      <ejs-documenteditor #document_editor id="container" height="330px" style="display:block" [enableEditor]=true>
    </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [EditorService],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public insertFootnote(): void {
    //Insert foot note.
    this.documentEditor?.editor.insertFootnote();
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Insert endnotes

Document Editor exposes an API to insert endnotes at cursor position programmatically or can be inserted to the end of selected text.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  EditorService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the DocumentEditorContainer component
  template: `<div style="width:100%;"><button ejs-button (click)="insertEndnote()" >Insert Endnote</button>
      <ejs-documenteditor #document_editor id="container" height="330px" style="display:block" [enableEditor]=true>
    </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [EditorService],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  public insertEndnote(): void {
    //Insert end note.
    this.documentEditor?.editor.insertEndnote();
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Update or edit footnotes and endnotes

You can update or edit the footnotes and endnotes using the built-in context menu shown up by right-clicking it.
the footnote endnote dialog box popup and you can customize the number format and start at. Refer to the following screenshot.

![Update or edit footnotes and endnotes](images/notes-option.jpg)
