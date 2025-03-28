---
layout: post
title: Disable Header and Footer Edit in Angular Document Editor | Syncfusion
description: Learn here all about Disable header and footer edit in document editor in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disable header and footer edit in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer edit in Angular Document editor component

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#restrictediting) property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the Document read only mode. So, by using this property, and if selection inside header or footer, you can set this property as true.

The following example code illustrates how to header and footer edit in `DocumentEditorContainer` instance.

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
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=true 
      (selectionChange)="selectionChanges()"
      >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  selectionChanges() {
    // Check whether selection is in header
    if (
      (
        this.container as DocumentEditorContainerComponent
      ).documentEditor.selection.contextType.indexOf('Header') > -1 ||
      // Check whether selection is in Footer
      (
        this.container as DocumentEditorContainerComponent
      ).documentEditor.selection.contextType.indexOf('Footer') > -1
    ) {
      // Change the document to read only mode
      (
        this.container as DocumentEditorContainerComponent
      ).restrictEditing = true;
    } else {
      // Change the document to editable mode
      (
        this.container as DocumentEditorContainerComponent
      ).restrictEditing = false;
    }
  }
}
```

Otherwise, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#closeheaderfooter) API in selection module.

The following example code illustrates how to close header and footer when selection is inside header or footer in `DocumentEditorContainer` instance.

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
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=true 
      (selectionChange)="selectionChanges()"
      >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  selectionChanges() {
    // Check whether selection is in header
    if (
      (
        this.container as DocumentEditorContainerComponent
      ).documentEditor.selection.contextType.indexOf('Header') > -1 ||
      // Check whether selection is in Footer
      (
        this.container as DocumentEditorContainerComponent
      ).documentEditor.selection.contextType.indexOf('Footer') > -1
    ) {
      // Close header Footer
      this.container?.documentEditor.selection.closeHeaderFooter();
    }
  }
}
```

## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use [`isReadOnly`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#isreadonly) property in Document editor to disable header and footer edit.

The following example code illustrates how to header and footer edit in `DocumentEditor` instance.

```typescript
// import { Component, OnInit, ViewChild } from '@angular/core';
// import {
//   ToolbarService,
//   DocumentEditorContainerComponent,
// } from '@syncfusion/ej2-angular-documenteditor';
// @Component({
//   selector: 'app-root',
//   // specifies the template string for the DocumentEditorContainer component
//   template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=false (selectionChange)="selectionChanges()"> </ejs-documenteditorcontainer>`
// })
// export class AppComponent implements OnInit {
//   @ViewChild('documenteditor_default')
//   public container: DocumentEditorContainerComponent;
//   ngOnInit(): void {}
// }

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService,
    SearchService, EditorService, ImageResizerService, EditorHistoryService, ContextMenuService,
    OptionsPaneService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService,
    PageSetupDialogService, StyleDialogService, ListDialogService, ParagraphDialogService, BulletsAndNumberingDialogService,
    FontDialogService, TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService,
    CellOptionsDialogService, StylesDialogService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-root',
      template: `<ejs-documenteditor #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="330px" style="display:block" [isReadOnly]=false [enableSelection]=true
      [enablePrint]=true [enableSfdtExport]=true [enableWordExport]=true [enableOptionsPane]=true [enableContextMenu]=true
      [enableHyperlinkDialog]=true [enableBookmarkDialog]=true [enableTableOfContentsDialog]=true [enableSearch]=true
      [enableParagraphDialog]=true [enableListDialog]=true [enableTablePropertiesDialog]=true [enableBordersAndShadingDialog]=true
      [enablePageSetupDialog]=true [enableStyleDialog]=true [enableFontDialog]=true [enableTableOptionsDialog]=true
      [enableTableDialog]=true [enableImageResizer]=true [enableEditor]=true [enableEditorHistory]=true (selectionChange)="selectionChanges()">
      </ejs-documenteditor>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService,
          ImageResizerService, EditorHistoryService, ContextMenuService, OptionsPaneService, HyperlinkDialogService, TableDialogService,
          BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, StyleDialogService, ListDialogService,
          ParagraphDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService,
          BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, StylesDialogService]
})

export class AppComponent {
    @ViewChild('documenteditor_default')
    public documentEditor: DocumentEditorComponent;
    selectionChanges() {
        // Check whether selection is in header
     if (this.documentEditor.selection.contextType.indexOf('Header') > -1 ||
     // Check whether selection is in Footer
     this.documentEditor.selection.contextType.indexOf('Footer') > -1) {
       // Change the document to read only mode
       this.documentEditor.isReadOnly = true;
     } else {
       // Change the document to editable mode
       this.documentEditor.isReadOnly = false;
     }
    };
}
```
