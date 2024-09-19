import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule, ReorderService } from '@syncfusion/ej2-angular-treegrid'
import { ButtonModule, } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule, ButtonModule],
    providers: [ReorderService],
    standalone: true,
    selector: 'app-container',
    template: ` <button ejs-button id='reordersingle' cssClass="e-info" (click)='reorderSingleColumnUsingFieldName()'>Reorder single Column</button>
                <button ejs-button id='reordermultiple' cssClass="e-info" (click)='reorderMultipleColumnsUsingFieldName()'>Reorder Multiple Columns</button>
   
                <ejs-treegrid #treegrid [dataSource]='data' height='285' [allowReordering]='true' [treeColumnIndex] ='1' childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('treegrid') public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
    reorderSingleColumnUsingFieldName(): void {
        (this.treegridObj as TreeGridComponent).reorderColumns("duration", "taskID");
    }
    reorderMultipleColumnsUsingFieldName(): void {
        (this.treegridObj as TreeGridComponent).reorderColumns(['startDate', 'duration', 'progress'], 'taskID');
    }
}