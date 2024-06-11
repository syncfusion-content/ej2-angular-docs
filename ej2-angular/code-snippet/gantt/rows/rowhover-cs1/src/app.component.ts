
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { Component, ViewEncapsulation, OnInit, ViewChild, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { Tooltip } from '@syncfusion/ej2-popups';

@Component({
    imports: [
        GanttModule, ButtonModule
   ],
standalone: true,
    selector: 'app-root',
    template:
        `<div id='show' style="padding:0px 0px 20px 0px;" >
        </div>
        <p id="message">{{message}}</p>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" (dataBound)='dataBound()'>     
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public message: string = '';
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '50%'
        };
    }
    dataBound() {
        //Here bind mouse over event while hovering over the row
        ((this.gantt as GanttComponent).getRootElement() as HTMLElement).addEventListener(
            'mouseover',
            (mouseargs: MouseEvent) => {
                //Here button creation
                const buttonId = 'element_' + '1';
                const buttonElement = document.createElement('button');
                buttonElement.id = buttonId;
                buttonElement.textContent = 'Row details';
                let target: any;

                //Set tooltip target
                if (mouseargs && mouseargs.target != null) {
                    if ((mouseargs.target as any).classList.contains('e-rowcell') || (mouseargs.target as any).classList.contains('e-chart-row-cell')
                    ) {
                        target = mouseargs.target;
                    } else {
                        target = null;
                    }
                }
                //Tooltip creation
                const tooltip: Tooltip = new Tooltip(
                    {
                        content: buttonElement,
                        width: '100px',
                        height: '40px',
                        opensOn: 'Hover',
                    },
                    target
                );
                //Button click event
                buttonElement.addEventListener('click', () => {
                    let rowIndex;
                    if(target.closest('.e-row') !== null){
                        rowIndex = target.closest('.e-row').getAttribute('data-rowindex');
                    }else{
                        rowIndex = target.closest('.e-chart-row').getAttribute('data-rowindex');
                    }
                    // Handle button click here
                    const data: any = (this.gantt as GanttComponent).currentViewData[rowIndex].ganttProperties;
                    this.message = `Button clicked for Task ID: ${ data.taskId }`;
                });
            }
        );
    }
}