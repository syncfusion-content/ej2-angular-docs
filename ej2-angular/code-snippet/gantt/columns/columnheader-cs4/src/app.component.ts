
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<div>
            <button ejs-button id="small" cssClass="e-small" 
            (click)="changeHeaderHeight($event)">
            Change height 20px</button>
            <button ejs-button id="medium" cssClass="e-small" 
            (click)="changeHeaderHeight($event)">
            Default height 42px</button>
            <button ejs-button  id="big" cssClass="e-small" 
            (click)="changeHeaderHeight($event)">
            Change height 60px</button>
        </div>
        <div class="control-section" style="padding-top:20px">
            <ejs-gantt #gantt  [dataSource]="data" height='430' [treeColumnIndex]='1'
            [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings">                
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID'  width=100></e-column>
                    <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
                    <e-column field='Duration' headerText='Duration' width=90></e-column>
                    <e-column field='Progress' headerText='Progress' width=120 ></e-column>
                </e-columns> 
            </ejs-gantt>
        </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
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
    changeHeaderHeight(event: MouseEvent): void {
        const heightMap: { [key: string]: string } = {
            small: '20px',
            medium: '42px',
            big: '60px'
        };
        const headerCells = (this.gantt as GanttComponent).treeGrid.getHeaderContent().querySelectorAll('.e-headercell');
        headerCells.forEach((headerCell: Element) => {
            (headerCell as HTMLElement).style.height = (heightMap)[
                (event.target as HTMLButtonElement).id
            ];
        });

    }
}
