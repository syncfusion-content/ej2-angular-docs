import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [isRowPinned]="isRowPinned">
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

    ngOnInit(): void {
        this.data = data.slice(0, 7);
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}
