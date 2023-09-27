

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingData} from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttContextmenu" height="430px" [dataSource]="editingData" [taskFields]="taskSettings" [enableContextMenu]="true" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    // Data for Gantt
    public editingData?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public ngOnInit(): void {
        this.editingData = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
    }
}



