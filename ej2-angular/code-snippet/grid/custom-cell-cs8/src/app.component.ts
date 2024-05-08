import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];

    ngOnInit(): void {
        this.data = new DataManager(data as JSON[]).executeLocal(new Query().take(8));
    }

    public rowDataBound(args: RowDataBoundEventArgs) {
        const OrderID = 'OrderID';
        if ((args as any).data[OrderID] === 10249) {
            (args as any).rowHeight = 90;
        }
    }
}



