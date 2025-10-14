import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttModule, GanttComponent, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule],
  providers: [ToolbarService, SelectionService],
  template: `
    <div style="margin-left:180px;padding:20px;">
      <p id="message">{{ message }}</p>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)">
    </ejs-gantt>`,
  styles: [`
    #message {
      color: red;
      text-align: center;
      font-weight: bold;
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public toolbar?: ToolbarItems[] | object;
  public message: string = '';

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Kickoff', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Site Selection', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 55 },
      { TaskID: 3, TaskName: 'Soil Analysis', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 65 },
      { TaskID: 4, TaskName: 'Approval of Soil Report', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 35 },
      { TaskID: 5, TaskName: 'Cost Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 6, TaskName: 'Create Floor Plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 95 },
      { TaskID: 7, TaskName: 'Material Listing', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 35 },
      { TaskID: 8, TaskName: 'Approval of Estimate', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 85 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.toolbar = ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Click', id: 'Click' }];
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Click') {
      this.message = `Custom Toolbar Clicked`;
    }
  }
}
