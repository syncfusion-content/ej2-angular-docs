
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, SortService, FilterService, ColumnMenuService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { projectNewData } from './data';

@Component({
    imports: [
         GanttModule
    ],
providers: [SortService, FilterService, ColumnMenuService],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [treeColumnIndex]='1' [columns]="columns"
         [allowFiltering] = 'true' [showColumnMenu] = 'true' [allowSorting] = 'true' [splitterSettings]="splitterSettings"
         [columnMenuItems]='columnMenuItems' (columnMenuClick)='columnMenuClick($event)'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=150 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=150></e-column>
            </e-columns>
         </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public columnMenuItems: object = [
        'SortAscending',
        'SortDescending',
        'Filter',
        {
            text: 'Sub Menu',
            items: [
                { text: 'Option 1', id: 'option1' },
                { text: 'Option 2', id: 'option2' },
                { text: 'Option 3', id: 'option3' },
                {
                    text: 'Nested Sub Menu',
                    items: [
                        { text: 'Nested Option 1', id: 'nestedoption1' },
                        { text: 'Nested Option 2', id: 'nestedoption2' },
                    ],
                },
            ],
        },
    ];
    public ngOnInit(): void {
        this.data = projectNewData;
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
    public columnMenuClick(args: any) {
        if (args.item.id === 'option1') {
          // custom function
        }
    }
}



