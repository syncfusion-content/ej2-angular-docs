import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, PrintEventArgs, ToolbarItems, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='grid' [dataSource]='data' [allowPaging]='true'
               [pageSettings]='pageOptions' [selectionSettings]="selectionSettings" (beforePrint)='beforePrint($event)' [toolbar]='toolbarOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    @ViewChild('grid', { static: true })
    public grid?: GridComponent;
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public pageOptions?: PageSettingsModel;
    public selectionSettings?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
        this.pageOptions = { pageSize: 6 };
        this.selectionSettings = { type: 'Multiple' }
    }
    beforePrint(e: PrintEventArgs): void {
        var rows = (this.grid as GridComponent).getSelectedRows();
        if (rows.length) {
            (e.element as CustomElement).ej2_instances[0].getContent().querySelector('tbody').remove();
            var tbody = createElement('tbody');
            rows = [...rows];
            for (var r = 0; r < rows.length; r++) {
                tbody.appendChild(rows[r].cloneNode(true));
            }
            (e.element as CustomElement).ej2_instances[0].getContentTable().appendChild(tbody);
        }
    }
}
interface CustomElement extends Element {
    ej2_instances: any[];
}