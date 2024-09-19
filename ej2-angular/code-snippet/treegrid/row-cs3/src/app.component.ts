import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { RowDDService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridModule,],
    providers: [RowDDService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid id='TreeGrid' [dataSource]='data' height='250' [allowRowDragAndDrop]='true' [treeColumnIndex]='1' childMapping='subtasks' >
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

    ngOnInit(): void {
        this.data = sampleData;
    }
}