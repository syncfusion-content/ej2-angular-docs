---
layout: post
title: Toolbar in Angular Pdfviewer component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Built-in toolbar in Angular PDF Viewer component

The PDF Viewer comes with a powerful built-in toolbar to execute important actions such as page navigation, text search,view mode,download,print,bookmark, and thumbnails.

The following table shows built-in toolbar items and its actions:-

| Option | Description |
|---|---|
| OpenOption | This option provides an action to load the PDF documents to the PDF Viewer.|
| PageNavigationTool |This option provides an action to navigate the pages in the PDF Viewer. It contains GoToFirstPage,GoToLastPage,GotoPage,GoToNext, and GoToLast tools.|
| MagnificationTool |This option provides an action to magnify the pages either with predefined or user defined zoom factors in the PDF Viewer. Contains ZoomIn, ZoomOut, Zoom, FitPage and FitWidth tools|
| PanTool |This option provides an action for panning the pages in the PDF Viewer.|
| SelectionTool |This option provides an action to enable/disable the text selection in the PDF Viewer.|
| SearchOption |This option provides an action to search a word in the PDF documents.|
| PrintOption |This option provides an action to print the PDF document being loaded in the PDF Viewer.|
| DownloadOption |This Download option provides an action to download the PDF document that has been loaded in the PDF Viewer.|
| UndoRedoTool | This tool provides options to undo and redo the annotation actions performed in the PDF Viewer.|
| AnnotationEditTool | This tool provides options to enable or disable the edit mode of annotation in the PDF Viewer.|
| CommentTool | This tool facilitates the addition of sticky notes to the pages of PDF documents in the PDF Viewer.|

## Show/Hide the built-in toolbar

The PDF Viewer has an option to show or hide the complete built-in toolbar. You can achieve this by using following two ways.

* **Show/Hide toolbar using enableToolbar API as in the following code snippet**

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
        ThumbnailViewService, ToolbarService,  NavigationService,
        TextSearchService, AnnotationService, TextSelectionService,
        PrintService
      } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [documentPath]='document'
                            [toolbarSettings]='toolbarSettings'
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
              ThumbnailViewService, ToolbarService, NavigationService,
              AnnotationService, TextSearchService, TextSelectionService,
              PrintService]
  })
  export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
        ThumbnailViewService, ToolbarService,  NavigationService,
        TextSearchService, AnnotationService, TextSelectionService,
        PrintService
      } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                            [serviceUrl]='service'
                            [documentPath]='document'
                            [toolbarSettings]='toolbarSettings'
                            style="height:640px;display:block">
                  </ejs-pdfviewer>
              </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
              ThumbnailViewService, ToolbarService, NavigationService,
              AnnotationService, TextSearchService, TextSelectionService,
              PrintService]
  })
  export class AppComponent implements OnInit {
    public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

{% endhighlight %}
{% endtabs %}

* **Show/Hide toolbar using showToolbar as in the following code snippet**

  ```html
  <script>
      window.onload = function () {
          var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
          pdfViewer.toolbar.showToolbar(false);
      }
  </script>
  ```

## Show/Hide the built-in toolbaritem

The PDF Viewer has an option to show or hide these grouped items in the built-in toolbar.

* **Show/Hide toolbaritem using toolbarSettings as in the following code snippet.**

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
        ThumbnailViewService, ToolbarService,NavigationService,
        TextSearchService, AnnotationService, TextSelectionService, 
        PrintService
      } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template:`<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                              [documentPath]='document'
                              [toolbarSettings]='toolbarSettings'
                              style="height:640px;display:block">
                </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
              ThumbnailViewService, ToolbarService, NavigationService,
              TextSearchService, AnnotationService, TextSelectionService,
              PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public toolbarSettings = { showTooltip: true, toolbarItems: 'DownloadOption' }
  }

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
        ThumbnailViewService, ToolbarService,NavigationService,
        TextSearchService, AnnotationService, TextSelectionService, 
        PrintService
      } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template:`<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                              [serviceUrl]='service'
                              [documentPath]='document'
                              [toolbarSettings]='toolbarSettings'
                              style="height:640px;display:block">
                </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
              ThumbnailViewService, ToolbarService, NavigationService,
              TextSearchService, AnnotationService, TextSelectionService,
              PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public toolbarSettings = { showTooltip: true, toolbarItems: 'DownloadOption' }
  }

{% endhighlight %}
{% endtabs %}

