---
layout: post
title: Feature module in Angular Document editor component | Syncfusion
description: Learn here all about Feature module in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Feature module 
documentation: ug
domainurl: ##DomainURL##
---

# Feature module in Angular Document editor component

Document Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the document editor displays the document in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of document editor that can be included as required:
* **PrintService** - Prints the document.
* **SfdtExportService** - Exports the document as Syncfusion<sup style="font-size:70%">&reg;</sup> Document Text (.SFDT) file.
* **SelectionService** - Selects a portion of the document and copy it to the clipboard.
* **SearchService** - Searches specific text and navigate between the results.
* **WordExportService** - Exports the document as Word Document (.DOCX) file.
* **TextExportService** - Exports the document as Text Document (.TXT) file.
* **EditorService** - Performs all kind of editing operations.
* **EditorHistoryService** - Maintains the history of editing operations so that you can perform undo and redo at any time.
* User interface options such as context menu, options pane, image resizer, and dialog are available as individual modules.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a document editor instance.
Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of document editor in your application | Property to enable the functionality for a document editor instance |
|---|---|---|
|PrintService|`PrintService`|`<ejs-documenteditor [enablePrint]=true></ejs-documenteditor>`|
|SfdtExportService|`SfdtExportService`|`<ejs-documenteditor [enableSfdtExport]=true></ejs-documenteditor>`|
|SelectionService|`SelectionService`|`<ejs-documenteditor [enableSelection]=true></ejs-documenteditor>`|
|SearchService|`SelectionService, SearchService`|`<ejs-documenteditor [enableSearch]=true></ejs-documenteditor>`|
|WordExportService|`SfdtExportService, WordExportService`|`<ejs-documenteditor [enableWordExport]=true></ejs-documenteditor>`|
|TextExportService|`SfdtExportService, TextExportService`|`<ejs-documenteditor [enableTextExport]=true></ejs-documenteditor>`|
|EditorService|`SelectionService, EditorService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true></ejs-documenteditor>`|
|EditorHistoryService|`SelectionService, EditorService, EditorHistoryService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableEditorHistory]=true></ejs-documenteditor>`|
|OptionsPaneService(Find)|`SelectionService, SearchService, OptionsPaneService`|`<ejs-documenteditor [enableSearch]=true [enableOptionsPane]=true></ejs-documenteditor>`|
|OptionsPaneService(Find and Replace)|`SelectionService, SearchService, EditorService, OptionsPaneService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableSearch]=true [enableOptionsPane]=true></ejs-documenteditor>`|
|ContextMenuService|`SelectionService, ContextMenuService`|`<ejs-documenteditor [enableSelection]=true [enableContextMenu]=true></ejs-documenteditor>`|
|ImageResizerService|`SelectionService, EditorService, ImageResizerService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableImageResizer]=true></ejs-documenteditor>`|
|HyperlinkDialogService|`SelectionService, EditorService, HyperlinkDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableHyperlinkDialog]=true></ejs-documenteditor>`|
|TableDialogService|`SelectionService, EditorService, TableDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableTableDialog]=true></ejs-documenteditor>`|
|FontDialogService|`SelectionService, EditorService, FontDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableFontDialog]=true></ejs-documenteditor>`|
|ParagraphDialogService|`SelectionService, EditorService, ParagraphDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableParagraphDialog]=true></ejs-documenteditor>`|
|BookmarkDialogService|`SelectionService, EditorService, BookmarkDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true enabl[eBookmarkDialog=true></ejs-documenteditor>`|
|PageSetupDialogService|`SelectionService, EditorService, PageSetupDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enablePageSetupDialog]=true></ejs-documenteditor>`|
|TableOfContentsDialogService|`SelectionService, EditorService, TableOfContentsDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableTableOfContentsDialog]=true></ejs-documenteditor>`|
|ListDialog|`SelectionService, EditorService, ListDialog`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableListDialog]=true></ejs-documenteditor>`|
|TablePropertiesDialog|`SelectionService, EditorService, TablePropertiesDialog`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableTablePropertiesDialog]=true></ejs-documenteditor>`|
|CellOptionsDialogService|`SelectionService, EditorService, CellOptionsDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableTablePropertiesDialog]=true></ejs-documenteditor>`|
|BordersAndShadingDialogService|`SelectionService, EditorService, BordersAndShadingDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableBordersAndShadingDialog]=true></ejs-documenteditor>`|
|TableOptionsDialogService|`SelectionService, EditorService, TableOptionsDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableTableOptionsDialog]=true></ejs-documenteditor>`|
|StylesDialogService|`SelectionService, EditorService, StylesDialogService,StyleDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableStyleDialog]=true ,[enableStylesDialog]=true></ejs-documenteditor>`|
|StyleDialogService|`SelectionService, EditorService, StyleDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableStyleDialog]=true></ejs-documenteditor>`|
|BulletsAndNumberingDialogService|`SelectionService, EditorService, BulletsAndNumberingDialogService`|`<ejs-documenteditor [isReadOnly]: false [enableEditor]=true [enableStyleDialog]=true></ejs-documenteditor>`|

These modules should be injected into the `providers` section of root `NgModule` or component class.