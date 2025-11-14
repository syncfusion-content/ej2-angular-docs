import { Component, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <div class="controls">
      <button (click)="expandAll()">Expand All</button>
      <button (click)="collapseAll()">Collapse All</button>
      <button (click)="expandLevel0()">Expand Level 0</button>
      <button (click)="collapseLevel1()">Collapse Level 1</button>
      <button (click)="expandById(2)">Expand Task ID 2</button>
      <button (click)="collapseById(1)">Collapse Task ID 1</button>
      <button (click)="expandFirstRow()">Expand First Row (DOM)</button>
      <button (click)="collapseFirstRow()">Collapse First Row (DOM)</button>
    </div>
    <ejs-gantt #gantt [dataSource]="data" [taskFields]="taskFields" [treeColumnIndex]="1" height="460px">
      <e-columns>
        <e-column field="TaskID" headerText="ID" width="80"></e-column>
        <e-column field="TaskName" headerText="Name" width="200"></e-column>
        <e-column field="Duration" headerText="Duration" width="100"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styles: [`
    .controls { 
      padding: 12px; 
      display: flex; 
      flex-wrap: wrap; 
      gap: 8px; 
      background: #f5f5f5; 
      border-top: 1px solid #ddd;
    }
    button { 
      padding: 6px 10px; 
      font-size: 13px; 
    }
  `]
})
export class AppComponent {
  @ViewChild('gantt') gantt!: GanttComponent;
  public data?: object[];
  public taskFields?: object;

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', Duration: 5, Progress: 70 },
      { TaskID: 2, TaskName: 'Identify Site', Duration: 3, Progress: 50, parentID: 1 },
      { TaskID: 3, TaskName: 'Perform Soil Test', Duration: 2, Progress: 100, parentID: 2 },
      { TaskID: 4, TaskName: 'Project Planning', Duration: 10, Progress: 40 },
      { TaskID: 5, TaskName: 'Define Requirements', Duration: 4, Progress: 60, parentID: 4 },
      { TaskID: 6, TaskName: 'Create Blueprint', Duration: 6, Progress: 30, parentID: 4 }
    ];
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'parentID'
    };
  }

  // 1. Expand all.
  public expandAll() {
    this.gantt.expandAll();
  }

  // 2. Collapse all.
  public collapseAll() {
    this.gantt.collapseAll();
  }

  // 3. Expand at level (e.g., Level 0 = root tasks).
  public expandLevel0() {
    (this.gantt as GanttComponent).treeGrid.expandAtLevel(0);
  }

  // 4. Collapse at level (e.g., Level 1 = first child level).
  public collapseLevel1() {
    (this.gantt as GanttComponent).treeGrid.collapseAtLevel(1);
  }

  // 5. Expand by key (TaskID).
  public expandById(id: number) {
    (this.gantt as GanttComponent).treeGrid.expandByKey(id);
  }

  // 6. Collapse by key (TaskID).
  public collapseById(id: number) {
    (this.gantt as GanttComponent).treeGrid.collapseByKey(id);
  }

  // 7. Expand first row by DOM element.
  public expandFirstRow() {
    const rows = this.gantt.treeGrid.getRows();
    if (rows && rows.length > 0) {
      (this.gantt as GanttComponent).treeGrid.expandRow(rows[0]);
    }
  }

  // 8. Collapse first row by DOM element.
  public collapseFirstRow() {
    const rows = this.gantt.treeGrid.getRows();
    if (rows && rows.length > 0) {
      (this.gantt as GanttComponent).treeGrid.collapseRow(rows[0]);
    }
  }
}