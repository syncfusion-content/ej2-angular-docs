---
layout: post
title: Scrolling zooming in Angular Document editor component | Syncfusion
description: Learn here all about Scrolling zooming in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scrolling zooming 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling zooming in Angular Document editor component

The Document Editor renders the document as page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the page by using ‘scrollToPage()’ method of document editor instance. Refer to the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/find-replace-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/find-replace-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/find-replace-cs3" %}

> Calling this method brings the specified page into view but doesn’t move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

In case, if you wish to move the selection to any page in document editor and bring it into view, you can use ‘goToPage()’ method of selection instance. Refer to the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/find-replace-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/find-replace-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/find-replace-cs4" %}

## Zooming

You can scale the contents in document editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use `zoomFactor` property of document editor instance. The value can be specified in a range from 0.1 to 5. Refer to the following code example.

```typescript
this.documentEditor.zoomFactor = 3;
```

## Page Fit Type

Apart from specifying the zoom factor as value, the Document Editor provides option to specify page fit options such as fit to full page or fit to page width. You can set this option using ‘fitPage’ method of document editor instance. Refer to the following code example.

```typescript
this.documentEditor.fitPage('Fit page width');
```

## Zoom option using UI

The following code example shows how to provide zoom options in document editor.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DocumentEditorComponent } from '@syncfusion/ej2-angular-documenteditor';
import {
  ItemModel,
  DropDownButtonModule,
} from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  imports: [
    ButtonModule,
    ToolbarModule,
    DocumentEditorAllModule,
    ComboBoxModule,
    ColorPickerModule,
    DropDownButtonModule,
  ],

  standalone: true,
  selector: 'app-container',
  template: `<div>
  <ejs-documenteditor #document_editor height="330px" style="display:block" (created)="onCreated()" (selectionChange)='onSelectionChange()' (viewChange)='onViewChange($event)' (documentChange)='onDocumentChange()' [isReadOnly]=false [enableEditor]=true ></ejs-documenteditor>
  <button ejs-dropdownbutton class="e-de-statusbar-zoom" [content]="zoomContent"  [items]="zoomItems" (select)="onZoom($event)" iconCss="e-ddb-icons e-profile"></button>
 
  </div>
  <div id="documenteditor_statusbar">
       <label style="margin-top: 6px;margin-right: 2px">Page </label>
       <div class="single-line e-de-pagenumber-text" (keydown)='pageKeydownEvent($event)' (click)='pagerClickEvent()' id="editablePageNumber" style="font-size:12px;font-weight: 700;display: inline-flex;height: 17px;padding: 0px 4px;" contenteditable="false">
           <label id="documenteditor_page_no" style="text-transform:capitalize;white-space:pre;overflow:hidden;user-select:none;cursor:text;height:17px;max-width:150px"></label>
       </div>
       <label id="documenteditor_pagecount_separator" style="margin-left:2px;letter-spacing: 1.05px">of</label>
       <label id="documenteditor_pagecount" style="margin-left:6px;letter-spacing: 1.05px"></label>
 
   </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;
  public zoomContent: string = '100%';
  public zoomItems: ItemModel[] = [
    {
      text: '200%',
    },
    {
      text: '150%',
    },
    {
      text: '125%',
    },
    {
      text: '100%',
    },
    {
      text: '75%',
    },
    {
      text: '50%',
    },
  ];
  public onZoom(args: any) {
    let zoomValue = args.item.text;

    switch (zoomValue) {
      case '50%':
        (this.documentEditor as DocumentEditorComponent).zoomFactor = 0.5;
        break;
      case '75%':
        (this.documentEditor as DocumentEditorComponent).zoomFactor = 0.75;
        break;
      case '100%':
        (this.documentEditor as DocumentEditorComponent).zoomFactor = 1;
        break;
      case '125%':
        (this.documentEditor as DocumentEditorComponent).zoomFactor = 1.25;
        break;
      case '150%':
        (this.documentEditor as DocumentEditorComponent).zoomFactor = 1.5;
        break;
      case '200%':
        (this.documentEditor as DocumentEditorComponent).zoomFactor = 2;
        break;
    }
  }
  public pageCount: number = 1;
  public currentPage: number = 1;
  onCreated(): void {
    if ((this.documentEditor as DocumentEditorComponent).isDocumentLoaded) {
      let sfdt: any = {
        sections: [
          {
            blocks: [
              {
                paragraphFormat: {
                  styleName: 'Normal',
                },
                inlines: [
                  {
                    text: 'First page',
                  },
                ],
              },
            ],
            headersFooters: {},
          },
          {
            blocks: [
              {
                paragraphFormat: {
                  styleName: 'Normal',
                },
                inlines: [
                  {
                    text: 'Second page',
                  },
                ],
              },
            ],
            headersFooters: {},
          },
        ],
        characterFormat: {},
        paragraphFormat: {},
        background: {
          color: '#FFFFFFFF',
        },
        styles: [
          {
            type: 'Paragraph',
            name: 'Normal',
            next: 'Normal',
          },
          {
            type: 'Character',
            name: 'Default Paragraph Font',
          },
        ],
      };
      //Open the document in Document Editor.
      (this.documentEditor as DocumentEditorComponent).open(
        JSON.stringify(sfdt)
      );
    }
  }
  public onViewChange(args: any) {
    //Set current page number in status bar.
    this.currentPage = args.startPage;
  }
  public onSelectionChange() {
    ////Set current page number on selection change.
    this.currentPage = (
      this.documentEditor as DocumentEditorComponent
    ).selection.startPage;
  }
  public onDocumentChange() {
    //Get page count.
    this.pageCount = (this.documentEditor as DocumentEditorComponent).pageCount;
    this.zoomContent =
      Math.round(
        (this.documentEditor as DocumentEditorComponent).zoomFactor * 100
      ) + '%';
  }
  // Handle page keydown event to allow for page navigation
  public pageKeydownEvent(e: any) {
    if (e.which === 13) {
      e.preventDefault();
      let pageNumber = parseInt(
        document.getElementById('editablePageNumber')!.textContent!,
        0
      );
      this.pageCount = (
        this.documentEditor as DocumentEditorComponent
      ).pageCount;
      if (pageNumber > this.pageCount) {
        // this.documentEditor!.pageCount) {
        this.updatePageNumber();
      } else {
        this.documentEditor?.selection.goToPage(pageNumber);
      }
      document.getElementById('editablePageNumber')!.contentEditable = 'false';
      if (document.getElementById('editablePageNumber')!.textContent === '') {
        this.updatePageNumber();
      }
    }
    if (e.which > 64) {
      e.preventDefault();
    }
  }

  // Handle the page number blur event
  public pageBlurEvent() {
    if (
      document.getElementById('editablePageNumber')!.textContent === '' ||
      parseInt(document.getElementById('editablePageNumber')!.textContent!, 0) >
        this.documentEditor!.pageCount
    ) {
      this.updatePageNumber();
    }
    document.getElementById('editablePageNumber')!.contentEditable = 'false';
  }

  // Handle page number click to enable editing
  public pagerClickEvent() {
    document.getElementById('editablePageNumber')!.contentEditable = 'true';
    document.getElementById('editablePageNumber')!.focus();
    window
      .getSelection()
      ?.selectAllChildren(document.getElementById('editablePageNumber')!);
  }
  public updatePageNumber() {
    //Update current page number.
    this.currentPage = (
      this.documentEditor as DocumentEditorComponent
    ).selection.startPage;
  }
}
```