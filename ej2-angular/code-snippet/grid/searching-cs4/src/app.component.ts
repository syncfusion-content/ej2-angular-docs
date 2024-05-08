import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [SearchService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='260' [searchSettings]='searchSettings' [toolbar]='toolbar' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public searchSettings?: SearchSettingsModel;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Search'];
        this.searchSettings = {fields: ['CustomerID', 'Freight', 'ShipCity']};
    }
}