* **Show/Hide toolbaritem using showToolbaritem as in the following code snippet**

  ```html
  <script>
      window.onload = function () {
          var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
          pdfViewer.toolbar.showToolbarItem(new Array("DownloadOption"), true);
      }
  </script>
  ```

## Show/Hide the left toolbar with the thumbnails and bookmarks

The PDF Viewer has an option to show or hide the left toolbar with the thumbnails and bookmarks using enableNavigationToolbar API as in the following code sample.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                          [enableNavigationToolbar]="false"
                          [toolbarSettings]="toolbarSettings"
                          [documentPath]='document'
                          style="height:640px;display:block">
                  </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService,  BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public toolbarSettings = { showTooltip: true, toolbarItems: ['OpenOption'] };
  }

{% endhighlight %}

{% highlight ts tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                          [serviceUrl]='service'
                          [enableNavigationToolbar]="false"
                          [toolbarSettings]="toolbarSettings"
                          [documentPath]='document'
                          style="height:640px;display:block">
                  </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService,  BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
      public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
      public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
      public toolbarSettings = { showTooltip: true, toolbarItems: ['OpenOption'] };
  }

{% endhighlight %}
{% endtabs %}

## Customize Built-In Toolbar

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [**CustomToolbarItemModel**](https://helpej2.syncfusion.com/angular/documentation/api/pdfviewer/customToolbarItemModel/) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable - Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight html tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  AnnotationService, TextSearchService, TextSelectionService,
  PrintService, FormDesignerService, FormFieldsService, CustomToolbarItemModel
} from '@syncfusion/ej2-angular-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                      [documentPath]="document"
                      [resourceUrl]="resource"
                      [toolbarSettings]="toolbarSettings"
                      (toolbarClick)="toolbarClick($event)"
                      style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    AnnotationService, TextSearchService, TextSelectionService,
    PrintService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource = 'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib';
 
  public toolItem1: CustomToolbarItemModel = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
  };
  public toolItem2: CustomToolbarItemModel = {
      id: 'download',
      text: 'Save',
      tooltipText: 'Custom toolbar item',
      align: 'right'
  };
  LanguageList: string[] = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
  public toolItem3: CustomToolbarItemModel = {
      type: 'Input',
      tooltipText: 'Language List',
      cssClass: 'percentage',
      align: 'Left',
      id: 'dropdown',
      template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: this.LanguageList, popupWidth: 85, showClearButton: false, readonly: false })  
  };
  public toolItem4: CustomToolbarItemModel = {
      type: 'Input',
      tooltipText: 'Text',
      align: 'Right',
      cssClass: 'find',
      id: 'textbox',
      template: new TextBox({ width: 125, placeholder: 'Type Here', created: this.OnCreateSearch})
  }
  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [this.toolItem1, this.toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', this.toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', this.toolItem4, 'CommentTool', 'SubmitForm']
  };
 
  public toolbarClick(args: ClickEventArgs): void {
      var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (args.item && args.item.id === 'print') {
            pdfViewer.printModule.print();
      } else if (args.item && args.item.id === 'download') {
            pdfViewer.download();
      }
    }
  public OnCreateSearch(this: any): any {
      this.addIcon('prepend', 'e-icons e-search');
  }
  ngOnInit(): void {
  }
}

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  AnnotationService, TextSearchService, TextSelectionService,
  PrintService, FormDesignerService, FormFieldsService, CustomToolbarItemModel
} from '@syncfusion/ej2-angular-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                      [documentPath]="document"
                      [serviceUrl]="service"
                      [toolbarSettings]="toolbarSettings"
                      (toolbarClick)="toolbarClick($event)"
                      style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    AnnotationService, TextSearchService, TextSelectionService,
    PrintService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
 
  public toolItem1: CustomToolbarItemModel = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
  };
  public toolItem2: CustomToolbarItemModel = {
      id: 'download',
      text: 'Save',
      tooltipText: 'Custom toolbar item',
      align: 'right'
  };
  LanguageList: string[] = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
  public toolItem3: CustomToolbarItemModel = {
      type: 'Input',
      tooltipText: 'Language List',
      cssClass: 'percentage',
      align: 'Left',
      id: 'dropdown',
      template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: this.LanguageList, popupWidth: 85, showClearButton: false, readonly: false })  
  };
  public toolItem4: CustomToolbarItemModel = {
      type: 'Input',
      tooltipText: 'Text',
      align: 'Right',
      cssClass: 'find',
      id: 'textbox',
      template: new TextBox({ width: 125, placeholder: 'Type Here', created: this.OnCreateSearch})
  }
  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [this.toolItem1, this.toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', this.toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', this.toolItem4, 'CommentTool', 'SubmitForm']
  };
 
  public toolbarClick(args: ClickEventArgs): void {
      var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (args.item && args.item.id === 'print') {
            pdfViewer.printModule.print();
      } else if (args.item && args.item.id === 'download') {
            pdfViewer.download();
      }
    }
  public OnCreateSearch(this: any): any {
      this.addIcon('prepend', 'e-icons e-search');
  }
  ngOnInit(): void {
  }
}
{% endhighlight %}
{% endtabs %}

N> Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] 

### Align Property

The align property is used to specify the alignment of a toolbar item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a toolbar item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a toolbar item. It allows custom styling of the toolbar item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item. 
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel` in the context of Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. When configuring the toolbar using the `ToolbarSettings` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing toolbar items, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)

## Custom Toolbar

The PDF Viewer provides API for user interactions options provided in its built-in toolbar. Using this, you can create your own User Interface for toolbar actions at the application level by hiding the built-in toolbar. The following steps are used to create the custom toolbar for PDF Viewer:

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Hide the built-in toolbar of PDF Viewer using the following code snippet.,

{% tabs %}
{% highlight js tabtitle="Standalone" %}

<ejs-pdfviewer #pdfviewer id='pdfViewer'
               [documentPath]='document'
               [enableToolbar]=false
               [enableNavigationToolbar]=false
               (pageChange)='pageChanged($event)'
               (documentLoad)='documentLoaded($event)'
               style="height:640px; display: block">
</ejs-pdfviewer>

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

<ejs-pdfviewer #pdfviewer id='pdfViewer'
               [serviceUrl]='service'
               [documentPath]='document'
               [enableToolbar]=false
               [enableNavigationToolbar]=false
               (pageChange)='pageChanged($event)'
               (documentLoad)='documentLoaded($event)'
               style="height:640px; display: block">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

**Step 3:** Add EJ2 toolbar for performing primary actions like Open, Previous page, Next page, Go to page, Print and Download using the following code snippet.

```html
<ejs-toolbar id='topToolbar' #customToolbar>
    <e-items>
        <e-item prefixIcon='e-pv-open-document-icon' id='openDocument' tooltipText='Open' (click)='openDocument($event)'>
        </e-item>
        <e-item prefixIcon='e-pv-previous-page-navigation-icon' id='previousPage' tooltipText='Previous Page' (click)='previousClicked($event)'
                align='Center'></e-item>
        <e-item prefixIcon='e-pv-next-page-navigation-icon' id='nextPage' tooltipText='Next Page' (click)='nextClicked($event)' align='Center'></e-item>
        <e-item align='Center'>
            <ng-template #template>
                <div class=''>
                    <input type='text' class='e-input-group e-pv-current-page-number' id='currentPage' value="0"
                           (keypress)='onCurrentPageBoxKeypress($event)' (click)='onCurrentPageBoxClicked($event)' />
                </div>
                <div style='margin-left: 6px'><span class='e-pv-total-page-number' id='totalPage'>of 0</span></div>
            </ng-template>
        </e-item>
        <e-item prefixIcon='e-pv-print-document-icon' tooltipText='Print' (click)='printClicked($event)' align='Right'></e-item>
        <e-item prefixIcon='e-pv-download-document-icon' tooltipText='Download' (click)='downloadClicked($event)' align='Right'></e-item>
    </e-items>
</ejs-toolbar>
<input type="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;">
```

**Step 3:** Add EJ2 toolbar for performing magnification actions in PDF Viewer using the following code snippet.

```html
<ejs-toolbar id='magnificationToolbar' #zoomToolbar>
    <e-items>
        <e-item prefixIcon='e-pv-fit-page-icon' id='fitPage' tooltipText='Fit to page' (click)='pageFitClicked($event)'></e-item>
        <e-item prefixIcon='e-pv-zoom-in-icon' id='zoomIn' tooltipText='Zoom in' (click)='zoomInClicked($event)'></e-item>
        <e-item prefixIcon='e-pv-zoom-out-sample' id='zoomOut' tooltipText='Zoom out' (click)='zoomOutClicked($event)'></e-item>
    </e-items>
</ejs-toolbar>
```

**Step 4:** Add the following style to achieve the custom toolbar styling.

```css
#magnificationToolbar {
    background: transparent;
    height: auto;
    min-height: 56px;
    width: 200px;
    border: none;
    position: absolute;
    z-index: 1001;
    bottom: 58px;
    right: 16px;
    transform: rotate(90deg);
}

