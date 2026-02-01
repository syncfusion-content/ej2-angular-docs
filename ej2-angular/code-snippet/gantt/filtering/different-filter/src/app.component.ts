import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, FilterService } from '@syncfusion/ej2-angular-gantt';
import { DropDownListComponent, DropDownListAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListAllModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="container" style="margin-bottom: 20px; display: flex; gap: 40px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <label style={font-weight:bold}>Select Column:</label>
        <ejs-dropdownlist #fieldDropDown [dataSource]="fieldData" (change)="onFieldChange($event)" placeholder="Select column">
        </ejs-dropdownlist>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <label style={font-weight:bold}>Select Filter Type:</label>
        <ejs-dropdownlist [dataSource]="typeData" [enabled]="typeEnabled" (change)="onTypeChange($event)" placeholder="Select filter type">
        </ejs-dropdownlist>
      </div>
    </div>
    <ejs-gantt #gantt height="430px" [allowFiltering]="true" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns" [filterSettings]="filterSettings">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  @ViewChild('fieldDropDown') public fieldDropDown!: DropDownListComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public columns: Column[] = [];
  public filterSettings: object = {};
  public fieldData: string[] = [];
  public typeData: string[] = ['Menu', 'Excel'];
  public typeEnabled: boolean = false;

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), Progress: 30 },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/03/2019'), Progress: 50, ParentID: 1 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/04/2019'), Progress: 50, ParentID: 1 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/05/2019'), Progress: 50, ParentID: 1 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/06/2019'), Progress: 60 },
      { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/07/2019'), Progress: 70, ParentID: 5 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Progress: 80, ParentID: 5 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'), Progress: 90, ParentID: 5 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', width: '120' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      columnIndex: 2
    };
    // Populate dropdown with column field names.
    this.fieldData = this.columns.map(col => col.field as string);
  }

  public onFieldChange(args: ChangeEventArgs): void {
    this.typeEnabled = true;
  }

  public onTypeChange(args: ChangeEventArgs): void {
    const selectedField = this.fieldDropDown.value as string;
    const selectedType = args.value as string;
    const column = this.columns.find(col => col.field === selectedField);
    if (column) {
      (column as Column).filter = { type: selectedType };
      this.ganttInstance.refresh();
    }
  }
}

interface Column {
  field: string;
  headerText: string;
  width: string;
  filter?: { type: string };
}
