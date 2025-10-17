import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { GanttModule, GanttComponent, FilterService } from '@syncfusion/ej2-angular-gantt';
import { DropDownListComponent, DropDownList, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListAllModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="370px" [allowFiltering]="true" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns" [filterSettings]="filterSettings">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public gantt!: GanttComponent;
  @ViewChild('fieldDropdown') public fieldDropdown!: DropDownListComponent;
  @ViewChild('typeDropdown') public typeDropdown!: DropDownListComponent;
  public data: Task[] = [];
  public taskSettings = {};
  public splitterSettings = {};
  public filterSettings = {};
  public columns: object[] = [];
  public dropInstance!: DropDownList;
  public filter!: FilterUI;

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.filter = {
      ui: {
       // Creates the custom dropdown filter UI for the column.
        create: (args: { target: Element; column: object }) => {
          const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
          args.target.appendChild(flValInput);
          this.dropInstance = new DropDownList({
            dataSource: new DataManager(this.data),
            fields: { text: 'TaskName', value: 'TaskName' },
            placeholder: 'Select a value',
            popupHeight: '200px'
          });
          this.dropInstance.appendTo(flValInput);
        },
        // Writes the selected filter value into the dropdown.
        write: (args: { column: object; target: Element; filteredValue: string }) => {
          this.dropInstance.value = args.filteredValue;
        },

        // Reads the selected value from the dropdown and applies the filter.
        read: (args: { target: Element; column: Column; operator: string; fltrObj: any }) => {
          args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);
        }
      }
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', width: '120' },
      { field: 'TaskName', headerText: 'Task Name', width: '250', filter: this.filter },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      columnIndex: 2
    };

  }
}

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate?: Date;
  Duration?: number;
  ParentID?: number;
  Progress?: number;
}

interface Column {
  field: string;
  headerText: string;
  width: string;
  filter?: FilterUI;
}

interface FilterUI {
  ui: {
    create: (args: { target: Element; column: Column }) => void;
    write: (args: { column: Column; target: Element; filteredValue: string }) => void;
    read: (args: { target: Element; column: Column; operator: string; fltrObj: any }) => void;
  };
}


