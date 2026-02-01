import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule, SplitterSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { data, ProjectResources } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
        <ejs-gantt #gantt height="450px" rowHeight="60" [dataSource]="data" [taskFields]="taskSettings"
    [resourceFields]="resourceFields" [resources]="resources" [splitterSettings]="splitterSettings">
    <e-columns>
        <e-column field="TaskID"></e-column>
        <e-column field="resources" headerText="Resources" width="250" textAlign="Center">
            <ng-template #template let-data>
                <div class="image">
                    <img [src]="'assets/images/' + data.TaskID + '.png'" style="height:42px;" />
                </div>
            </ng-template>
        </e-column>
        <e-column field="TaskName"></e-column>
        <e-column field="StartDate"></e-column>
        <e-column field="Duration"></e-column>
        <e-column field="Progress"></e-column>
    </e-columns>

</ejs-gantt>
    `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @ViewChild('gantt') public gantt?: GanttComponent;

  public data?: object[];
  public resources?: object[];
  public taskSettings?: object;
  public resourceFields?: object;
  public splitterSettings?: SplitterSettingsModel;

  ngOnInit(): void {

    this.data = data;
    this.resources = ProjectResources;

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID',
      resourceInfo: 'resources'
    };

    this.resourceFields = {
      id: 'resourceID',
      name: 'resourceName'
    };

    this.splitterSettings = {
      columnIndex: 7
    };
  }
}