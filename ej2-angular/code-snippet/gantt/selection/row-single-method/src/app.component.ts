import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [GanttModule, TextBoxModule, ButtonModule],
    providers: [SelectionService],
    template: `  
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
            <label style="font-weight: bold;">Enter the row index:</label>
            <ejs-textbox #textbox width="100"></ejs-textbox>
            <button ejs-button (click)="click()">Select Row</button>
        </div>
        <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings">
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
    @ViewChild('textbox', { static: false }) public textbox?: TextBoxComponent;
    public data: object[] = [];
    public taskSettings: object = {};
    public selectionSettings: SelectionSettingsModel = {};

    ngOnInit(): void {
        this.data = [
            { TaskID: 1, TaskName: 'Initiation Phase', StartDate: new Date('2023-04-01'), Duration: 5, Progress: 40 },
            { TaskID: 2, TaskName: 'Site Survey', StartDate: new Date('2023-04-06'), Duration: 4, ParentID: 1, Progress: 60 },
            { TaskID: 3, TaskName: 'Soil Testing', StartDate: new Date('2023-04-10'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Approval Process', StartDate: new Date('2023-04-14'), Duration: 3, ParentID: 1, Progress: 30 },
            { TaskID: 5, TaskName: 'Estimation Phase', StartDate: new Date('2023-04-18'), Duration: 6, Progress: 20 },
            { TaskID: 6, TaskName: 'Floor Plan Design', StartDate: new Date('2023-04-24'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'Material Listing', StartDate: new Date('2023-04-27'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Final Approval', StartDate: new Date('2023-04-30'), Duration: 2, ParentID: 5, Progress: 50 }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        this.selectionSettings = {
            mode: 'Row',
            type: 'Single'
        };
    }

    public click(): void {
        const value = (this.textbox as TextBoxComponent).element.value as string;
        const rowIndex = parseInt(value, 10);
        if (!isNaN(rowIndex)) {
            this.ganttInstance.selectRow(rowIndex);
        }
    }
}
