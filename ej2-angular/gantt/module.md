---
layout: post
title: Feature Modules
description: Enable advanced Angular Gantt Chart features through module injection for sorting, editing, toolbar, and export functionality.
platform: ej2-angular
control: Module
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules

The Angular Gantt Chart uses a modular architecture for bundle size optimization. Basic rendering requires no additional modules. Advanced features like sorting, editing, toolbar, and export require explicit module injection through Angular's dependency injection system.

This approach loads only the functionality you need, reducing bundle size and improving load times.

## Inject modules

Import and inject service modules in your component or NgModule providers array:

**Component-level injection (standalone components)**

```typescript
import { Component } from '@angular/core';
import { GanttModule, SortService, FilterService, EditService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-gantt',
    standalone: true,
    imports: [GanttModule],
    template: `
        <ejs-gantt 
            [dataSource]="data" 
            [taskFields]="taskSettings"
            [allowFiltering]="true"
            [allowSorting]="true"
            [toolbar]="['Add', 'Edit', 'Delete']"
            [editSettings]="editSettings">
        </ejs-gantt>
    `,
    providers: [SortService, FilterService, EditService, ToolbarService]
})
export class GanttComponent {
    public data = [
        { TaskID: 1, TaskName: 'Design', StartDate: new Date('04/02/2024'), Duration: 5 },
        { TaskID: 2, TaskName: 'Development', StartDate: new Date('04/09/2024'), Duration: 10 }
    ];
    public taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration'
    };
    public editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true };
}
```

Each module enables specific features. For example, `SortService` enables column sorting, while `EditService` enables task editing through the dialog or inline editing.

**Module-level injection (NgModule-based applications)**

For applications using NgModules, inject services in the `providers` array:

```typescript
import { NgModule } from '@angular/core';
import { GanttModule, SortService, FilterService, EditService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

@NgModule({
    imports: [GanttModule],
    providers: [SortService, FilterService, EditService, ToolbarService]
})
export class AppModule { }
```

## Available modules

**Core data operations:**
- `SortService` - Column sorting with `allowSorting`
- `FilterService` - Data filtering with `allowFiltering`
- `SelectionService` - Row/cell selection with `allowSelection`
- `EditService` - Task editing with `editSettings`

**UI enhancements:**
- `ToolbarService` - Toolbar controls with `toolbar` property
- `ContextMenuService` - Right-click menus with `enableContextMenu`
- `ColumnMenuService` - Column header menus with `showColumnMenu`
- `ReorderService` - Column reordering with `allowReordering`
- `ResizeService` - Column resizing with `allowResizing`

**Advanced features:**
- `RowDDService` - Row drag-and-drop with `allowRowDragAndDrop`
- `DayMarkersService` - Event markers and holidays
- `VirtualScrollService` - Virtual scrolling with `enableVirtualization`
- `CriticalPathService` - Critical path visualization with `enableCriticalPath`
- `UndoRedoService` - Undo/redo operations with `enableUndoRedo`

**Export:**
- `ExcelExportService` - Excel export with `allowExcelExport`
- `PdfExportService` - PDF export with `allowPdfExport`

> **Note:** Always inject modules before using their features. Missing module injection will cause runtime errors.

## Bundle optimization

Modern Angular build tools (Angular CLI with Webpack/esbuild) automatically tree-shake unused code when using ES module imports. To maximize bundle size reduction, follow these practices:

**Import only what you need:**

```typescript
// Good - Tree-shakeable
import { GanttModule, SortService, EditService } from '@syncfusion/ej2-angular-gantt';

// Avoid - Imports everything
import * as GanttComponents from '@syncfusion/ej2-angular-gantt';
```

**Only inject required modules:**

```typescript
// Only include modules for features you are actually using
providers: [SortService, EditService]
```

This ensures your production bundle includes only the Gantt features your application uses. For example, if you do not use Excel export, do not import or inject the `ExcelExportService` module.

### Bundle size impact

The following table shows example production build sizes with incremental feature additions:

| **Module**          | **Raw size** | **Transfer size** |
|---------------------|--------------|--------------------|
| Empty app           | 220.26 kB    | 60.71 kB           |
| GanttModule         | 2.55 MB      | 473.29 kB          |
| + SortService       | 2.56 MB      | 475.69 kB          |
| + SelectionService  | 2.58 MB      | 477.38 kB          |
| + FilterService     | 2.99 MB      | 538.76 kB          |
| + ReorderService    | 3.00 MB      | 541.35 kB          |
| + ExcelExportService| 3.14 MB      | 569.72 kB          |

- **Raw size**: Uncompressed bundle size  
- **Transfer size**: Compressed size for network transfer (gzip)

Tree shaking maintains manageable bundle sizes by including only imported features. Avoid using `GanttAllModule` as it significantly increases bundle size by including all features regardless of whether they are used.

For detailed tree-shaking implementation, refer to the [Syncfusion Angular Tree Shaking](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/tree-shaking) documentation.

## See also

- [Event Markers](https://ej2.syncfusion.com/angular/documentation/gantt/eventmarkers)
- [Virtual Scrolling](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)
- [Editing Tasks](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-task)
- [Overview](https://ej2.syncfusion.com/angular/documentation/gantt/overview)