
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule, ColorPickerModule
    ],
providers: [SelectionService],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
            <e-columns>
                <e-column field='TaskID' headerText='Task ID'  width=90></e-column>
                <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
                <e-column field='Change' headerText='Change color' width='120' textAlign='Center'>
                    <ng-template #template let-data>
                        <div class="colorpicker">
                            <input ejs-colorpicker #colorPicker id="color-picker" type="color" [mode]="modeSettings" (change)="change($event)"/>
                        </div>
                    </ng-template>
                </e-column>
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
    public modeSettings = 'Palette';
    change(args: ColorPickerEventArgs) {
        const selectedRows = (this.gantt as GanttComponent).treeGrid.getSelectedRows() as HTMLElement[];
        for (const row of selectedRows) {
            row.style.backgroundColor = args.value as string;
        }
        (this.gantt as GanttComponent).clearSelection();
    }
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
