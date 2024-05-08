
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule, ButtonModule, DropDownListAllModule, TextBoxModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt [height]='240'  [dataSource]="data" 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" (created)='setHeaderHeight($event)'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID'  width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Center' width=90  [customAttributes]='customAttributes'></e-column>
                <e-column field='Progress' headerText='Progress' width=120 ></e-column>
            </e-columns>    
       </ejs-gantt>`,
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public customAttributes?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.customAttributes = { class: 'orientationcss' };
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
    setHeaderHeight(args: any) {
        // Obtain the width of the headerText content.
        const textWidth = (document.querySelector('.orientationcss > div') as Element).scrollWidth;
        const headerCell: NodeList = document.querySelectorAll('.e-headercell');
        for (let i = 0; i < headerCell.length; i++) {
            // Assign the obtained textWidth as the height of the headerCell.
            (headerCell.item(i) as HTMLElement).style.height = textWidth + 500 + 'px';
        }
    }
}

