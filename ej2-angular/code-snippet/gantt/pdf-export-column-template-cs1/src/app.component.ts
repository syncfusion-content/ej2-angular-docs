import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import {
  ToolbarService,
  PdfExportService,
  SelectionService,
} from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  GanttComponent,
  ToolbarItem,
  PdfExportProperties,
} from '@syncfusion/ej2-angular-gantt';
import { editingResources } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

@Component({
imports: [ GanttModule],

providers: [ToolbarService, PdfExportService, SelectionService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-gantt #ganttDefault id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [toolbar]="toolbar" (pdfQueryCellInfo)="pdfQueryCellInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [allowResizing] = 'true' rowHeight='50' [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign= 'Left' width= 100></e-column>
                <e-column field='TaskName' headerText= 'Task Name' width= 150></e-column>
                <e-column field= 'resources' headerText= 'Resources' width= 250>
                <ng-template #template let-data>
                 <div *ngIf="data.ganttProperties.resourceNames">
                <img src="{{data.TaskID}}.png" style="height:40px;width:40px"/>{{data.ganttProperties.resourceNames}}
                </div>
                </ng-template>
                </e-column>
                <e-column field= 'EmailId' headerText='Email ID' width= 150 ></e-column>
            </e-columns></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public resources?: object[];
  public toolbar?: ToolbarItem[];
  @ViewChild('ganttDefault', { static: true })
  public ganttChart?: GanttComponent;
  public resourceFields?: object;
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Product concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        EmailId: 'MartinTamer@gmail.com',
        subtasks: [
          {
            TaskID: 2,
            TaskName: 'Defining the product and its usage',
            StartDate: new Date('04/02/2019'),
            Duration: 3,
            Progress: 30,
            resources: [2],
            EmailId: 'RoseFuller@gmail.com',
            resourcesImage:
              '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',
          },
          {
            TaskID: 3,
            TaskName: 'Defining target audience',
            StartDate: new Date('04/02/2019'),
            Duration: 3,
            resources: [3],
            EmailId: 'MargaretBuchanan@gmail.com',
            resourcesImage:
              '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',
          },
          {
            TaskID: 4,
            TaskName: 'Prepare product sketch and notes',
            StartDate: new Date('04/02/2019'),
            Duration: 2,
            Predecessor: '2',
            Progress: 30,
            resources: [4],
            EmailId: 'FullerKing@gmail.com',
            resourcesImage:
              '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',
          },
        ],
      },
      {
        TaskID: 5,
        TaskName: 'Concept approval',
        StartDate: new Date('04/02/2019'),
        Duration: 0,
        Predecessor: '3,4',
        resources: [5],
        EmailId: 'Davoliofuller@gmail.com',
        resourcesImage:
          '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',
      },
      {
        TaskID: 6,
        TaskName: 'Market research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        EmailId: 'Vanjack@gmail.com',
        subtasks: [
          {
            TaskID: 7,
            TaskName: 'Demand analysis',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            EmailId: 'RoseFuller@gmail.com',
            subtasks: [
              {
                TaskID: 8,
                TaskName: 'Customer strength',
                StartDate: new Date('04/04/2019'),
                Duration: 4,
                Predecessor: '5',
                Progress: 30,
                resources: [7],
                EmailId: 'Fullerbuchanan@gmail.com',
                resourcesImage:
                  '/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADcANwMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAEBwUIAwYAAQkC/9oACAEBAAAAAL/RKXSL6ch0UrvNI3nqPuPwl9aaldWm688LUdtYd922TOpawDHviJKrZ2W4J00JAp+yjGkf/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBBAUCBv/aAAgBAhAAAAAR2yPO2tkxrV8S+P/EABkBAAIDAQAAAAAAAAAAAAAAAAAFAQQGA//aAAgBAxAAAACb9ev01i5AbFIpGC8//8QANBAAAgIBAgMFBgUEAwAAAAAAAQIDBAUABgcREhMhIjFBFDJRYnKBCBAVQqFTYXGRI3Ox/9oACAEBAAE/ANHIW70skGFRCqErJdlHOFCPMRj95/jXEHi/w32HA4zmbl3BmA5Q42pYDujjz60jISID5tVvxT7auTOIOFkIh9Ge6Fcj7Ra4ecUtmb96Ku28xaw+Y6S36bccOj/QGJDj6DqrlJobEePy8CwWH7opUJME5+Ck+TfKfyyDyZG1HhKzsiFO1uSKeRWInkIwfRn/APNceN0vsvhhlxiXNa1cVMZS7LwlDP3Mw/uqAnUXC3dt5Ip6dSSwHTqPQpY6j2LuvFiT23b2TLwqSI46jv8AfuGrWA3ttaLG7nt46xTAkVon6ws0bDxo3h5sp/zrhruJeJfDbb2dycQ7W5Ay2QP68DmIuvwJK8xrD2Z1exibrdVury/5P6sLe5J/n0OsB0tWs5Jh47tmSQep7NT0IPsBr8RWIN/bG1JSoMdbdGMef/rdyh1w8kQ0olji7h5nUzyPA6dIOuL2MsWtp5/2eEuUgEpUeYER6iRr8LmThv8ACbFQiXvp2bUJT4EuX1nZVxtnHZn0jL15uXm0cilh/plGtuOowOK+IrIDrfmHOc2jk6ar41aGwn1VpVmH8rrAVt9YaGfLpmIVhWszmvKhkhceagEKvTrN4e/uGtUavlLtVexR2SvMU5u68+Z5FQwHwOptvLj6EyT2J7HbR9EomIIAI5eQ7tcFtvRbY2ZQxUUaDs1DSunk8rgF21vdCNu2FHexli+56tYI+zm/iW7mqWHKA+sMx60P8kamj7WGaMnkHUr/ALGs5kbuJ2xkaMkDA17TVJH8kVonAKuf2gj11j8hkMpiqlubHSU4Y4lQ8uouXA5c1Ze4aFu1Yov7eJEkUMCsg6SeXkdbf6IsFiliUL1VYj3D4oNZKFMhkaGJPNo0V7Vnl6KAUQfcnWVq2Ip4Mxj4y9mBSksQ854CeZUfMPNdVrte/VSzVk643+xBHmCPQjXGixgsPuPEVhN2VjORTpbjA8DCLpEc31gnlra/tQq169mSvJFCp7Hkh6vCeRKk+Q1JZTK5T9KpsJrTP1OqnmEjT1b4AE6xOQgweMhx83azyIAkCjxPMxPPpX7n7DWMpzVkmtXSGv2mEk5HkvosY+VB+VvDv28l7FWjUuP7/hDRS/Wnx/uNcSeHlzcYpWc7EDLUNns545AwmE/SSPRkKlfDqngt/i3Xw0WYWtiWcq11wkk0UfyovIsx1szaX6NjWqYHHgCWTnNkrsoeawR++QLzJPwXuUaxuGgx7e1TObF4ry7Vx7oPogHuj8v/xAAjEQACAgEDAwUAAAAAAAAAAAABAwIRABAhMQQFYRIyQVFi/9oACAECAQE/AOMHUpn7WA4tsWi4SBHjQ7g4ulxkv1A2Tx5zthK5MT+r1mmKmygRyLGdCqQLZgGtt9Wwi1sJz5oDL+BsPoaf/8QAIhEAAgEDAwUBAAAAAAAAAAAAAQMCAAQREBIhBRMiMWFi/9oACAEDAQE/AIgyIiPZo2D1kdxUqeiSCBIEfDok7WrP6FXEJMYGY2j7XVYhioOzyAI6puZXNpBwwDE811RsT2oGXkSTt+a2l25FuxK8beSMjkZo5lIzkSZH2T70/9k=',
              },
            ],
          },
        ],
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      resourceInfo: 'resources',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks',
    };
    this.toolbar = ['PdfExport'];
    this.splitterSettings = {
      columnIndex: 4,
    };
    this.resourceFields = {
      id: 'resourceId',
      name: 'resourceName',
    };
    this.resources = editingResources;
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_pdfexport') {
      let exportProperties: PdfExportProperties = {
        fileName: 'new.pdf',
      };
      this.ganttChart!.pdfExport(exportProperties);
    }
  }
  public pdfQueryCellInfo(args: any): void {
    if (args.column.headerText === 'Resources') {
      {
        args.image = {
          height: 40,
          width: 40,
          base64: (args as any).data.taskData.resourcesImage,
        };
      }
    }
    if (args.column.headerText === 'Email ID') {
      args.hyperLink = {
        target: 'mailto:' + (args as any).data.taskData.EmailId,
        displayText: (args as any).data.taskData.EmailId,
      };
    }
  }
}
