import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="100"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
        <e-column field="Name" headerText="Full Name" textAlign="Right" [valueAccessor]="getConcatenatedNames" width="250">
        </e-column>
        <e-column field="Duration" headerText="Duration" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" width="120"></e-column>
      </e-columns>
    </ejs-gantt> `
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public getConcatenatedNames = (
    field: string,
    data: GanttTask
  ): string => {
    return data.Name.map((person: PersonName) =>
      person.lastName || person.firstName
    ).join(' ');
  };
}

export interface PersonName {
  firstName: string;
  lastName: string;
}

export interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  Name: PersonName[];
  subtasks?: GanttTask[];
}
