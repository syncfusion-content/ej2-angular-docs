import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, NgIterable, OnInit, } from '@angular/core';
import { sampleData } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-treegrid';
@Component({
    imports: [TreeGridModule, CommonModule],
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks'>
                    <e-columns>
                         <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText"></e-column> 
                     </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public columns?: NgIterable<ColumnModel> | null | undefined;

    ngOnInit(): void {
        this.data = sampleData;
        this.columns = [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
        ];
    }
}