#magnificationToolbar.e-toolbar .e-toolbar-items {
    background: transparent;
}

#magnificationToolbar.e-toolbar .e-tbar-btn {
    border-radius: 50%;
    min-height: 30px;
    min-width: 30px;
    border: 1px solid #c8c8c8;
}

#topToolbar {
    top: 0px;
    z-index: 1001;
}

.e-tbar-section .e-sample-resize-container {
    height: 46px;
}

.e-bookmark-popup {
    height: 200px;
    max-width: 250px;
}

.e-text-search-popup {
    height: 104px;
    max-width: 348px;
}

.e-custom-search-input {
    width: 234px;
}

.e-text-search-popup .e-footer-content, .e-bookmark-popup .e-footer-content {
    padding: 0;
    height: 0;
}

.search-button, .search-button:disabled, .search-button:focus, .search-button:hover  {
    background: transparent;
    box-shadow: none;
}

#popup .e-dlg-content {
    padding-left: 0;
    padding-bottom: 0;
}

.e-pv-bookmarks {
    min-width: 234px;
}

.e-pv-current-page-number {
    width: 46px;
    height: 28px;
    text-align: center;
}

.material .e-pv-current-page-number {
    border-width: 1px;
}

.e-icons {
    font-family: "e-icons";
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-transform: none;
}

.e-pv-icon::before {
    font-family: 'e-icons';
}

.e-pv-icon-search::before {
    font-family: 'e-icons';
    font-size: 12px;
}

.e-pv-download-document-icon::before {
    content: '\e914';
}

.e-pv-print-document-icon::before {
    content: '\e917';
}

.e-pv-previous-page-navigation-icon::before {
    content: '\e910';
}

.e-pv-next-page-navigation-icon::before {
    content: '\e911';
}

.e-pv-zoom-out-sample::before {
    content: '\e912';
}

.e-pv-zoom-out-sample {
    transform: rotate(90deg);
    padding-right: 2px;
}

.e-pv-zoom-in-icon::before {
    content: '\e91d';
}

.e-pv-fit-page-icon::before {
    content: '\e91b';
}

.e-pv-open-document-icon::before {
    content: '\e91c';
}

