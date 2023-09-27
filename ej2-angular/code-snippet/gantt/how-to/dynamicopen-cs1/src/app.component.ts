


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { editingData , editingResources } from './data';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='editDialog' (click)='edit()'>Edit Dialog</button>
       <br><br><br>
       <button ejs-button id='addDialog' (click)='add()'>Add Dialog</button>
       <br><br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"  [editDialogFields]="editDialogFields" [editSettings]="editSettings" [resourceNameMapping]= "resourceNameMapping" [resourceIDMapping]="resourceIdMapping" [resources]= "resources"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public editDialogFields?: object[];
    public resourceNameMapping?: string;
    public resourceIdMapping?: string;
    public resources?: object[];
    public labelSettings?: object;
    public editSettings?: EditSettingsModel;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
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
                child: 'subtasks',
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
                allowEditing: true,
                allowTaskbarEditing: true
        };
    }
    edit(): void {
        this.ganttObj.editModule.dialogModule.openEditDialog(this.ganttObj.selectedRowIndex);
        };
        add(): void {
        this.ganttObj.editModule.dialogModule.openAddDialog();
        };
}



