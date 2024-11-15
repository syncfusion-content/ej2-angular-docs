import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { ColumnMenuService, ResizeService } from '@syncfusion/ej2-angular-treegrid';

@Component({
imports: [ TreeGridModule,],
providers: [PageService, SortService, FilterService, ColumnMenuService, ResizeService],
standalone: true,
    selector: 'app-container',
    template: `<div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
          
                <ejs-treegrid #treegrid height='250' [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' showColumnMenu="true" (columnMenuOpen)="columnMenuOpen()" (columnMenuClick)="columnMenuClick()">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=100></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=240></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=130></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=150></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public message?: string;
    ngOnInit(): void {
        this.data = sampleData;
    }
    columnMenuOpen() {
        this.message = 'columnMenuOpen event is Triggered';
    }
    columnMenuClick() {
        this.message = 'columnMenuClick event is Triggered';
    }
}
