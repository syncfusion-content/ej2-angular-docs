import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  GanttComponent,
  ToolbarItem,
  PdfExportProperties,pdfQueryTaskbarInfoEventArgs
} from '@syncfusion/ej2-angular-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { base64Data, editingResources } from './data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

@Component({
  selector: 'app-root',
  template: `<ejs-gantt #ganttDefault id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [toolbar]="toolbar" [labelSettings]="labelSettings" (pdfQueryTaskbarInfo)="pdfQueryTaskbarInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [allowResizing] = 'true' [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"  [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources">
       <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Left'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='250'></e-column>
           
        </e-columns>
        <ng-template #labelSettingsLeftLabel let-data>
             <span>{{ data.TaskName }} [ {{ data.Progress }}% ]</span>
        </ng-template>

        <ng-template #labelSettingsRightLabel let-data>
          <div
            style="display:inline-flex"
            innerHtml="{{ customFunction(data) }}"></div>
       </ng-template>
     </ejs-gantt>`,
     styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public labelSettings?: object;
  public resources?: object[];
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public toolbar?: ToolbarItem[];
  public customFunction(data: any): string {
    var container = document.createElement('div');
    if (data.ganttProperties.resourceNames) {
      var resources = data.resources.split(',');
      for (var i = 0; i < resources.length; i++) {
        var subContainer = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        span.className = 'labelClass';
        span.innerHTML = resources[i];
        img.src = 'https://ej2.syncfusion.com/angular/demos/assets/gantt/images/' +
        resources[i] +'.png';
        img.height = 30;
        img.width = 30;
        subContainer.append(img);
        subContainer.append(span);
        container.append(subContainer);
      }
    }
    return container.innerHTML;
  }
  @ViewChild('ganttDefault', { static: true })
  public ganttChart?: GanttComponent;
  
  public resourceFields?: object;
  public ngOnInit(): void {
    this.data = base64Data;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      resourceInfo: 'resources',
      progress : 'Progress',
      startDate: 'StartDate',
      duration: 'Duration',
      child: 'subtasks',
    };
    this.toolbar = ['PdfExport'];
    this.splitterSettings = {
      columnIndex: 1,
    };
    this.resourceFields = {
      id: 'resourceId',
      name: 'resourceName',
    };
    this.labelSettings = {
      taskLabel: '${Progress}%',
    };
    this.resources = editingResources;
    this.projectStartDate= new Date('03/24/2019');
    this.projectEndDate= new Date('04/30/2019');
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_pdfexport') {
      let exportProperties: PdfExportProperties = {
        fileName: 'new.pdf',
      };
      this.ganttChart!.pdfExport(exportProperties);
    }
  }
  public pdfQueryTaskbarInfo(args: pdfQueryTaskbarInfoEventArgs): void {
    args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName + '[' + args.data.ganttProperties.progress + ']';
    if (args.data.ganttProperties.resourceNames) {
        args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
        args.labelSettings.rightLabel.image = [{
            base64: (args as any).data.taskData.resourcesImage, width: 20, height: 20
        }]
    }
  }
}