@font-face {
    font-family: "e-icons";
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
}
```

>The icons are embedded in the font file used in the previous code snippet.

**Step 5:** Add the following code snippet in `app.component.ts` file for performing a user interaction in PDF Viewer in code behind.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

@ViewChild('pdfviewer')
public pdfviewerControl: PdfViewerComponent;
@ViewChild('customToolbar')
public customToolbar: ToolbarComponent;
@ViewChild('zoomToolbar')
public zoomToolbar: ToolbarComponent;
public document: string = 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf';
constructor() { }
ngOnInit(): void {
  // ngOnInit function
  document
    .getElementById('fileUpload')
    .addEventListener('change', this.readFile.bind(this));
}

public openDocument(e: ClickEventArgs): void {
  document.getElementById('fileUpload').click();
}

public previousClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.navigation.goToPreviousPage();
}

public nextClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.navigation.goToNextPage();
}

public printClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.print.print();
}

public downloadClicked(e: ClickEventArgs): void {
  let fileName: string = (document.getElementById(
    'fileUpload'
  ) as HTMLInputElement).value
    .split('\\')
    .pop();
  if(fileName !== '') {
  this.pdfviewerControl.fileName = fileName;
}
this.pdfviewerControl.download();
}

public pageFitClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.magnification.fitToPage();
  this.updateZoomButtons();
  this.customToolbar.enableItems(document.getElementById('fitPage'), false);
}

public zoomInClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.magnification.zoomIn();
  this.updateZoomButtons();
}

public zoomOutClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.magnification.zoomOut();
  this.updateZoomButtons();
}

public pageChanged(e: PageChangeEventArgs): void {
  (document.getElementById(
  'currentPage'
) as HTMLInputElement).value = this.pdfviewerControl.currentPageNumber.toString();
this.updatePageNavigation();
}

public documentLoaded(e: LoadEventArgs): void {
  document.getElementById('totalPage').textContent =
    'of ' + this.pdfviewerControl.pageCount;
  (document.getElementById(
      'currentPage'
    ) as HTMLInputElement).value = this.pdfviewerControl.currentPageNumber.toString();
this.updatePageNavigation();
}

public onCurrentPageBoxClicked(e: ClickEventArgs): void {
  (document.getElementById('currentPage') as HTMLInputElement).select();
}

public onCurrentPageBoxKeypress(e: KeyboardEvent): boolean {
  if ((e.which < 48 || e.which > 57) && e.which !== 8 && e.which !== 13) {
    e.preventDefault();
    return false;
  } else {
    // tslint:disable-next-line:radix
    const currentPageNumber: number = parseInt(
      (document.getElementById('currentPage') as HTMLInputElement).value
    );
    if (e.which === 13) {
      if (
        currentPageNumber > 0 &&
        currentPageNumber <= this.pdfviewerControl.pageCount
      ) {
        this.pdfviewerControl.navigation.goToPage(currentPageNumber);
      } else {
        // tslint:disable-next-line:max-line-length
        (document.getElementById(
          'currentPage'
        ) as HTMLInputElement).value = this.pdfviewerControl.currentPageNumber.toString();
      }
    }
    return true;
  }
}

private updatePageNavigation(): void {
  if(this.pdfviewerControl.currentPageNumber === 1) {
  this.customToolbar.enableItems(
    document.getElementById('previousPage'),
    false
  );
  this.customToolbar.enableItems(document.getElementById('nextPage'), true);
} else if (
  this.pdfviewerControl.currentPageNumber ===
  this.pdfviewerControl.pageCount
) {
  this.customToolbar.enableItems(
    document.getElementById('previousPage'),
    true
  );
  this.customToolbar.enableItems(
    document.getElementById('nextPage'),
    false
  );
} else {
  this.customToolbar.enableItems(
    document.getElementById('previousPage'),
    true
  );
  this.customToolbar.enableItems(document.getElementById('nextPage'), true);
}
}

private updateZoomButtons(): void {
  if(this.pdfviewerControl.zoomPercentage <= 50) {
  this.zoomToolbar.enableItems(document.getElementById('zoomIn'), true);
  this.zoomToolbar.enableItems(document.getElementById('zoomOut'), false);
  this.zoomToolbar.enableItems(document.getElementById('fitPage'), true);
} else if (this.pdfviewerControl.zoomPercentage >= 400) {
  this.zoomToolbar.enableItems(document.getElementById('zoomIn'), false);
  this.zoomToolbar.enableItems(document.getElementById('zoomOut'), true);
  this.zoomToolbar.enableItems(document.getElementById('fitPage'), true);
} else {
  this.zoomToolbar.enableItems(document.getElementById('zoomIn'), true);
  this.zoomToolbar.enableItems(document.getElementById('zoomOut'), true);
  this.zoomToolbar.enableItems(document.getElementById('fitPage'), true);
}
}

// tslint:disable-next-line
private readFile(args: any): void {
  // tslint:disable-next-line
  let upoadedFiles: any = args.target.files;
  if(args.target.files[0] !== null) {
  let uploadedFile: File = upoadedFiles[0];
  if (uploadedFile) {
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    // tslint:disable-next-line
    let proxy: any = this;
    // tslint:disable-next-line
    reader.onload = (e: any): void => {
      let uploadedFileUrl: string = e.currentTarget.result;
      proxy.pdfviewerControl.load(uploadedFileUrl, null);
    };
  }
}
}

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

@ViewChild('pdfviewer')
public pdfviewerControl: PdfViewerComponent;
@ViewChild('customToolbar')
public customToolbar: ToolbarComponent;
@ViewChild('zoomToolbar')
public zoomToolbar: ToolbarComponent;
public service: string =
  'https://services.syncfusion.com/angular/production/api/pdfviewer';
public document: string = 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf';
constructor() { }
ngOnInit(): void {
  // ngOnInit function
  document
    .getElementById('fileUpload')
    .addEventListener('change', this.readFile.bind(this));
}

public openDocument(e: ClickEventArgs): void {
  document.getElementById('fileUpload').click();
}

public previousClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.navigation.goToPreviousPage();
}

public nextClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.navigation.goToNextPage();
}

public printClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.print.print();
}

public downloadClicked(e: ClickEventArgs): void {
  let fileName: string = (document.getElementById(
    'fileUpload'
  ) as HTMLInputElement).value
    .split('\\')
    .pop();
  if(fileName !== '') {
  this.pdfviewerControl.fileName = fileName;
}
this.pdfviewerControl.download();
}

public pageFitClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.magnification.fitToPage();
  this.updateZoomButtons();
  this.customToolbar.enableItems(document.getElementById('fitPage'), false);
}

public zoomInClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.magnification.zoomIn();
  this.updateZoomButtons();
}

public zoomOutClicked(e: ClickEventArgs): void {
  this.pdfviewerControl.magnification.zoomOut();
  this.updateZoomButtons();
}

public pageChanged(e: PageChangeEventArgs): void {
  (document.getElementById(
  'currentPage'
) as HTMLInputElement).value = this.pdfviewerControl.currentPageNumber.toString();
this.updatePageNavigation();
}

public documentLoaded(e: LoadEventArgs): void {
  document.getElementById('totalPage').textContent =
    'of ' + this.pdfviewerControl.pageCount;
  (document.getElementById(
      'currentPage'
    ) as HTMLInputElement).value = this.pdfviewerControl.currentPageNumber.toString();
this.updatePageNavigation();
}

public onCurrentPageBoxClicked(e: ClickEventArgs): void {
  (document.getElementById('currentPage') as HTMLInputElement).select();
}

public onCurrentPageBoxKeypress(e: KeyboardEvent): boolean {
  if ((e.which < 48 || e.which > 57) && e.which !== 8 && e.which !== 13) {
    e.preventDefault();
    return false;
  } else {
    // tslint:disable-next-line:radix
    const currentPageNumber: number = parseInt(
      (document.getElementById('currentPage') as HTMLInputElement).value
    );
    if (e.which === 13) {
      if (
        currentPageNumber > 0 &&
        currentPageNumber <= this.pdfviewerControl.pageCount
      ) {
        this.pdfviewerControl.navigation.goToPage(currentPageNumber);
      } else {
        // tslint:disable-next-line:max-line-length
        (document.getElementById(
          'currentPage'
        ) as HTMLInputElement).value = this.pdfviewerControl.currentPageNumber.toString();
      }
    }
    return true;
  }
}

private updatePageNavigation(): void {
  if(this.pdfviewerControl.currentPageNumber === 1) {
  this.customToolbar.enableItems(
    document.getElementById('previousPage'),
    false
  );
  this.customToolbar.enableItems(document.getElementById('nextPage'), true);
} else if (
  this.pdfviewerControl.currentPageNumber ===
  this.pdfviewerControl.pageCount
) {
  this.customToolbar.enableItems(
    document.getElementById('previousPage'),
    true
  );
  this.customToolbar.enableItems(
    document.getElementById('nextPage'),
    false
  );
} else {
  this.customToolbar.enableItems(
    document.getElementById('previousPage'),
    true
  );
  this.customToolbar.enableItems(document.getElementById('nextPage'), true);
}
}

private updateZoomButtons(): void {
  if(this.pdfviewerControl.zoomPercentage <= 50) {
  this.zoomToolbar.enableItems(document.getElementById('zoomIn'), true);
  this.zoomToolbar.enableItems(document.getElementById('zoomOut'), false);
  this.zoomToolbar.enableItems(document.getElementById('fitPage'), true);
} else if (this.pdfviewerControl.zoomPercentage >= 400) {
  this.zoomToolbar.enableItems(document.getElementById('zoomIn'), false);
  this.zoomToolbar.enableItems(document.getElementById('zoomOut'), true);
  this.zoomToolbar.enableItems(document.getElementById('fitPage'), true);
} else {
  this.zoomToolbar.enableItems(document.getElementById('zoomIn'), true);
  this.zoomToolbar.enableItems(document.getElementById('zoomOut'), true);
  this.zoomToolbar.enableItems(document.getElementById('fitPage'), true);
}
}

// tslint:disable-next-line
private readFile(args: any): void {
  // tslint:disable-next-line
  let upoadedFiles: any = args.target.files;
  if(args.target.files[0] !== null) {
  let uploadedFile: File = upoadedFiles[0];
  if (uploadedFile) {
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    // tslint:disable-next-line
    let proxy: any = this;
    // tslint:disable-next-line
    reader.onload = (e: any): void => {
      let uploadedFileUrl: string = e.currentTarget.result;
      proxy.pdfviewerControl.load(uploadedFileUrl, null);
    };
  }
}
}

{% endhighlight %}
{% endtabs %}

Find the sample of [Toolbar Customization](https://stackblitz.com/edit/angular-g94gvs?file=app.component.html)

## See also

* [Toolbar customization](./how-to/toolbar_customization)
* [Feature Modules](./feature-module)