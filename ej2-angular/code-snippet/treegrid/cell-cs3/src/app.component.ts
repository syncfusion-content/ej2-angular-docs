
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1' [enableHover]='false' [allowSelection]='false' (queryCellInfo)='customizeCell($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText="Task Name Column for Tree Grid"  textAlign='Left' width=90></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
   
    ngOnInit(): void {
        this.data = sampleData;
    }
    customizeCell(args: any) {
        if (args.column.field === 'progress' && +args.cell.innerHTML > 90 && +args.cell.innerHTML <= 100){
            args.cell.setAttribute('style', 'background-color:#336c12;color:white;');
        } else if (+args.cell.innerHTML > 20 && args.column.field === 'progress') {
            args.cell.setAttribute('style', 'background-color:#7b2b1d;color:white;');
        }
      }
}



