import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<ejs-treegrid [dataSource]='data' height='300' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [customAttributes]="{class: 'e-customcss'}" textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' [customAttributes]="{class: 'e-customcss'}" textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styles: [`
    .e-customcss {
        background: #d7f0f4;
    }
    `],
   
})
export class AppComponent implements OnInit {

    public data?: Object[];
    ngOnInit(): void {
        this.data = sampleData;
    }
}