import { GanttAllModule, ActionBeginArgs} from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { constraintData } from './data';

@Component({
    imports: [ GanttAllModule ],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="450px" [dataSource]="data" [taskFields]="taskSettings"
      [editSettings]="editSettings" [toolbar]="toolbar" [columns]="columns" [treeColumnIndex]="1" [labelSettings]="labelSettings"
      [splitterSettings]="splitterSettings" [timelineSettings]="timelineSettings" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [eventMarkers]="eventMarkers" (actionBegin)="actionBegin($event)">

      <!-- Right Label Template to Show Constraint Text -->
      <ng-template #rightLabel let-data>
        <div style="margin-top: -7px;">
          {{ getConstraintText(data.ConstraintType) }}
        </div>
      </ng-template>
    </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('rightLabel', { static: true }) public rightLabelTemplate?: any;
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public editSettings?: object;
    public toolbar?: string[];
    public labelSettings?: object;
    public splitterSettings?: object;
    public timelineSettings?: object;
    public resources?: object[];
    public resourceFields?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public eventMarkers?: object[];
    public gridLines?: string;
    public highlightWeekends?: boolean;
    public allowSelection?: boolean;
    public height?: string;

    public ngOnInit(): void {
        this.data = constraintData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            constraintType: 'ConstraintType',
            constraintDate: 'ConstraintDate',
            dependency: 'Predecessor',
            parentID: 'parentID',
            notes: 'info',
            resourceInfo: 'resources'
        };
        this.columns = [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Job Name', width: '200', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'ConstraintType' },
            { field: 'ConstraintDate' },
            { field: 'EndDate' },
            { field: 'Predecessor' },
            { field: 'Progress' }
        ];
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
        this.splitterSettings = { columnIndex: 4 };
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: this.rightLabelTemplate
        }
        this.timelineSettings = {
            topTier: { unit: 'Week', format: 'MMM dd, y' },
            bottomTier: { unit: 'Day' }
        };
        this.projectStartDate = new Date('03/25/2025');
        this.projectEndDate = new Date('09/01/2025');
        this.eventMarkers = [
            { day: new Date('03/25/2025'), label: 'Project StartDate' },
            { day: new Date('08/31/2025'), label: 'Project EndDate' }
        ];
        this.gridLines = 'Both';
        this.highlightWeekends = true;
        this.allowSelection = true;
        this.height = '450px';
    }

    public actionBegin(args: ActionBeginArgs): void {
        if (args.requestType === 'validateTaskViolation') {
            (args as any).validateMode.respectMustStartOn = true
        }
    }
    
    public getConstraintText(value: number): string {
        const map: { [key: number]: string } = {
            0: 'As Soon As Possible',
            1: 'As Late As Possible',
            2: 'Must Start On',
            3: 'Must Finish On',
            4: 'Start No Earlier Than',
            5: 'Start No Later Than',
            6: 'Finish No Earlier Than',
            7: 'Finish No Later Than'
        };
        return map[value];
    }
}