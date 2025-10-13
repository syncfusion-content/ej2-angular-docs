import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, EditService, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [EditService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="padding: 0 0 20px 0">
      <button ejs-button id="above" style="margin-right: 10px;" (click)="addAbove()">Add New Row as Above position</button>
      <button ejs-button id="below" style="margin-right: 10px;" (click)="addBelow()">Add New Row as Below position</button>
      <button ejs-button id="child" (click)="addChild()">Add New Row as Child position</button>
    </div>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [editSettings]="editSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public editSettings?: EditSettingsModel= {}

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
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public addAbove(): void {
    const newRecord = this.generateNewTask();
    this.ganttInstance?.addRecord(newRecord, 'Above', 0);
  }

  public addBelow(): void {
    const newRecord = this.generateNewTask();
    this.ganttInstance?.addRecord(newRecord, 'Below', 1);
  }

  public addChild(): void {
    const newRecord = this.generateNewTask();
    this.ganttInstance?.clearSelection();
    this.ganttInstance?.addRecord(newRecord, 'Child', 2);
  }

  private generateNewTask(): object {
    return {
      TaskID: this.generateTaskID(),
      TaskName: this.generateTaskName(),
      StartDate: this.generateStartDate(),
      Duration: this.generateDuration(),
      Progress: 0
    };
  }

  private generateTaskID(): number {
    return Math.floor(1000 + Math.random() * 90000);
  }

  private generateTaskName(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  private generateStartDate(): Date {
    return new Date();
  }

  private generateDuration(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
