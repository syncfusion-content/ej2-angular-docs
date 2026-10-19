import { Component, ViewEncapsulation } from '@angular/core';
import {
    ColumnMenuService,
    ContextMenuService,
    EditService,
    FilterService,
    GanttModule,
    ResizeService,
    RowDDService,
    SortService,
    ToolbarService
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    providers: [SortService, FilterService, ResizeService, ColumnMenuService, ToolbarService, EditService, RowDDService, ContextMenuService],
    encapsulation: ViewEncapsulation.None,
    template: `
    <ejs-gantt
      height="450px"
      [dataSource]="data"
      [allowSorting]="true"
      [allowFiltering]="true"
      [allowResizing]="true"
      [enableContextMenu]="true"
      [showColumnMenu]="true"
      [enableSerialNumber]="true"
      [allowRowDragAndDrop]="true"
      [allowTaskbarDragAndDrop]="true"
      [treeColumnIndex]="2"
      [editSettings]="editSettings"
      [taskFields]="taskSettings"
      [splitterSettings]="splitterSettings"
      [toolbar]="toolbar">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" [visible]="false"></e-column>
        <e-column field="SerialNumber" headerText="S.No" width="100" [allowFiltering]="false"></e-column>
        <e-column field="TaskName" headerText="Task Name" [allowReordering]="false" width="280"></e-column>
        <e-column field="StartDate" headerText="Start Date" width="140"></e-column>
        <e-column field="Duration" headerText="Duration" [allowEditing]="false" width="130"></e-column>
        <e-column field="Progress" headerText="Progress"></e-column>
      </e-columns>
    </ejs-gantt>`
})
export class AppComponent {
    public data: object[] = GanttData;
    public editSettings: object = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    public splitterSettings: object = {
        columnIndex: 4
    };
    public toolbar: string[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Indent', 'Outdent', 'ExpandAll', 'CollapseAll', 'Search'];
}
