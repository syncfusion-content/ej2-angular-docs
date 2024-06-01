import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridModule],
    standalone: true,
    selector: 'app-container',
    template: `<div style="height:350px;width:600px">
                <ejs-treegrid [dataSource]='data' height='100%' width='100%' [treeColumnIndex]='1'  childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=250></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>
                </div>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



