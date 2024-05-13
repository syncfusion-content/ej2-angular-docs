
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { diacritics } from './datasource';
import { ToolbarItems, SearchSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { SearchEventArgs } from '@syncfusion/ej2-angular-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import {SwitchModule} from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [
    TreeGridAllModule, SwitchModule
    ],
    providers: [FilterService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<div>
                <label style="padding: 10px 10px">Enable or disable ignoreAccent property</label>
                <ejs-switch id="switch" [checked]=true (change)="onSwitchChange($event)"></ejs-switch>
               </div>
                <ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [toolbar]='toolbarOptions' childMapping='Children'>
                    <e-columns>
                        <e-column field='EmpID' headerText='ID' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Name' textAlign='Left' width=180></e-column>
                        <e-column field='Designation' headerText='Designation' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    
    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = diacritics;
        this.toolbarOptions = ['Search'];
    }
    onSwitchChange(args: any) {
        if (args.checked) {
            ((this.treegrid as TreeGridComponent).grid.searchSettings as any).ignoreAccent = true;
        } else {
           ((this.treegrid as TreeGridComponent).grid.searchSettings as any).ignoreAccent = false;
        }
    }
   }



