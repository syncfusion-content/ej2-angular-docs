---
layout: post
title: Add save button in Angular Document editor component | Syncfusion
description: Learn here to add save button in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add save button tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Add save button in Angular Document editor toolbar

## To add a save button to the existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/).

```typescript
import { Component, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations'
import { DocumentEditorContainerComponent, ToolbarService, CustomToolbarItemModel } from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-root',
      template: '<ejs-documenteditorcontainer [height]="600px" [toolbarItems]=items (toolbarClick)="onToolbarClick($event)" #documenteditor_default style="display:block;" [enableToolbar]=true></ejs-documenteditorcontainer>',
      styleUrls: ['./app.component.css'],
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('documenteditor_default', { static: true })
    container: DocumentEditorContainerComponent;
    //Custom toolbat item.
    public toolItem: CustomToolbarItemModel = {
        prefixIcon: "e-save icon",
        tooltipText: "Save the Document",
        text: "Save",
        id: "save"
    };
    public items = ['New' ,'Open', this.toolItem, 'Separator' ,'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl'];
    public onToolbarClick(args: ClickEventArgs): void {
        switch (args.item.id) {
            case 'save':
                //Disable image toolbar item.
                this.container.documentEditor.save('sample', 'Docx');
                break;
        }
    };
}
```

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.