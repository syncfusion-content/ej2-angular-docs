import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-angular-grids';  

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='270px' [editSettings]='editSettings' [toolbar]='toolbar'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 isPrimaryKey='true'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {
    public data?: object[];
    public toolbar?: ToolbarItems[];
    public editSettings?: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true }; 
    }
}



