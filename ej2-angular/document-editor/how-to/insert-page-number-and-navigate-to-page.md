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

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

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

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Navigate to specific page

You can use [`goToPage`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#gotopage) API in Selection module to move selection to the start of the specified page number.

The following example code illustrates how to move selection to specific page.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {
  CustomToolbarItemModel,
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      (created)="onCreate()" 
      [enableToolbar]="true">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;

  ngOnInit(): void {}

  // Called when the DocumentEditorContainer is created
  onCreate() {
    const sfdt: any = {
      sfdt: 'UEsDBAoAAAAIAPaKZVrvd0ouRgMAAPguAAAEAAAAc2ZkdO1ZW2/aMBj9K8h7RRVJICF5mzqhPUxTpT1WPDiJTaw5lznuaIv63+dbuBRC05ZLNJmXY+LY5/g7nw3ytwJlxUlOntEvnHIQcfaAhqBGCYjuV0BgxUC0AtUSRL7jDkGVgSgIRYPmoiGQGeQGY4NZCiLPHwJsMMUViEYCS6QbMdEgmMBPtLyDCwSGABUYRGI4lii6GWkQKSS4AJEjEGmsFkUtJvjKYEwSMb5ISlqrHvRnqZDGPFFDdc/9/EWQqtVVWC4tTlktkQtZK9FHuUa20Bib75mGvxIE1ryQwkuWQyp4qdSpOhI9q1gdhrRG4glRbPvPORWUABNWc/AiZJ1VkdFhaSyNpbE0lsbSWBpLY2ksjaWxNJbG0lgaS2NpLM1/QdN+4VajpCxSe+NmaSyNpbE0H6KZi4G6Z74ueZiDVr1iWrh+BpHjiIZ4BdxCSmJGxLQPqiJTc10CggoyXaYRQ+SZrQfJ1tYwmGxmxnCnC+MCo60nQumn4kBJYQpPGrFBrsXGtQKowZScqFlQSdcVLqP2t2Rt2sti3V4mTcltE2hcG0UcU91I+VIX0UwlC5niWCbEArH22iDONX+lIc14rpVgrAUmZV6ZyD/x2KiUcQCyCvdlpj5AZcGT+g3dyQUz+eei+jqdiscNhUxeyfgdwZQUi4FzKtI3rZSlzW0vb0ZB6Pi+PxkFgTsKx8Guuc5+wU9nur+b6YMfZJFx6YyKrzubjEMfvErezUu7KWye63Ll1o7cDtDgNoMMvBHF5iWuc+Aicr8hDB8oH9xBBhcMVtlgVhZ8ra2le0fjy+uFuBdLh/dlg9uWDd5ls8Htkg1uezZ418qGRpvXU4O9NoPdoxFzZl7geyc02OtisNdu8PnkdjR43FODx/sGk+aH+ZI7eNzF4PEhg88tt6PBk54aPDmwgy/o66SLr5ODG/eqdvo9tdN/l50nP4f9Lnb677TzAsdv0FM7g48dvyf3Nejia/DR4/cCBk97avC07Q/U6GZyNGae+pzQ4mkXi6ftf6HOKbijyWFPTQ6P7eLruB12cTs8vqH7YDtip/H88HXV/qXMTkBV7IyKRtSsLPn1RRkV8gqSqmtJMRnVmOQamfn6qJHki1pN+w9QSwECFAAKAAAACAD2imVa73dKLkYDAAD4LgAABAAAAAAAAAAAAAAAAAAAAAAAc2ZkdFBLBQYAAAAAAQABADIAAABoAwAAAAA=',
    };

    // Open the SFDT document in the DocumentEditor
    this.container?.documentEditor.open(sfdt);

    // Move selection to page number 2
    this.container?.documentEditor.selection.goToPage(2);
  }
}

```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
