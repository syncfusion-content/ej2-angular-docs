import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { RowDDService, ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridModule,],
    providers: [RowDDService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'  [treeColumnIndex]='1' height='270' childMapping='subtasks'  [selectedRowIndex]='2' [toolbar]='toolbarOptions' >
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                 </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public toolbarOptions?: string[];

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Indent', 'Outdent'];
    }
}
