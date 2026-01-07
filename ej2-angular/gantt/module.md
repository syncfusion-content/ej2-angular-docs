---
layout: post
title: Module in Angular Gantt component | Syncfusion
description: Learn how to inject modules in the Syncfusion Angular Gantt component to enable features like sorting, editing, and toolbar for optimized performance.
platform: ej2-angular
control: Module
documentation: ug
domainurl: ##DomainURL##
---

# Module in Angular Gantt component

The Angular Gantt component uses a modular architecture, enabling injection of specific service providers to activate features like sorting for task prioritization, toolbar for task management, or virtual scrolling for large datasets. This approach loads only necessary functionality, reducing bundle size and improving load times for projects, such as managing thousands of tasks in real-time. For example, injecting [ToolbarService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) enables a customizable toolbar for adding or editing tasks, while [SortService](https://ej2.syncfusion.com/angular/documentation/api/gantt/sort/) allows sorting by task duration. Modules support accessibility with ARIA labels for UI elements (e.g., context menus) and adapt to responsive designs for consistent display across devices, ensuring efficient performance and scalability.

## Inject modules

Modules are injected at the component or module level to enable specific Gantt features. Component-level injection suits isolated Gantt instances, while module-level injection provides application-wide availability, ideal for multiple Gantt components. Each module corresponds to specific properties, such as [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) for `ToolbarService` or [editSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editsettings) for `EditService`.

**Component-level injection**

Inject modules in the component for localized feature activation:

```typescript
import { Component } from '@angular/core';
import { SortService, FilterService, EditService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-gantt',
    template: `<ejs-gantt [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    providers: [SortService, FilterService, EditService, ToolbarService]
})
export class GanttComponent {
    public data: object[] = [];
    public taskSettings: object = {};
}
```

**Module-level injection**

Inject modules in the `NgModule` for application-wide availability:

```typescript
import { NgModule } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { SortService, FilterService, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@NgModule({
    imports: [GanttModule],
    providers: [SortService, FilterService, EditService, ToolbarService, SelectionService]
})
export class AppModule { }
```

### Available modules

- **Core data management**:
  - [SortService](https://ej2.syncfusion.com/angular/documentation/api/gantt/sort/): Enables column sorting with [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowsorting).
  - [FilterService](https://ej2.syncfusion.com/angular/documentation/api/gantt/filter/): Supports data filtering with [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering).
  - [SelectionService](https://ej2.syncfusion.com/angular/documentation/api/gantt/selection/): Allows row and cell selection with [allowSelection](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowselection).
  - [EditService](https://ej2.syncfusion.com/angular/documentation/api/gantt/edit/): Enables task editing with [editSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editsettings).
- **UI enhancements**:
  - [ToolbarService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar): Adds toolbar controls like export buttons with [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar).
  - [ContextMenuService](https://ej2.syncfusion.com/angular/documentation/api/gantt/contextMenu/): Enables context menus with [enableContextMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu).
  - [ColumnMenuService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenumodule): Provides column menu options with [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt/#showcolumnmenu).
  - [ReorderService](https://ej2.syncfusion.com/angular/documentation/api/gantt/reorder/): Supports column reordering with [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowreordering).
  - [ResizeService](https://ej2.syncfusion.com/angular/documentation/api/gantt/resize/): Enables column resizing with [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowresizing).
- **Advanced features**:
  - [RowDDService](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowDD/): Allows row drag-and-drop with [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowrowdraganddrop).
  - [DayMarkersService](https://ej2.syncfusion.com/angular/documentation/api/gantt/dayMarkers/): Supports event markers and holidays with [eventMarkers](https://ej2.syncfusion.com/angular/documentation/api/gantt/#eventmarkers) and [holidays](https://ej2.syncfusion.com/angular/documentation/api/gantt/#holidays).
  - [VirtualScrollService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#virtualscrollmodule): Enables virtual scrolling for large datasets with [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablevirtualization).
  - [CriticalPathService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#criticalpathmodule): Visualizes critical paths with [enableCriticalPath](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecriticalpath).
  - [UndoRedoService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#undoredomodule): Supports undo/redo operations with [enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enableundoredo).
- **Export features**:
  - [ExcelExportService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#excelexportmodule): Enables Excel export[allowExcelExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowexcelexport).
  - [PdfExportService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfexportmodule): Supports PDF export with [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowpdfexport).

Ensure modules are injected before using their features to avoid runtime errors. For responsive designs, module-enabled UI elements (e.g., toolbar, context menu) adapt automatically.

## See also
- [How to configure event markers?](https://ej2.syncfusion.com/angular/documentation/gantt/eventmarkers)
- [How to enable virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)
- [How to manage task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)