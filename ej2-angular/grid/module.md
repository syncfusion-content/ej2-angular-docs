---
layout: post
title: Angular Grid – Modules and Feature Injection | Syncfusion
description: Modules and services to enable Syncfusion Angular Grid features like paging, sorting, filtering, grouping, editing, and export.
platform: ej2-angular
control: Module 
documentation: ug
domainurl: ##DomainURL##
---

# Module in Angular Grid component

To enable specific features in the Angular Grid component, inject the required value provider modules listed below.

| Module | Description |
|------|-------------|
| [PageService](https://ej2.syncfusion.com/angular/documentation/api/grid/page) | Inject this service to enable paging functionality. |
| [SortService](https://ej2.syncfusion.com/angular/documentation/api/grid/sort) | Inject this service to enable sorting functionality. |
| [FilterService](https://ej2.syncfusion.com/angular/documentation/api/grid/filter) | Inject this service to enable filtering functionality. |
| [GroupService](https://ej2.syncfusion.com/angular/documentation/api/grid/group) | Inject this service to enable grouping functionality. |
| [EditService](https://ej2.syncfusion.com/angular/documentation/api/grid/edit) | Inject this service to enable editing functionality. |
| `AggregateService` | Inject this service to enable aggregate operations in the Grid. |
| [ColumnChooserService](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooser) | Inject this service to enable the column chooser feature. |
| `ColumnMenuService` | Inject this service to enable the column menu feature. |
| `CommandColumnService` | Inject this service to enable command column functionality. |
| [ContextMenuService](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenu) | Inject this service to enable the context menu feature. |
| [DetailRowService](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow) | Inject this service to enable the detail template feature. |
| [ForeignKeyService](https://ej2.syncfusion.com/angular/documentation/api/grid/foreignkey) | Inject this service to enable foreign key column support. |
| `FreezeService` | Inject this service to enable frozen columns and rows. |
| `ResizeService` | Inject this service to enable column resizing. |
| [ReorderService](https://ej2.syncfusion.com/angular/documentation/api/grid/reorder) | Inject this service to enable column reordering. |
| `RowDDService` | Inject this service to enable row drag-and-drop functionality. |
| [SearchService](https://ej2.syncfusion.com/angular/documentation/api/grid/search) | Inject this service to enable the search feature. This service is included by default. |
| [SelectionService](https://ej2.syncfusion.com/angular/documentation/api/grid/selection) | Inject this service to enable row and cell selection. This service is included by default. |
| [ScrollService](https://ej2.syncfusion.com/angular/documentation/api/grid/scroll) | Inject this service to enable grid scrolling. This service is included by default. |
| [PrintService](https://ej2.syncfusion.com/angular/documentation/api/grid/print) | Inject this service to enable the print feature. This service is included by default. |
| [ToolbarService](https://ej2.syncfusion.com/angular/documentation/api/grid/toolbar) | Inject this service to enable toolbar actions. |
| `VirtualScrollService` | Inject this service to enable virtual scrolling. |
| `ExcelExportService` | Inject this service to enable Excel export functionality. |
| `PdfExportService` | Inject this service to enable PDF export functionality. |

Add the required modules to the providers array in the root `NgModule` or directly in the component class to enable the corresponding Grid features.