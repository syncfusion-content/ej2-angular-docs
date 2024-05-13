import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule,FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSearchBeginEventArgs, } from '@syncfusion/ej2-angular-grids';

@Component({
    encapsulation:ViewEncapsulation.None,
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='273' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field="approved"  headerText="Approved"  width="120"  displayAsCheckBox="true"></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styles:[
        `.e-treegrid .e-excelfilter .e-contextmenu-wrapper {
            display: none;
        }`]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
   
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Excel'};
        
    }
   
}


