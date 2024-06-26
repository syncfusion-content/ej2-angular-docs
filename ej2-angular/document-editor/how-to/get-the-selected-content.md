---
layout: post
title: Get the selected content in Angular Document editor | Syncfusion
description: Learn here all about Get the selected content in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get the selected content 
documentation: ug
domainurl: ##DomainURL##
---

# Get the selected content in Angular Document editor component

You can get the selected content from the Angular Document Editor component as plain text and SFDT (rich text).

## Get the selected content as plain text

You can use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the selected content as plain text from Angular Document Editor component.

The following example code illustrates how to add search in google option in context menu for the selected text.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    ngOnInit(): void {
    }
    onCreate():void {
         // creating Custom Options
         let menuItems: MenuItemModel[] = [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-de-ctnr-find'
            }];
        // adding Custom Options
        this.container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
        // custom Options Select Event
        this.container.documentEditor.customContextMenuSelect = (args: any): void => {
            // custom Options Functionality
            let id: string = this.container.documentEditor.element.id;
            switch (args.id) {
                case id + 'search_in_google':
                    // To get the selected content as plain text
            let searchContent: string =this.container.documentEditor.selection.text;
            if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                window.open('http://google.com/search?q=' + searchContent);
            }
            break;
            }
        };
    }
}
```

You can add the following custom options using this API,

* Save or export the selected text as text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in context menu and replace with selected synonym using the setter method of same API.

## Get the selected content as SFDT (rich text)

You can use [`sfdt`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text from Angular Document Editor component.

The following example code illustrates how to get the content of a bookmark and export it as SFDT.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DocumentEditorContainerComponent,
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    ngOnInit(): void {}
    onCreate(): void {
      // To insert text in cursor position
      this.container.documentEditor.editor.insertText('Document editor');
      // To select all the content in document
      this.container.documentEditor.selection.selectAll();
      // Insert bookmark to selected content
      this.container.documentEditor.editor.insertBookmark('Bookmark1');
      //Select the bookmark
      this.container.documentEditor.selection.selectBookmark('Bookmark1');
      // To get the selected content as sfdt
      let selectedContent: string = this.container.documentEditor.selection.sfdt;
      // Insert the sfdt content in cursor position using paste API
      this.container.documentEditor.editor.paste(selectedContent);
    }
}
```

You can add the following custom options using this API,

* Save or export the selected content as SFDT file.
* Get the content of a bookmark in Word document as SFDT by selecting a bookmark using [`selectbookmark`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#selectbookmark) API.
* Create template content that can be inserted to multiple documents in cursor position using [`paste`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#paste) API.