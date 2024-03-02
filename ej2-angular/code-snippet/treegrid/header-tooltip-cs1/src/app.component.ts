

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TooltipComponent, TooltipEventArgs } from "@syncfusion/ej2-angular-popups";

@Component({
    selector: 'app-container',
    template: `  <ejs-tooltip #tooltip (beforeRender)="beforeRender($event)" target=".e-headertext">
                    <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'  [allowFiltering]="true" [allowSorting]="true">
                      <e-columns>
                          <e-column field='taskID' headerText='Task ID' [allowSorting]="false" textAlign='Right' width=120></e-column>
                          <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                          <e-column field='startDate' headerText='Start Date' [allowFiltering]="false" textAlign='Right' format='yMd' width=120></e-column>
                          <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                          <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                      </e-columns>
                    </ejs-treegrid> 
                </ejs-tooltip>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('tooltip')
    public toolTip?: TooltipComponent;
    public columnDescriptions: { [key: string]: string } = {
      "Task ID": "A unique number assigned to each task.",
      "Task Name": "The process of the task name.",
      "Duration": "The duration of the task.",
      "Progress": "The progress state of the task.",
      "Start Date": "The date when the order was placed.",
    };
    ngOnInit(): void {
        this.data = sampleData;
    }
    beforeRender(args: TooltipEventArgs) {
        const description = this.columnDescriptions[args.target.innerText];
        if (description) {
          (this.toolTip as TooltipComponent).content = args.target.innerText + ": " + description;
        }
      }
}



