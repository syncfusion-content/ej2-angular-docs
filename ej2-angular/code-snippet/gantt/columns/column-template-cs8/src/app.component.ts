
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation,  OnInit} from '@angular/core';
import { GanttData } from './data';

@Component({
    imports: [ GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
            <e-columns>
                <e-column field='TaskID' headerText='TaskID'  width=80></e-column>
                <e-column field='TaskName' headerText='TaskName' width=290 ></e-column>
                <e-column field='Progress' headerText='Progress' width=120 >
                <ng-template #template let-data>
                        {{ formatProgress(data.Progress) }}
                </ng-template>
                </e-column>
                <e-column field='Duration' headerText='Duration' width=90></e-column>
            </e-columns>  
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
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

    public formatProgress(value: number): string {
        return value.toFixed(3) + '% ';
    }
}
