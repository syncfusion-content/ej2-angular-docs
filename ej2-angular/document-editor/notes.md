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
import { Component, ViewEncapsulation } from '@angular/core';
import {
    DocumentEditorComponent, PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService,
    SearchService, EditorService, ImageResizerService, EditorHistoryService, ContextMenuService,
    OptionsPaneService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService,
    PageSetupDialogService, StyleDialogService, ListDialogService, ParagraphDialogService, BulletsAndNumberingDialogService,
    FontDialogService, TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService,
    CellOptionsDialogService, StylesDialogService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      template: `<div><button ejs-button (click)="insertFootnote()" >Insert Footnote</button><ejs-documenteditor  id="container" serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" style="display:block;height:400px" [isReadOnly]=false [enableSelection]=true
      [enablePrint]=true [enableSfdtExport]=true [enableWordExport]=true [enableOptionsPane]=true [enableContextMenu]=true
      [enableHyperlinkDialog]=true [enableBookmarkDialog]=true [enableTableOfContentsDialog]=true [enableSearch]=true
      [enableParagraphDialog]=true [enableListDialog]=true [enableTablePropertiesDialog]=true [enableBordersAndShadingDialog]=true
      [enablePageSetupDialog]=true [enableStyleDialog]=true [enableFontDialog]=true [enableTableOptionsDialog]=true
      [enableTableDialog]=true [enableImageResizer]=true [enableEditor]=true [enableEditorHistory]=true>
      </ejs-documenteditor>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService,
        ImageResizerService, EditorHistoryService, ContextMenuService, OptionsPaneService, HyperlinkDialogService, TableDialogService,
        BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, StyleDialogService, ListDialogService,
        ParagraphDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService,
        BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, StylesDialogService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public insertFootnote(): void {
        //Insert foot note.
        this.documentEditor.editor.insertFootnote();
    }
}
```

## Insert endnotes

Document Editor exposes an API to insert endnotes at cursor position programmatically or can be inserted to the end of selected text.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import {
    DocumentEditorComponent, PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService,
    SearchService, EditorService, ImageResizerService, EditorHistoryService, ContextMenuService,
    OptionsPaneService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService,
    PageSetupDialogService, StyleDialogService, ListDialogService, ParagraphDialogService, BulletsAndNumberingDialogService,
    FontDialogService, TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService,
    CellOptionsDialogService, StylesDialogService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div><button ejs-button (click)="insertEndnote()" >Insert Footnote</button><ejs-documenteditor  id="container" serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" style="display:block;height:400px" [isReadOnly]=false [enableSelection]=true
      [enablePrint]=true [enableSfdtExport]=true [enableWordExport]=true [enableOptionsPane]=true [enableContextMenu]=true
      [enableHyperlinkDialog]=true [enableBookmarkDialog]=true [enableTableOfContentsDialog]=true [enableSearch]=true
      [enableParagraphDialog]=true [enableListDialog]=true [enableTablePropertiesDialog]=true [enableBordersAndShadingDialog]=true
      [enablePageSetupDialog]=true [enableStyleDialog]=true [enableFontDialog]=true [enableTableOptionsDialog]=true
      [enableTableDialog]=true [enableImageResizer]=true [enableEditor]=true [enableEditorHistory]=true>
      </ejs-documenteditor>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService,
          ImageResizerService, EditorHistoryService, ContextMenuService, OptionsPaneService, HyperlinkDialogService, TableDialogService,
          BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, StyleDialogService, ListDialogService,
          ParagraphDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService,
          BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, StylesDialogService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public insertEndnote(): void {
        //Insert end note.
        this.documentEditor.editor.insertEndnote();
    }
}
```

## Update or edit footnotes and endnotes

You can update or edit the footnotes and endnotes using the built-in context menu shown up by right-clicking it.
the footnote endnote dialog box popup and you can customize the number format and start at. Refer to the following screenshot.

![Update or edit footnotes and endnotes](images/notes-option.jpg)
