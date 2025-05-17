import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { CriticalPathService, ToolbarService, EditService } from '@syncfusion/ej2-angular-gantt'



import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
imports: [
         GanttModule
    ],

providers: [ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<button ej-button id='restore' (click)='clickHandler()'>Restore</button>
               <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" enablePersistence='true' [splitterSettings] = "splitterSettings">
                 <e-columns>
               <e-column field='TaskID' width="90" textAlign='Right'></e-column>
                <e-column field='TaskName' width='290'>
                    <ng-template #headerTemplate>      
                        <div width="20" height="20" >
                             Tasks Name
                        </div>
                    </ng-template>
                </e-column>
                <e-column field='startDate'  width='390' format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration'  width='120' textAlign='Right'> 
                </e-column>
                <e-column field='progress' width='120' textAlign='Right'></e-column>
            </e-columns>
               </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    public data?: object[];
    public taskSettings?: object;
    public ganttChart?: GanttComponent;
    public splitterSettings?: object;
    public columns?: object[];
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
    }

    clickHandler() {
        let gantt = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
        var savedProperties = JSON.parse(gantt.getPersistData());
        var gridColumnsState = Object.assign([], gantt.ganttColumns);
        savedProperties.columns.forEach(function (col: { field: any; headerText: string; template: any; headerTemplate: any; }) {
            var headerText = gridColumnsState.find(function (colColumnsState: { field: any; }) { return colColumnsState.field === col.field; })['headerText'];
            var colTemplate = gridColumnsState.find(function (colColumnsState: { field: any; }) { return colColumnsState.field === col.field; })['template'];
            var headerTemplate = gridColumnsState.find(function (colColumnsState: { field: any; }) { return colColumnsState.field === col.field; })['headerTemplate'];
            col.headerText = 'Text Changed';
            col.template = colTemplate;
            col.headerTemplate = headerTemplate;
        });
        console.log(savedProperties);
        gantt.treeGrid.setProperties(savedProperties);
   }
}



