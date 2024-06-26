---
layout: post
title: Insert Page Number in Angular Document Editor | Syncfusion
description: Learn here all about Insert page number and navigate to page in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Insert page number and navigate to page 
documentation: ug
domainurl: ##DomainURL##
---

# Insert Page Number and Navigate in Angular Document Editor component

You can insert page number and navigate to specific page in Angular Document Editor component by following ways.

## Insert page number

You can use [`insertPageNumber`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertpagenumber) API in editor module to insert the page number in current cursor position. By default, Page number will insert in Arabic number style. You can change it, by providing the number style in parameter.

>Note: Currently, Documenteditor have options to insert page number at current cursor position.

The following example code illustrates how to insert page number in header.

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
    // To move the selection to header
    this.container.documentEditor.selection.goToHeader();
    // Insert page number in the current cursor position
    this.container.documentEditor.editor.insertPageNumber();
  }
}
```

Also, you use [`insertField`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertfield) API in Editor module to insert the Page number in current position

```typescript
//Current page number
this.container.documentEditor.editor.insertField('PAGE \* MERGEFORMAT', '1');

```

## Get page count

You can use [`pageCount`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#pagecount) API to gets the total number of pages in Document.

The following example code illustrates how to get the number of pages in Document.

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
    // To get the total number of pages
    let pageCount = this.container.documentEditor.pageCount;
  }
}
```

## Navigate to specific page

You can use [`goToPage`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#gotopage) API in Selection module to move selection to the start of the specified page number.

The following example code illustrates how to move selection to specific page.

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
    // To move selection to page number 2
    this.container.documentEditor.selection.goToPage(2);
  }
}
```