import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, EditSettingsModel , EditService, SelectionService} from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { editingData, editingResources } from './data';

@Component({
    imports: [GanttModule, ButtonModule],
    providers: [EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='editDialog' (click)='edit()'>Edit Dialog</button>
       <br><br><br>
       <button ejs-button id='addDialog' (click)='add()'>Add Dialog</button>
       <br><br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"  [editDialogFields]="editDialogFields" [editSettings]="editSettings" [resourceNameMapping]= "resourceNameMapping" [resourceIDMapping]="resourceIdMapping" [resources]= "resources"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editDialogFields?: object[];
    public resourceNameMapping?: string;
    public resourceIdMapping?: string;
    public resources?: object[];
    public labelSettings?: object;
    public editSettings?: EditSettingsModel;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID',
            notes: 'info',
            resourceInfo: 'resources'
        };
        this.editDialogFields = [
            { type: 'General', headerText: 'General' },
            { type: 'Dependency' },
            { type: 'Resources' },
            { type: 'Notes' }
        ];
        this.resourceNameMapping = 'resourceName';
        this.resourceIdMapping = 'resourceId';
        this.resources = editingResources;
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowTaskbarEditing: true
        };
    }

    public edit(): void {
        this.ganttInstance.editModule.dialogModule.openEditDialog(this.ganttInstance.selectedRowIndex);
    };

    public add(): void {
        this.ganttInstance.editModule.dialogModule.openAddDialog();
    };
}
