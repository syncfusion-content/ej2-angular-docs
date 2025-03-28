---
layout: post
title: Hide Toolbar and Panes in Angular Document Editor | Syncfusion
description: Learn here all about Hide tool bar and properties pane in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hide tool bar and properties pane 
documentation: ug
domainurl: ##DomainURL##
---

# Hide tool bar and properties pane in Angular Document editor component

**Document editor container** provides the main document view area along with the built-in toolbar and properties pane.

**Document editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, Document editor container has built-in properties pane which contains options for formatting text, table, image and header and footer. You can use [`showPropertiesPane`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel/#showpropertiespane) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel/) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [showPropertiesPane]=false
      [enableToolbar]=true >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
}
```

>Note: Positioning and customizing the properties pane in Document editor container is not possible. Instead, you can hide the exiting properties pane and create your own pane using public API's.

## Hide the toolbar

You can use [`enableToolbar`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel/#enabletoolbar) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel/) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=false >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
}
```

## See Also

* [How to customize the toolbar](../../document-editor/how-to/customize-tool-bar)