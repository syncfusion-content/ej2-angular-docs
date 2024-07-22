

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-container',
    template: ` <button ejs-button (click)="refreshHeader()">Refresh Header</button>
                <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'>
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=120></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                   </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
    public refreshHeader(): void {
        const column = (this.treegrid as TreeGridComponent).grid.getColumnByIndex(1);
        column.headerText = 'New Header Text'; // update the header text of the column object
        (this.treegrid as TreeGridComponent).refreshHeader(); // refresh the grid header
      }
}



