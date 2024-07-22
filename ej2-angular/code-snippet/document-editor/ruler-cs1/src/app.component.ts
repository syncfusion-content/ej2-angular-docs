

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, FontDialogService,  PrintService, WordExportService, TextExportService, SearchService, EditorService, ImageResizerService, EditorHistoryService, ContextMenuService,
    OptionsPaneService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService,
    PageSetupDialogService, StyleDialogService, ListDialogService, ParagraphDialogService, BulletsAndNumberingDialogService,
    TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService,
    CellOptionsDialogService, StylesDialogService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div>
      <button ejs-button (click)="btnClick()" >Show/Hide Ruler</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [isReadOnly]=false [enableSelection]=true
      [enablePrint]=true [enableSfdtExport]=true [enableWordExport]=true [enableOptionsPane]=true [enableContextMenu]=true
      [enableHyperlinkDialog]=true [enableBookmarkDialog]=true [enableTableOfContentsDialog]=true [enableSearch]=true
      [enableParagraphDialog]=true [enableListDialog]=true [enableTablePropertiesDialog]=true [enableBordersAndShadingDialog]=true
      [enablePageSetupDialog]=true [enableStyleDialog]=true [enableFontDialog]=true [enableTableOptionsDialog]=true
      [enableTableDialog]=true [enableImageResizer]=true [enableEditor]=true [enableEditorHistory]=true>
      </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService,
        ImageResizerService, EditorHistoryService, ContextMenuService, OptionsPaneService, HyperlinkDialogService, TableDialogService,
        BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, StyleDialogService, ListDialogService,
        ParagraphDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService,
        BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, StylesDialogService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public btnClick(): void {
        (this.documentEditor as DocumentEditorComponent).documentEditorSettings.showRuler = !(this.documentEditor as DocumentEditorComponent).documentEditorSettings.showRuler
    }
}


