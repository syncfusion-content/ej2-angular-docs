import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
    GanttModule,
    GanttComponent,
    ToolbarItem,
    PdfExportProperties,
    ToolbarService,
    PdfExportService,
    SelectionService,
    PdfQueryTaskbarInfoEventArgs
} from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { NgIf } from '@angular/common';
import { editingResources, base64Data } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule, NgIf],
    providers: [ToolbarService, PdfExportService, SelectionService],
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css'],
    template: `
    <ejs-gantt
      #gantt
      id="gantt"
      height="430px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [toolbar]="toolbar"
      [rowHeight]="45"
      [taskbarHeight]="35"
      [resourceFields]="resourceFields"
      [resources]="resources"
      [splitterSettings]="splitterSettings"
      allowPdfExport="true"
      (toolbarClick)="toolbarClick($event)"
      (pdfQueryTaskbarInfo)="pdfQueryTaskbarInfo($event)"
    >

      <!-- Child task template -->
      <ng-template #taskbarTemplate let-data>
        <div
          class="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar"
          *ngIf="data?.ganttProperties?.resourceInfo?.length"
        >
          <img
            [src]="getResourceImage(data)"
            class="resource-img"
          />
          <span class="e-span">{{ data.TaskName }}</span>
        </div>
      </ng-template>

      <!-- Parent task template -->
      <ng-template #parentTemplate let-data>
        <div class="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar">
          <span class="e-span">{{ data.TaskName }}</span>
        </div>
      </ng-template>

      <!-- Milestone template -->
      <ng-template #milestoneTemplate let-data>
        <div *ngIf="data?.ganttProperties?.resourceInfo?.length">
          <div class="e-gantt-milestone">
            <img
              [src]="getResourceImage(data)"
              class="milestone-img"
            />
          </div>
        </div>
      </ng-template>

    </ejs-gantt>
  `
})
export class AppComponent implements OnInit {

    @ViewChild('gantt', { static: true }) gantt!: GanttComponent;

    public data!: object[];
    public resources!: object[];
    public toolbar!: ToolbarItem[];
    public columns!: object[];
    public taskSettings!: object;
    public resourceFields!: object;
    public splitterSettings!: object;

    ngOnInit(): void {

        this.data = base64Data;
        this.resources = editingResources;

        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            parentID: 'ParentID',
            resourceInfo: 'Resources'
        };

        this.resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName'
        };

        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', width: 100 },
            { field: 'TaskName', headerText: 'Task Name', width: 180 }
        ];

        this.toolbar = ['PdfExport'];

        this.splitterSettings = {
            columnIndex: 1
        };
    }
    public getResourceImage(data: any): string {
        if (data?.taskData?.resourcesImage) {
            return 'data:image/jpeg;base64,' + data.taskData.resourcesImage;
        }

        const id = data?.ganttProperties?.resourceInfo?.[0]?.ResourceId;
        if (id) {
            return `assets/images/${id}.png`;
        }

        return 'assets/images/default.png';
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'gantt_pdfexport') {
            const props: PdfExportProperties = { fileName: 'gantt.pdf' };
            this.gantt.pdfExport(props);
        }
    }

    public pdfQueryTaskbarInfo(args: PdfQueryTaskbarInfoEventArgs): void {
        const data: any = args.data;
        if (data?.taskData?.resourcesImage && args.taskbarTemplate) {
            args.taskbarTemplate.image = [{
                base64: data.taskData.resourcesImage,
                width: 20,
                height: 20
            }];
            args.taskbarTemplate.value = data.TaskName;
        }
    }
}