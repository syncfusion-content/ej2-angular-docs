import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, EditService, EditSettingsModel } from '@syncfusion/ej2-angular-gantt'
import { editingData } from './data';

@Component({
    imports: [GanttModule],
    providers: [EditService],
    standalone: true,
    selector: 'app-root',
    template: `
      <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"  [columns]="columns" [editSettings]="editSettings" [tooltipSettings]="tooltipSettings">
        <ng-template #tooltipSettingsEditing let-data>
            <div> <ng-container>Duration : {{data.duration}}</ng-container> </div>
        </ng-template>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public tooltipSettings?: object;
    public editSettings?: EditSettingsModel;
    public columns?: object[];

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            baselineStartDate: "BaselineStartDate",
            baselineEndDate: "BaselineEndDate",
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.editSettings = {
            allowEditing: true,
            allowTaskbarEditing: true
        },
        this.tooltipSettings = {
            showTooltip: true
        };

    }
}

