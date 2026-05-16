---
layout: post
title: Angular Grid – Modules and Feature Injection | Syncfusion
description: Modules and services to enable Syncfusion Angular Grid features like paging, sorting, filtering, grouping, editing, and export.
platform: ej2-angular
control: Module 
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Angular Grid component

To enable specific features in the Angular Grid component, inject the required value provider modules listed below.

| Feature | Module | Description |
|--------|--------|-------------|
| [Paging](./paging) | `PageService` | Inject this module to use paging feature. |
| [Sorting](./sorting) | `SortService` | Inject this module to use sorting feature. |
| [Filtering](./filtering/filtering) | `FilterService` | Inject this module to use filtering feature. |
| [Grouping](./grouping/grouping) | `GroupService` | Inject this module to use grouping feature. |
| [Lazy Load Grouping](./grouping/lazy-load-grouping) | `LazyLoadGroupService` | Inject this module to use lazy load grouping feature. |
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
| [Virtual Scrolling](./scrolling/virtual-scrolling) | `VirtualScrollService` | Inject this module to use virtual scrolling feature. |
| [Infinite Scrolling](./scrolling/infinite-scrolling) | `InfiniteScrollService` | Inject this module to use infinite scrolling feature. |
| [Toolbar](./tool-bar/tool-bar) | `ToolbarService` | Inject this module to use toolbar feature. |
| [Excel Export](./excel-export/excel-exporting) | `ExcelExportService` | Inject this module to use excel export feature. |
| [PDF Export](./pdf-export/pdf-export) | `PdfExportService` | Inject this module to use PDF export feature. |

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing by importing required modules from `@syncfusion/ej2-angular-grids` and injecting them into the grid component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/grid/sorting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sorting-cs1" %}