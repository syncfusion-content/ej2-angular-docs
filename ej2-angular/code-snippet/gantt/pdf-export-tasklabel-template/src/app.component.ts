import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, ToolbarItem, PdfExportProperties, ToolbarService, PdfExportService, SelectionService, PdfQueryTaskbarInfoEventArgs, } from '@syncfusion/ej2-angular-gantt'
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { base64Data, editingResources } from './data';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, PdfExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-gantt #ganttDefault id="ganttDefault" height="430px"  [dataSource]="data"  [taskFields]="taskSettings" [toolbar]="toolbar" [labelSettings]="labelSettings" (pdfQueryTaskbarInfo)="pdfQueryTaskbarInfo($event)"
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

export class AppComponent implements OnInit {
    @ViewChild('ganttDefault', { static: true }) public ganttChart?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public labelSettings?: object;
    public resources?: object[];
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public toolbar?: ToolbarItem[];
    public resourceFields?: object;

    public ngOnInit(): void {
        this.data = base64Data;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'Resources',
            progress: 'Progress',
            startDate: 'StartDate',
            duration: 'Duration',
            parentID: 'ParentID',
        };
        this.toolbar = ['PdfExport'];
        this.splitterSettings = {
            columnIndex: 1,
        };
        this.resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName',
        };
        this.labelSettings = {
            taskLabel: '${Progress}%',
        };
        this.resources = editingResources;
        this.projectStartDate = new Date('03/24/2019');
        this.projectEndDate = new Date('04/30/2019');
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            let exportProperties: PdfExportProperties = {
                fileName: 'new.pdf',
            };
            this.ganttChart!.pdfExport(exportProperties);
        }
    }

    public customFunction(data: any): string {
        var container = document.createElement('div');
        if (data.ganttProperties.resourceNames) {
            var resources = data.Resources.split(',');
            for (var i = 0; i < resources.length; i++) {
                var subContainer = document.createElement('div');
                var img = document.createElement('img');
                var span = document.createElement('span');
                span.className = 'labelClass';
                span.innerHTML = resources[i];
                img.src = 'https://ej2.syncfusion.com/angular/demos/assets/gantt/images/' +
                    resources[i] + '.png';
                img.height = 30;
                img.width = 30;
                subContainer.append(img);
                subContainer.append(span);
                container.append(subContainer);
            }
        }
        return container.innerHTML;
    }

    public pdfQueryTaskbarInfo(args: PdfQueryTaskbarInfoEventArgs): void {
        const data = args.data;
        const ganttProps = data?.ganttProperties;
        const taskData = (data as any)?.taskData;
        const labelSettings = args.labelSettings;

        if (labelSettings?.leftLabel && ganttProps?.taskName !== undefined && ganttProps?.progress !== undefined) {
            labelSettings.leftLabel.value = `${ganttProps.taskName} [${ganttProps.progress}]`;
        }

        if (labelSettings?.rightLabel && ganttProps?.resourceNames) {
            labelSettings.rightLabel.value = ganttProps.resourceNames;
            const imageBase64 = taskData?.resourcesImage;
            if (imageBase64) {
                labelSettings.rightLabel.image = [{
                    base64: imageBase64,
                    width: 20,
                    height: 20
                }];
            }
        }
    }
}