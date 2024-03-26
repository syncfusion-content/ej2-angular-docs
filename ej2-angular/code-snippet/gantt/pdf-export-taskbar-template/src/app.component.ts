import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  GanttComponent,
  ToolbarItem,
  PdfExportProperties
} from '@syncfusion/ej2-angular-gantt';
import { editingResources, base64Data } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

@Component({
  selector: 'app-root',
  template: `<ejs-gantt #ganttDefault id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" [rowHeight]="45" [taskbarHeight]="35" (pdfQueryTaskbarInfo)="pdfQueryTaskbarInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [allowResizing] = 'true'  [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources"  
       >
       <ng-template #taskbarTemplate let-data>
       <div class="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style="position:absolute; height: 100%">
       <img [src]="'./' + data.ganttProperties.resourceInfo[0].resourceId + '.png'" style="height: 40px; width: 40px;">
             <span class="e-span">{{ data.TaskName }}</span>
           </div>
       </ng-template>
       <ng-template #parentTemplate let-data>
       <div class="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar" style="position:absolute;  height: 100%">
            <span class="e-span">{{ data.TaskName }}</span>
           </div>
       </ng-template>
       <ng-template #milestoneTemplate let-data>
       <div>
           <div class="e-gantt-milestone" style="position:absolute;">
               <div class="image" style="position:absolute; left: 8px ; top: 4px">
                  <img class="moments" src={{data.ganttProperties.resourceInfo[0].resourceId}}.png height="30px" width="30px" />
               </div>
               <div
                   class="e-milestone-top"
                   style="border-right-width:26px; margin-top: -4px;border-left-width:26px;border-bottom-width:26px;"
               ></div>
               <div
                   class="e-milestone-bottom"
                   style="top:16px;border-right-width:26px; border-left-width:26px; border-top-width:26px;"
               ></div>
           </div>
       </div>
   </ng-template>
     </ejs-gantt>`,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public resources?: object[];
  public rowHeight?: number;
  public toolbar?: ToolbarItem[];
  @ViewChild('ganttDefault', { static: true })
  public ganttChart?: GanttComponent;
  columns: ({ field: string; headerText: string; textAlign: string; width: string; visible?: undefined; } | { field: string; headerText: string; width: string; visible: boolean; textAlign?: undefined; } | { field: string; headerText: string; width: string; textAlign?: undefined; visible?: undefined; })[] | undefined;
  public resourceFields?: object;
  public ngOnInit(): void {
    this.data = base64Data,
      this.taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        resourceInfo: 'resources',
        startDate: 'StartDate',
        duration: 'Duration',
        child: 'subtasks',
      };
    this.toolbar = ['PdfExport'];
    this.columns =  [
      { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
      { field: 'TaskName', headerText:  'Task Name', width: '150'},
  ];
    this.splitterSettings = {
      columnIndex: 1,
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
  public pdfQueryTaskbarInfo(args: any): void {
    if (!args.data.hasChildRecords) {
      if (args.data.ganttProperties.resourceNames) {
        args.taskbarTemplate.image = [{
          width: 20, base64: (args as any).data.taskData.resourcesImage, height: 20
        }]
      }
      args.taskbarTemplate.value = args.data.TaskName;
    }
    if (args.data.hasChildRecords) {
      if (args.data.ganttProperties.resourceNames) {
        args.taskbarTemplate.image = [{
          width: 20, base64: (args as any).data.taskData.resourcesImage, height: 20
        }]
      }
      args.taskbarTemplate.value = args.data.TaskName;
    }
    if (args.data.ganttProperties.duration === 0) {
      if (args.data.ganttProperties.resourceNames) {
        args.taskbarTemplate.image = [{
          width: 20, base64: (args as any).data.taskData.resourcesImage, height: 20,
        }]
      }
      args.taskbarTemplate.value = args.data.TaskName
    }
  }
}
