import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, PageSettingsModel, ContextMenuService  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, ContextMenuService],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [isRowPinned]="isRowPinned" height='200' [allowPaging]="true" [pageSettings]="pageSettings" [contextMenuItems]="contextMenuItems">
                    <e-columns>                  
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems: string[] = ['PinRow', 'UnpinRow'];
    public pageSettings: PageSettingsModel = { pageSize: 15 };

    ngOnInit(): void {
        this.data = data;
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}
