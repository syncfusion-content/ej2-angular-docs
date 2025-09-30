import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (dataBound)="dataBound()">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
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

  dataBound(): void {
    // Style by index.
    const headerByIndex = (this.ganttInstance as GanttComponent).treeGrid.getColumnHeaderByIndex(0);
    if (headerByIndex) (headerByIndex as HTMLElement).style.color = '#0d0b0b';

    // Style by field.
    const taskNameHeader = (this.ganttInstance as GanttComponent).treeGrid.getColumnHeaderByField('TaskName');
    if (taskNameHeader) {
      (taskNameHeader as HTMLElement).style.backgroundColor = '#f45ddeab';
      (taskNameHeader as HTMLElement).style.color = '#0d0b0b';
    }

    // Style by UID.
    const headerByUid = (this.ganttInstance as GanttComponent).treeGrid.getColumnHeaderByUid('grid-column3');
    if (headerByUid) {
      (headerByUid as HTMLElement).style.backgroundColor = '#f45ddeab';
      (headerByUid as HTMLElement).style.color = '#0d0b0b';
    }

    //Style by field index.
    const durationIndex = (this.ganttInstance as GanttComponent).treeGrid.getColumnIndexByField('Duration');
    const durationHeader = (this.ganttInstance as GanttComponent).treeGrid.getColumnHeaderByIndex(durationIndex);
    if (durationHeader) (durationHeader as HTMLElement).style.color = '#0d0b0b';

    // Style by UID index.
    const uidIndex = (this.ganttInstance as GanttComponent).treeGrid.getColumnIndexByUid('grid-column4');
    const uidHeader = (this.ganttInstance as GanttComponent).treeGrid.getColumnHeaderByIndex(uidIndex);
    if (uidHeader) (uidHeader as HTMLElement).style.color = '#0d0b0b';
  }
}
