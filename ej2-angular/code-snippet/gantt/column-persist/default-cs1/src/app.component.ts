import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, ToolbarService, EditService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule , ButtonModule],
  providers: [ToolbarService, EditService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <button ejs-button style="margin-bottom:20px" id="restore" (click)="clickHandler()">Restore</button>
    <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [enablePersistence]='true' [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" width="90" textAlign="Right"></e-column>
        <e-column field="TaskName" width="290">
          <ng-template #headerTemplate>
            <div style="width: 20px; height: 20px;">Tasks Name</div>
          </ng-template>
        </e-column>
        <e-column field="StartDate" width="390" format="yMd" textAlign="Right"></e-column>
        <e-column field="Duration" width="120" textAlign="Right"></e-column>
        <e-column field="Progress" width="120" textAlign="Right"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = { columnIndex: 2 };

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
  }

  public clickHandler(): void {
    const savedProperties = JSON.parse((this.ganttInstance as GanttComponent).getPersistData());
    const gridColumnsState = [...(this.ganttInstance as GanttComponent).ganttColumns];
    savedProperties.columns.forEach((col: any) => {
      const state = gridColumnsState.find((c: any) => c.field === col.field);
      if (state) {
        col.headerText = 'Text Changed';
        col.template = state.template;
        col.headerTemplate = state.headerTemplate;
      }
    });
    (this.ganttInstance as GanttComponent).treeGrid.setProperties(savedProperties);
  }
}


