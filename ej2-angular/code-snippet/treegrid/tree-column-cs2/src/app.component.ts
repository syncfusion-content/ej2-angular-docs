import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, Column } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [TreeGridModule],
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks' (queryCellInfo)=querycellinfo($event)>
                <e-columns>
                  <e-column field='taskID' headerText='Task ID' width=90></e-column>
                  <e-column field='taskName' headerText='Task Name' width=180></e-column>
                  <e-column field='startDate' headerText='Start Date' format='yMd' width=90></e-column>
                  <e-column field='duration' headerText='Duration' width=80></e-column>
                </e-columns>
              </ejs-treegrid>`,
    styles: [
        ` 
          .indents {
            text-indent: 20px !important;
          }
      `],
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }

    querycellinfo(args: any): void {
        if (
            !args.data.hasChildRecords &&
            args.column.index == (this.treegrid as TreeGridComponent).treeColumnIndex
        ) {
            args.cell.classList.add('indents');
        }
    }
}
