import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';


@Component({
    imports: [TreeGridModule ],
    standalone: true,
    selector: 'app-container',
    template: ` <ejs-treegrid #treegrid [dataSource]='data' height='260' width='100%' [treeColumnIndex]='1'  childMapping='subtasks' (dataBound)='dataBound()'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData.slice(0, 1);
    }

    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
   
    dataBound(): void {
        (this.treeGridObj as TreeGridComponent).grid.hideScroll();
    }
}



