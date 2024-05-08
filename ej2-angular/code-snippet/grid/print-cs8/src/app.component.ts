import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, PageSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';


@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (beforePrint)='beforePrint()'
                [allowPaging]='true' [pageSettings]='pageOptions' [toolbar]='toolbarOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public pageOptions?: PageSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
        this.pageOptions = { pageSize: 6 };
    }
    beforePrint() {
        var styleElement = document.createElement('style');
        styleElement.innerHTML = `
        .e-grid .e-headercell {
            background: #24a0ed !important;
        }
        .e-grid .e-row .e-rowcell {
            background: #cbecff !important;
        }
        .e-grid .e-altrow .e-rowcell{
            background: #e7d7f7 !important;
        }
        `;
        (document.querySelector('head') as Element).appendChild(styleElement);
    }
}

