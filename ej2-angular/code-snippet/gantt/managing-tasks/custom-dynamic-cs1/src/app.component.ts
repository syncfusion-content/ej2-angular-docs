import { Component, OnInit, ViewChild } from '@angular/core';
import { editingData, editingResources } from './data';
import { GanttAllModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  standalone: true,
  imports: [GanttAllModule],
  selector: 'app-root',
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" height="450px" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [editSettings]="editSettings" [toolbar]="toolbar">
    <e-columns>
    <e-column field="TaskID" headerText="Task ID"></e-column>
    <e-column field="TaskName" headerText="TaskName" width="250"  [edit]="editParams">
    </e-column>
    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150"  format="yMd" type="date">
    </e-column>
</e-columns>
</ejs-gantt>`,
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true })
  public ganttObj?: GanttComponent | any;
  public data?: object[];
  public resources?: object[];
  public resourceFields?: object;
  public taskSettings?: object;
  public columns?: object[];
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public editSettings?: object;
  public toolbar?: string[];
  public editParams?: any;
  public elem?: HTMLElement;
  public dropdownlistObj?: DropDownList;

  public ngOnInit(): void {
    this.data = editingData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks',
      notes: 'info',
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
    this.columns = [
      { field: 'TaskID', width: 80 },
      { field: 'TaskName', },
      { field: 'StartDate' },
      { field: 'EndDate', },
      { field: 'Duration', },
      { field: 'Progress', },
      { field: 'Predecessor' }
    ];
    this.projectStartDate = new Date('03/25/2024');
    this.projectEndDate = new Date('07/28/2024');
    this.resources = editingResources;

    this.editParams = {
      create: () => {
        this.elem = document.createElement('input');
        return this.elem;
      },
      read: () => {
        return (this.dropdownlistObj as DropDownList).value;
      },
      destroy: () => {
        (this.dropdownlistObj as DropDownList).destroy();
      },
      write: (args: Object) => {
        this.dropdownlistObj = new DropDownList({
          dataSource: this.ganttObj.treeGrid.grid.dataSource,
          fields: { value: 'TaskName' },
          value: (args as any).rowData[(args as any).column.field],
          floatLabelType: 'Auto',
        });
        this.dropdownlistObj.appendTo(this.elem);
      }
    };
  }
}
