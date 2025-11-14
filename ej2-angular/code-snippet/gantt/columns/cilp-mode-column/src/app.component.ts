import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [ GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `
        <ejs-gantt #gantt height="430px"  [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">    
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120 ></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' clipMode='EllipsisWithTooltip' width=70></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=60 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' clipMode='Ellipsis' width=35 ></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=190></e-column>
        </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt') public gantt?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;

    public ngOnInit(): void {
        this.data = GanttData;
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