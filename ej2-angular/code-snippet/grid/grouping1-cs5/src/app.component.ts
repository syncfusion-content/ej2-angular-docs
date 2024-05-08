import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='OrderDate' headerText='Order Date' format='yMMM' [enableGroupByFormat]='true' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' format='C2' [enableGroupByFormat]='true' width=80></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['OrderDate', 'Freight'] };
    }
}