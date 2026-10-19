import { Component } from '@angular/core';
import {
    GanttModule,
    TaskFieldsModel
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    template: `
    <ejs-gantt
      height="550px"
      [dataSource]="data"
      [taskFields]="taskFields"
      [allowedDependencyTypes]="allowedDependencyTypes"
      [allowParentDependency]="true">

      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="100"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="250"></e-column>
        <e-column field="StartDate" headerText="Start Date" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" width="150"></e-column>
      </e-columns>

    </ejs-gantt>
  `
})
export class AppComponent {
    public data: Object[] = GanttData;
        public taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    public allowedDependencyTypes: string[] = ['SF'];
}