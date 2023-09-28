


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='changebyposition' (click)='changep()'>Change By Position</button>
       <br><br>
       <button ejs-button id='changebyindex' (click)='changei()'>Change By Index</button>
       <br>
       <div style="padding-top: 7px; display: inline-block">Splitter View<ejs-dropdownlist (change)='onChange($event)' [dataSource]='dropData' value='Default' [fields]='fields'></ejs-dropdownlist></div>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public dropData?: Object[];
    public fields?: Object;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.dropData =  [
            { id: 'Default', mode: 'Default' },
            { id: 'Grid', mode: 'Grid' },
            { id: 'Chart', mode: 'Chart' },
          ];
        this.fields = { text: 'mode', value: 'id' };
    }
    changep(): void {
        this.ganttObj.setSplitterPosition('50%', 'position');
        };
        changei(): void {
        this.ganttObj.setSplitterPosition(1, 'columnIndex');
        };
        onChange(e: ChangeEventArgs): any{
        let viewType: any = <string>e.value;
        this.ganttObj.setSplitterPosition(viewType, 'view');
        };
}



