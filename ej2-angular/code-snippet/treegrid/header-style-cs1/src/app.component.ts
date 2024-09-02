import { NgModule, ViewChild, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, } from '@angular/core';
import { sampleData } from './datasource';
@Component({
    imports: [TreeGridModule,],
    encapsulation:ViewEncapsulation.None,
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks'>
                 <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=120></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                 </e-columns>
               </ejs-treegrid>`,
    styles:[`  .e-treegrid .e-headercell {
        background-color: #a2d6f4;
        color:rgb(3, 2, 2);
      }
      `]
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



