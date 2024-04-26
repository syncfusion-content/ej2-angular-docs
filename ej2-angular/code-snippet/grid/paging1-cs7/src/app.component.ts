import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='pagerAtTop' [dataSource]='data' [allowPaging]='true' (dataBound)='dataBound()'
               height='268px' [pageSettings]='pageSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings?: object;
    @ViewChild('grid')
    public grid?: GridComponent;
    public toolbar?: ToolbarItems[];
    public initialGridLoad: boolean = true;

    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSizes: true, pageSize: 12 };
    }
    dataBound() {
        if (this.initialGridLoad) {
            this.initialGridLoad = false;
            const pager = document.getElementsByClassName('e-gridpager');
            let topElement;
            if ((this.grid as any).allowGrouping || (this.grid as any).toolbar) {
                topElement = (this.grid as any).allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                    document.getElementsByClassName('e-toolbar');
            } else {
                topElement = document.getElementsByClassName('e-gridheader');
            }
            (this.grid as any).element.insertBefore(pager[0], topElement[0]);
        }
    }
}



