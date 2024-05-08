import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {ClickEventArgs} from '@syncfusion/ej2-inputs'
import { ToolbarItems, PageSettingsModel, GridComponent, Column } from '@syncfusion/ej2-angular-grids';


@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' (toolbarClick)='toolbarClick($event)' (printComplete)='printComplete()'
                [allowPaging]='true' [pageSettings]='pageOptions' [toolbar]='toolbarOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]= 'false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public pageOptions?: PageSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;
    toolbarClick(args:ClickEventArgs) {
        if(args.item.id== 'Grid_print'){
            for (const columns of (this.grid as GridComponent).columns) {
                if ((columns as Column).field === 'CustomerID') {
                    (columns as Column).visible = true;
                } else if ((columns as Column).field === 'ShipCity') {
                    (columns as Column).visible = false;
                }
            }
        }
    }

    printComplete() {
        for (const columns of (this.grid as GridComponent).columns) {
            if ((columns as Column).field === 'CustomerID') {
                (columns as Column).visible = false;
            } else if ((columns as Column).field === 'ShipCity') {
                (columns as Column).visible = true;
            }
        }
    }

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
        this.pageOptions = { pageSize: 6 };
    }
}

