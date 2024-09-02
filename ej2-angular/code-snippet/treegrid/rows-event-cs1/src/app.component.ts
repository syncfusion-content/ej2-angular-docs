import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridModule,],
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='250' [enableHover]='false' childMapping='subtasks' (dataBound)="customizeRows()">
                  <e-columns>
                      <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                      <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent | undefined;

    ngOnInit(): void {
        this.data = sampleData;
    }
    public customizeRows() {
        (
            (this.treegrid as TreeGridComponent).getRowByIndex(2) as HTMLElement
        ).style.background = 'rgb(193, 228, 234)';
    }
}
