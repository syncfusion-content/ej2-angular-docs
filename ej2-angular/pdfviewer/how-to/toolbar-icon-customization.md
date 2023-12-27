---
layout: post
title: Customize toolbar in Angular Pdfviewer component | Syncfusion
description: Learn here all about Customize toolbar in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize toolbar in PDF Viewer component

## How to customize existing toolbar in PDF Viewer component

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by **CustomToolbarItemModel** and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

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

  public toolItem: CustomToolbarItemModel = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
  };

  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [this.toolItem,'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool',
      'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool',
      'FormDesignerEditTool', 'CommentTool', 'SubmitForm', this.toolItem]
  };
  public toolbarClick(args: any): void {
      var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (args.item && args.item.id === 'print') {
            pdfViewer.printModule.print();
      } else if (args.item && args.item.id === 'download') {
            pdfViewer.download();
      }
    }
        prefixIcon: "e-de-ctnr-lock",
        tooltipText: "Disable Image",
        text: "Disable Image",
        id: "Custom"
  };
  public toolbarSettings = { toolbarItems: [this.toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}
  
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
                      [serviceUrl]='service'
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

  public toolItem: CustomToolbarItemModel = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
  };

  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [this.toolItem,'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool',
      'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool',
      'FormDesignerEditTool', 'CommentTool', 'SubmitForm', this.toolItem]
  };
  public toolbarClick(args: any): void {
      var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
      if (args.item && args.item.id === 'print') {
            pdfViewer.printModule.print();
      } else if (args.item && args.item.id === 'download') {
            pdfViewer.download();
      }
    }

          prefixIcon: "e-de-ctnr-lock",
          tooltipText: "Disable Image",
          text: "Disable Image",
          id: "Custom"
    };
  public toolbarSettings = { toolbarItems: [this.toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}

  ngOnInit(): void {
  }
}

{% endhighlight %}
{% endtabs %}

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] 