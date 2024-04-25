
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { TextWrapSettingsModel, WrapMode } from '@syncfusion/ej2-angular-grids';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './data';


@Component({
    selector: 'app-root',
    template:
        `<div style="display: flex">
            <label style="padding: 30px 17px 0 0" >Autowrap for header column :</label>
            <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="100" 
            [dataSource]=" dropdownData" (change)="valueChange($event)">
            </ejs-dropdownlist>
        </div>
        <div class="control-section" style="padding-top:20px">
            <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
            [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" (load)="load()"> 
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                    <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=250></e-column>
                    <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                    <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
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
    public dropdownData: Object[] = [
        { text: 'Header', value: 'Header' },
        { text: 'Both', value: 'Both' },
    ];
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
    load() {
        (this.gantt as GanttComponent).treeGrid.textWrapSettings.wrapMode = 'Header';
        (this.gantt as GanttComponent).treeGrid.allowTextWrap = true
    }
    valueChange(args: ChangeEventArgs): void {
        (this.gantt as GanttComponent).treeGrid.textWrapSettings.wrapMode = (args.value as WrapMode);
    }
}
