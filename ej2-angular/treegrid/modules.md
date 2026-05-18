---
layout: post
title: Modules in Angular TreeGrid component | Syncfusion
description: Learn about module injection in the Syncfusion Angular TreeGrid component of Essential JS 2, including available feature modules and their purposes.
platform: ej2-angular
control: Modules 
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Angular TreeGrid Component

Syncfusion Angular TreeGrid modules help optimize your application's bundle size by including only the features you need. To enable a specific TreeGrid feature, import and inject the corresponding Feature Module into your TreeGrid configuration. The available TreeGrid Feature Modules include:

| Feature | Module | Description |
|--------|--------|-------------|
| [Paging](./paging) | `PageService` | Inject this module to use paging feature. |
| [Sorting](./sorting) | `SortService` | Inject this module to use sorting feature. |
| [Filtering](./filtering/filtering) | `FilterService` | Inject this module to use filtering feature. |
| [Editing](./editing/edit) | `EditService` | Inject this module to use editing feature. |
| [Aggregates](./aggregates/aggregates) | `AggregateService` | Inject this module to use aggregate feature. |
| [Column Chooser](./columns/column-chooser) | `ColumnChooserService` | Inject this module to use column chooser feature. |
| [Column Menu](./columns/column-menu) | `ColumnMenuService` | Inject this module to use column menu feature. |
| [Command Column](./editing/command-column-editing) | `CommandColumnService` | Inject this module to use command column feature. |
| [Context Menu](./context-menu) | `ContextMenuService` | Inject this module to use context menu feature. |
| [Detail Row](./row/detail-template) | `DetailRowService` | Inject this module to use detail template feature. |
| [Foreign Key](./columns/foreign-key-column) | `ForeignKeyService` | Inject this module to use foreign key feature. |
| [Resize](./columns/column-resizing) | `ResizeService` | Inject this module to use resize feature. |
| [Reordering](./columns/column-reorder) | `ReorderService` | Inject this module to use reorder feature. |
| [Row Drag and Drop](./row/row-drag-and-drop) | `RowDDService` | Inject this module to use row drag and drop feature. |
| [Virtual Scrolling](./scrolling/virtual-scroll) | `VirtualScrollService` | Inject this module to use virtual scrolling feature. |
| [Infinite Scrolling](./scrolling/infinite-scroll) | `InfiniteScrollService` | Inject this module to use infinite scrolling feature. |
| [Toolbar](./tool-bar/tool-bar) | `ToolbarService` | Inject this module to use toolbar feature. |
| [Excel Export](./excel-export/excel-export) | `ExcelExportService` | Inject this module to use excel export feature. |
| [PDF Export](./pdf-export/pdf-export) | `PdfExportService` | Inject this module to use PDF export feature. |

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing by importing required modules from `@syncfusion/ej2-angular-treegrid` and injecting them into the treegrid component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/treegrid/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/getting-started-cs5" %}
