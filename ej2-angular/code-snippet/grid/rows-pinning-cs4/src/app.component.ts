import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageSettingsModel, FilterSettingsModel  } from '@syncfusion/ej2-angular-grids';

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

export interface RowData {
  TaskID: number; 
  Title: string;  
  Status: string;
  Priority: string;
  Assignee?: string;   
}

@Component({
imports: [
        
        GridModule
    ],

providers: [],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' height="260" [allowPaging]="true" [pageSettings]="pageSettings" [allowSorting]="true" [allowFiltering]="true" [filterSettings]="filterSettings" [isRowPinned]="isRowPinned">
                    <e-columns>
                        <e-column field="TaskID" headerText="ID" width="80" isPrimaryKey="true" textAlign="Right"></e-column>        
                        <e-column field="Title" headerText="Title" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings: PageSettingsModel;
    public filterSettings: FilterSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings={ pageSize: 10 };
        this.filterSettings={ type: 'Menu' };
    }
    public isRowPinned=( data: RowData)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}

