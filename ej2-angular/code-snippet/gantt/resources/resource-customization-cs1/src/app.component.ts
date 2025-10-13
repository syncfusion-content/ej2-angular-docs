import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { GanttModule, IGanttData, IQueryTaskbarInfoEventArgs, } from '@syncfusion/ej2-angular-gantt';
import { editingResources, GanttData } from './data';

@Component({
    imports: [GanttModule, NgIf],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data"  [taskFields]="taskSettings" [allowResizing] = 'true' rowHeight='50' [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources"
        (queryTaskbarInfo) = "queryTaskbarInfo($event)">
            <e-columns>
                <e-column field='TaskName' headerText= 'Task Name' width= 270></e-column>
                <e-column field= 'resources' headerText= 'Resources' width= 175>
                    <ng-template #template let-data>
                        <div *ngIf="data.ganttProperties.resourceNames">
                            <div [style]= "Resources(data.ganttProperties.resourceNames)">
                                <div [style]= "ResourcesStyles(data.ganttProperties.resourceNames)"> {{data.ganttProperties.resourceNames}} </div>
                            </div>
                        </div>
                    </ng-template>
                </e-column>
                <e-column field= 'StartDate' headerText='Start Date' width= 150 ></e-column>
                <e-column field= 'Duration' headerText='Duration' width= 150 ></e-column>
                <e-column field= 'Progress' headerText= 'Progress' width= 150 ></e-column>
            </e-columns>
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public resources?: object[];
    public resourceFields?: object;
    public style: any;
    public resourceStyleColor: any;
    public resourceContentStyle: any;

    public ngOnInit(): void {
        this.data = GanttData;
        this.resources = editingResources;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.splitterSettings = {
            columnIndex: 2
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
    }


    public getResourceStyle(resource: { resourceId: number; resourceName: string }): string {
        switch (resource.resourceName) {
            case 'Martin Tamer':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 81px; height: 24px; border-radius: 24px; background: #DFECFF ";
                break;
            case 'Rose Fuller':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 71px; height: 24px; border-radius: 24px; background: #E4E4E7 ";
                break;
            case 'Margaret Buchanan':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 123px; height: 24px; border-radius: 24px; background: #DFFFE2 ";
                break;
            case 'Tamer Vinet':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 75px; height: 24px; border-radius: 24px; background: #FFEBE9 ";
                break;
        }
        return this.style;

    }

    public ResourcesStyles(resource: { resourceId: number; resourceName: string }): string {
        switch (resource.resourceName) {
            case 'Martin Tamer':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #006AA6";
                break;
            case 'Rose Fuller':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #766B7C";
                break;
            case 'Margaret Buchanan':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #00A653";
                break;
            case 'Tamer Vinet':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #FF3740";
                break;
        }
        return this.style;
    }

    public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
        const data = args.data as CustomGanttData;
        if (data.resources?.includes('Martin Tamer')) {
            args.taskbarBgColor = '#DFECFF';
            args.progressBarBgColor = '#006AA6';
        } else if (data.resources?.includes('Rose Fuller')) {
            args.taskbarBgColor = '#E4E4E7';
            args.progressBarBgColor = '#766B7C';
        } else if (data.resources?.includes('Margaret Buchanan')) {
            args.taskbarBgColor = '#DFFFE2';
            args.progressBarBgColor = '#00A653';
        } else if (data.resources?.includes('Tamer Vinet')) {
            args.taskbarBgColor = '#FFEBE9';
            args.progressBarBgColor = '#FF3740';
        }
    }

}

export interface CustomGanttData extends IGanttData {
    resources?: string[];
}
