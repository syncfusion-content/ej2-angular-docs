import { Component } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { TaskFieldsModel, SplitterSettingsModel, TimelineSettingsModel, LabelSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { infiniteTimelineScrollData } from './data';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template: `
    <ejs-gantt
      height='430px'
      [dataSource]='data'
      [enableInfiniteTimelineScroll]='true'
      [taskFields]='taskSettings'
      [treeColumnIndex]='1'
      [splitterSettings]='splitterSettings'
      gridLines='Both'
      [timelineSettings]='timelineSettings'
      [labelSettings]='labelSettings'>
      <e-columns>
        <e-column field='TaskID' width='80'></e-column>
        <e-column field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></e-column>
        <e-column field='StartDate'></e-column>
        <e-column field='Duration'></e-column>
        <e-column field='Progress'></e-column>
        <e-column field='Predecessor'></e-column>
      </e-columns>

    </ejs-gantt>
  `,
})
export class AppComponent {
    public data = infiniteTimelineScrollData;

    public taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    public splitterSettings: SplitterSettingsModel = {
        columnIndex: 3
    };

    public timelineSettings: TimelineSettingsModel = {
        viewStartDate: new Date('12/29/2025'),
        viewEndDate: new Date('04/27/2026')
    };

    public labelSettings: LabelSettingsModel = {
        leftLabel: 'TaskID',
        rightLabel: 'TaskName'
    };
}