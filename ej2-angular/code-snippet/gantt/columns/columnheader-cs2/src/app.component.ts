import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { projectNewData } from './data';
@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [splitterSettings] = "splitterSettings" [taskFields]="taskSettings">
            <e-columns>
                <e-column field='TaskName' width='290'>
                    <ng-template #headerTemplate>      
                        <div>
                            <img src="../assets/images/TaskName.png" width="20" height="20" class="e-image" />  Task Name
                        </div>
                    </ng-template>
                </e-column>
                <e-column field='startDate' headerText='Start Date' width='390' format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration' headerText='Duration' width='120' textAlign='Right'> 
                    <ng-template #headerTemplate>   
                        <div>
                            <img src="../assets/images/Duration.png" width="20" height="20" class="e-image" />  Duration
                        </div>
                    </ng-template>
                </e-column>
                <e-column field='progress' headerText='Progress' width='120' textAlign='Right'></e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}