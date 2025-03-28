---
layout: post
title: Customize tool bar in Angular Document editor component | Syncfusion
description: Learn here all about Customize tool bar in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Customize tool bar in Angular Document editor component

## How to customize existing toolbar in DocumentEditorContainer

Document Editor Container allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/toolbarItem/).
* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/toolbar/#enableitems)

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
      [toolbarItems]="items" 
      (toolbarClick)="onToolbarClick($event)" 
      (created)="onCreate()" 
      [enableToolbar]="true">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;

  // Define custom toolbar item
  public toolItem: CustomToolbarItemModel = {
    prefixIcon: 'e-de-ctnr-lock',
    tooltipText: 'Disable Image',
    text: this.onWrapText('Disable Image'),
    id: 'Custom',
  };

  // Define toolbar items array
  public items = [
    this.toolItem,
    'Undo',
    'Redo',
    'Separator',
    'Image',
    'Table',
    'Hyperlink',
    'Bookmark',
    'TableOfContents',
    'Separator',
    'Header',
    'Footer',
    'PageSetup',
    'PageNumber',
    'Break',
    'InsertFootnote',
    'InsertEndnote',
    'Separator',
    'Find',
    'Separator',
    'Comments',
    'TrackChanges',
    'Separator',
    'LocalClipboard',
    'RestrictEditing',
    'Separator',
    'FormFields',
    'UpdateFields',
    'ContentControl',
  ];

  ngOnInit(): void {}

  // Called when the DocumentEditorContainer is created
  onCreate() {
    // Logic to handle the creation of the editor
  }

  // Event handler for toolbar clicks
  onToolbarClick(args: ClickEventArgs): void {
    switch (args.item.id) {
      case 'Custom':
        // Disable the image toolbar item
        if (this.container) {
          this.container.toolbar.enableItems(4, false);
        }
        break;
    }
  }

  // Wrap text with custom HTML
  private onWrapText(text: string): string {
    let content: string = '';
    const index: number = text.lastIndexOf(' ');

    if (index !== -1) {
      content =
        text.slice(0, index) +
        "<div class='e-de-text-wrap'>" +
        text.slice(index + 1) +
        '</div>';
    } else {
      content = text;
    }

    return content;
  }
}
```

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.