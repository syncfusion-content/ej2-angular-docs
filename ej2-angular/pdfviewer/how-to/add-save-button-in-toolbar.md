---
layout: post
title: Add Save Button in Built-In Toolbar | Syncfusion
description: Learn here all about addins save button in built in Toolbar in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Add a Save button in the built-in toolbar

PDF Viewer allows you to customize (add, show, hide, enable, and disable) existing items in the built-in toolbar.

* Save Button - `Save` button item can be defined by [CustomToolbarItemModel](https://helpej2.syncfusion.com/angular/documentation/api/pdfviewer/customToolbarItemModel/) and with existing items in [ToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) property. `Save` button item-click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - `Save` button item can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable - `Save` button can be enabled or disabled using [`enabletoolbaritem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight html tabtitle="Standalone" %}

import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  AnnotationService, TextSearchService, TextSelectionService,
  PrintService, FormDesignerService, FormFieldsService, CustomToolbarItemModel
} from '@syncfusion/ej2-angular-pdfviewer';

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
      prefixIcon: 'e-icons e-save',
      id: 'download',
      text: 'save',
      tooltipText: 'Save Button',
      align:'Left'
  };
  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [this.toolItem1, this.toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', this.toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', this.toolItem4, 'CommentTool', 'SubmitForm']
  };
 
  public toolbarClick(args: any): void {
      var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      } if (args.item && args.item.id === 'download') {
            pdfViewer.download();
      }
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
      prefixIcon: 'e-icons e-save',
      id: 'download',
      text: 'save',
      tooltipText: 'Save Button',
      align:'Left'
  };
  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [this.toolItem1, this.toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', this.toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', this.toolItem4, 'CommentTool', 'SubmitForm']
  };
 
  public toolbarClick(args: any): void {
      var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (args.item && args.item.id === 'download') {
        pdfViewer.download();
      }
    }
  ngOnInit(): void {
  }
}
{% endhighlight %}
{% endtabs %}

N> Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] 

### Align property

The align property is used to specify the alignment of a save button item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip property

The tooltip property is used to set the tooltip text for a toolbar item. Tooltip provides additional information when a user hovers over the item.

### CssClass property

The cssClass property is used to apply custom CSS classes to a toolbar item. It allows custom styling of the toolbar item.

### Prefix property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing Save Button items, it is mandatory to assign a specific and descriptive id to the item. 
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel`` in the context of Syncfusion PDF Viewer. When configuring the toolbar using the `ToolbarSettings`` property, you can include these properties to customize the appearance and behavior of Save Button item.

N> When customizing `Save` button item, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Add%20Save%20Button%20in%20built%20in%20toolbar/Save%20Button)
