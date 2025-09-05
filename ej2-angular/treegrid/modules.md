---
layout: post
title: Modules in Angular TreeGrid component | Syncfusion
description: Learn about module injection in the Syncfusion Angular TreeGrid component of Essential JS 2, including available feature modules and their purposes.
platform: ej2-angular
control: Modules 
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Angular TreeGrid component

The following value providers should be injected to extend TreeGrid functionality:

| Module                                | Description                                                  |
|----------------------------------------|--------------------------------------------------------------|
| [`PageService`](../treegrid/paging)               | Inject to enable paging features.                            |
| [`SortService`](../treegrid/sorting)              | Inject to enable sorting features.                           |
| [`FilterService`](../treegrid/filtering/filtering) | Inject to enable filtering features.                         |
| [`EditService`](../treegrid/editing/edit)         | Inject to enable editing features.                           |
| [`AggregateService`](../treegrid/aggregates/aggregates) | Inject to enable aggregate features.                   |
| [`ColumnMenuService`](../treegrid/columns/column-menu) | Inject to enable the column menu feature.               |
| [`CommandColumnService`](../treegrid/editing/command-column-editing) | Inject to enable command column features.  |
| [`ContextMenuService`](../treegrid/context-menu)          | Inject to enable context menu features.                      |
| [`ResizeService`](../treegrid/columns/column-resizing)    | Inject to enable column resizing features.                   |
| [`ReorderService`](../treegrid/columns/column-reorder)    | Inject to enable column reordering features.                 |
| [`PrintService`](../treegrid/print)                       | Inject to enable printing features (default injected).       |
| [`ToolbarService`](../treegrid/tool-bar/tool-bar)         | Inject to enable toolbar features.                           |
| [`ExcelExportService`](../treegrid/excel-export/excel-export) | Inject to enable Excel export features.                |
| [`PdfExportService`](../treegrid/pdf-export/pdf-export)    | Inject to enable PDF export features.                        |
| [`RowDDService`](../treegrid/row/indent)                  | Inject to enable row drag-and-drop and indent features.      |

These modules should be injected into the `providers` section of the root `NgModule` or the component class.

> The data module can be accessed using the [`getDataModule`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getdatamodule) method in TreeGrid.

> For an overview of features, visit the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). See the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to explore data presentation and capabilities.
