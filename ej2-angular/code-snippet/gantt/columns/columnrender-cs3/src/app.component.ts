import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">   
        <e-columns>
            <e-column field='TaskID' headerText='Task ID'  width=100></e-column>
            <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
            <e-column field='Name' headerText='Full Name' textAlign='Right' [valueAccessor]='getConcatenatedNames' width=250></e-column>
            <e-column field='Duration' headerText='Duration' width=90></e-column>
            <e-column field='Progress' headerText='Progress' width=120 ></e-column>
        </e-columns>    
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public getConcatenatedNames = (field: string, data: object) => {
        return (data as any)[field as string].map((s: { lastName: string, firstName: string }) => {
            return s.lastName || s.firstName;
        }).join(' ',);
    }
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}