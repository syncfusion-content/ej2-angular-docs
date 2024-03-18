import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `
        <ejs-treegrid id='TreeGrid' #treegrid [dataSource]='data' height='315' [allowRowDragAndDrop]='true'
         childMapping='subtasks' (rowDrop)="rowDrop($event)" [treeColumnIndex]='1'>
            <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
    `
})
export class AppComponent implements OnInit {
    public data?: Object[];
     @ViewChild('treegrid')
    public treegridObj?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }
    public rowDrop(args: any) {
        //Here prevent the row drop action
          args.cancel = true;
      
    };
}