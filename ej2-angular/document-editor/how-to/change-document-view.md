---
layout: post
title: Change document view in Angular Document editor component | Syncfusion
description: Learn here all about Change document view in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change document view 
documentation: ug
domainurl: ##DomainURL##
---

# Change document view in Angular Document editor component

## How to change the document view in DocumentEditor component

DocumentEditor allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/layoutType/).

```typescript
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
      template: `<ejs-documenteditor id="container" #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="330px" style="display:block" [isReadOnly]=false [enableSelection]=true
      [enablePrint]=true [enableSfdtExport]=true [enableWordExport]=true [enableOptionsPane]=true [enableContextMenu]=true
      [enableHyperlinkDialog]=true [enableBookmarkDialog]=true [enableTableOfContentsDialog]=true [enableSearch]=true
      [enableParagraphDialog]=true [enableListDialog]=true [enableTablePropertiesDialog]=true [enableBordersAndShadingDialog]=true
      [enablePageSetupDialog]=true [enableStyleDialog]=true [enableFontDialog]=true [enableTableOptionsDialog]=true
      [enableTableDialog]=true [enableImageResizer]=true [enableEditor]=true [enableEditorHistory]=true (created)="onCreate()">
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
    public container: DocumentEditorComponent;
    onCreate(): void {
        this.container.serviceUrl = 'https://services.syncfusion.com/angular/production/api/documenteditor/';
        this.container.layoutType='Continuous';
    }
}
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#layouttype) in DocumentEditor component is [`Pages`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/layoutType/).

## How to change the document view in DocumentEditorContainer component

DocumentEditorContainer component allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/layoutType/).

```typescript
/**
 * Add below codes in app.component.ts file
 */
@Component({
      selector: 'app-root',
      templateUrl: '<ejs-documenteditorcontainer #documenteditor_default [enableToolbar]=true (created)="onCreate()" height="600px" style="display:block;"></ejs-documenteditorcontainer>',
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;

    onCreate(): void {
        this.container.serviceUrl = 'https://services.syncfusion.com/angular/production/api/documenteditor/';
        this.container.layoutType='Continuous';
    }

}
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#layouttype) in DocumentEditorContainer component is [`Pages`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/layoutType/).