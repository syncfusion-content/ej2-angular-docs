import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation, OnInit, NgModule } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingResources } from './data';

@Component({
    imports: [
         GanttModule, NgIf
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [allowResizing] = 'true' rowHeight='50' [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources"
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
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public resources?: object[];
    public resourceFields?: object;
    public style: any;
    public resourceStyleColor: any;
    public resourceContentStyle: any;
    queryTaskbarInfo(args: any){
        if(args.data.resources == 'Martin Tamer'){
            args.taskbarBgColor = '#DFECFF';
            args.progressBarBgColor = '#006AA6'
        }else if(args.data.resources == 'Rose Fuller'){
            args.taskbarBgColor = '#E4E4E7';
            args.progressBarBgColor = '#766B7C'
        }
        else if(args.data.resources == 'Margaret Buchanan'){
            args.taskbarBgColor = '#DFFFE2';
            args.progressBarBgColor = '#00A653'
        }
        else if(args.data.resources == 'Tamer Vinet'){
            args.taskbarBgColor = '#FFEBE9';
            args.progressBarBgColor = '#FF3740'
        }
    }
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4,
                        Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
                    },
                    {
                        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                        resources: [2], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                            'From an engineer or company specializing in soil testing'
                    },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '3', Progress: 30, resources: [3], },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                        Duration: 3, Predecessor: '4', Progress: 30, resources: [4],
                        info: 'Develop floor plans and obtain a materials list for estimations'
                    },
                    {
                        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                        Duration: 3, Predecessor: '6', resources: [1], info: ''
                    },
                    {
                        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                        Duration: 4, Predecessor: '7',resources: [2], info: ''
                    }
                ]
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
        this.splitterSettings = {
            columnIndex: 2
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
        this.resources = editingResources;
    }
    Resources(resource: any){
        switch(resource){
            case 'Martin Tamer':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 81px; height: 24px; border-radius: 24px; background: #DFECFF " ;
                break;
            case 'Rose Fuller':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 71px; height: 24px; border-radius: 24px; background: #E4E4E7 " ;
                break;
            case 'Margaret Buchanan':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 123px; height: 24px; border-radius: 24px; background: #DFFFE2 " ;
                break;
            case 'Tamer Vinet':
                this.style = "display: flex; padding: 1.5px 12px; gap: 10px; width: 75px; height: 24px; border-radius: 24px; background: #FFEBE9 " ;
                break;
        }
        return this.style;

    }
    ResourcesStyles(resource: any){
        switch(resource){
            case 'Martin Tamer':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #006AA6" ;
                break;
            case 'Rose Fuller':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #766B7C" ;
                break;
            case 'Margaret Buchanan':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #00A653" ;
                break;
            case 'Tamer Vinet':
                this.style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 22px; text-align: center; color: #FF3740" ;
                break;
        }
        return this.style;
    }
}
