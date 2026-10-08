import { Component } from '@angular/core';
import {
    GanttModule,
    EditService,
    SelectionService,
    TaskFieldsModel,
    LabelSettingsModel,
    EditSettingsModel
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    providers: [EditService, SelectionService],
    template: `
    <ejs-gantt
      [dataSource]="data"
      height="450px"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [taskFields]="taskFields"
      [labelSettings]="labelSettings"
      [editSettings]="editSettings"
      [allowUnscheduledTasks]="true">

    </ejs-gantt>
  `
})
export class AppComponent {
    public data: object[] = GanttData;

    public projectStartDate: Date = new Date('03/28/2019');
    public projectEndDate: Date = new Date('05/18/2019');

    public taskFields: TaskFieldsModel = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        endDate: 'EndDate'
    };

    public labelSettings: LabelSettingsModel = {
        leftLabel: 'TaskName'
    };

    public editSettings: EditSettingsModel = {
        allowTaskbarEditing: true,
        allowTaskbarDraw: true
    };
}
