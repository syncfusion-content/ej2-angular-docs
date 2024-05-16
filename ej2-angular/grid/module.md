---
layout: post
title: Module in Angular Grid component | Syncfusion
description: Learn here all about Module in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Module 
documentation: ug
domainurl: ##DomainURL##
---

# Module in Angular Grid component

The following value providers should be injected to extend grid's functionality.

| Module | Description |
|------|-------------|
| [`PageService`](https://ej2.syncfusion.com/angular/documentation/api/grid/page)| Inject this module to use paging feature.|
| [`SortService`](https://ej2.syncfusion.com/angular/documentation/api/grid/sort)| Inject this module to use sorting feature.|
| [`FilterService`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter)| Inject this module to use filtering feature.|
| [`GroupService`](https://ej2.syncfusion.com/angular/documentation/api/grid/group)| Inject this module to use grouping feature|
| [`EditService`](https://ej2.syncfusion.com/angular/documentation/api/grid/edit)| Inject this module is use editing feature.|
| `AggregateService`| Inject this module to use aggregate feature.|
| [`ColumnChooserService`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooser)| Inject this module to use column chooser feature.|
| `ColumnMenuService`| Inject this module to use column menu feature.|
| `CommandColumnService`| Inject this module to use command column feature.|
| [`ContextMenuService`](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenu)| Inject this module to use context menu feature.|
| [`DetailRowService`](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow)| Inject this module to use detail template feature.|
| `ForeignKeyService`| Inject this module to use foreign key feature.|
| `FreezeService`| Inject this module to use frozen rows and columns feature.|
| `ResizeService`| Inject this module to use resize feature.|
| [`ReorderService`](https://ej2.syncfusion.com/angular/documentation/api/grid/reorder)| Inject this module to use reorder feature.|
| `RowDDService`| Inject this module to use row drag and drop feature.|
| [`SearchService`](https://ej2.syncfusion.com/angular/documentation/api/grid/search)| Inject this module to use search feature and this is a default injected module.|
| [`SelectionService`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection)| Inject this module to use selection feature and this is a default injected module.|
| [`ScrollService`](https://ej2.syncfusion.com/angular/documentation/api/grid/scroll)| Inject this module to use scrolling feature and this is a default injected module.|
| [`PrintService`](https://ej2.syncfusion.com/angular/documentation/api/grid/print)| Inject this module to use to use print feature and this is a default injected module.|
| `ToolbarService`| Inject this module to use toolbar feature.|
| `VirtualScrollService`| Inject this module to use virtual scroll feature.|
| `ExcelExportService`| Inject this module to use excel export feature.|
| `PdfExportService`| Inject this module to use PDF export feature.|

These modules should be injected into the **providers** section of root **NgModule** or component class.