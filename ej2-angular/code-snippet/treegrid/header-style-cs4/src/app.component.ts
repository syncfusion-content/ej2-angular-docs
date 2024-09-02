import { NgModule, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { HeaderCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, } from '@syncfusion/ej2-treegrid';
@Component({
    imports: [TreeGridModule,],
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks'  (headerCellInfo)="onHeaderCellInfo($event)">
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' [allowSorting]="false" textAlign='Right' width=120></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' [allowFiltering]="false" textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                  </e-columns>
                </ejs-treegrid>`,
    styles: [`
        .e-treegrid .e-headercell.customcss {
              background-color: #a2d6f4;
              color:rgb(3, 2, 2);
              }`]
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
    public onHeaderCellInfo(args: HeaderCellInfoEventArgs) {
        if ((args.cell as any).column.field == 'startDate') {
            (args.node as Element).classList.add('customcss');
        }
    }
}



