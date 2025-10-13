import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DropDownListAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns'
import { GanttModule,GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { editingData } from './data';

@Component({
    imports: [ GanttModule, DropDownListAllModule, ButtonModule ],
    standalone: true,
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

export class AppComponent implements OnInit{
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public dropData?: Object[];
    public fields?: Object;
    
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
        this.dropData = [
            { id: 'Default', mode: 'Default' },
            { id: 'Grid', mode: 'Grid' },
            { id: 'Chart', mode: 'Chart' },
        ];
        this.fields = { text: 'mode', value: 'id' };
    }

    public changep(): void {
        this.ganttInstance.setSplitterPosition('50%', 'position');
    };

    public changei(): void {
        this.ganttInstance.setSplitterPosition(1, 'columnIndex');
    };

    public onChange(e: ChangeEventArgs): any {
        let viewType: any = <string>e.value;
        this.ganttInstance.setSplitterPosition(viewType, 'view');
    };
}



