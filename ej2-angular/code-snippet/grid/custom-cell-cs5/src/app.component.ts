import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { employeeData, data,columnDataType } from './datasource';
import { DetailDataBoundEventArgs, Grid } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' width='auto' 
              (detailDataBound)='detailDataBound($event)'>
                <e-columns>
                    <e-column field='FirstName' headerText='First Name' width='140'>
                    </e-column>
                    <e-column field='LastName' headerText='Last Name' width='140'>
                    </e-column>
                    <e-column field='Title' headerText='Title' width='150'>
                    </e-column>
                    <e-column field='Country' headerText='Country' width='150'>
                    </e-column>
                </e-columns>
                <ng-template #detailTemplate let-data>
                    <div class = 'custom-grid' ></div>
                </ng-template>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
    detailDataBound(e: DetailDataBoundEventArgs ) {
        let detail = new Grid({
            dataSource: data.filter((item: Object) => (item as columnDataType)['EmployeeID'] === (e.data as columnDataType)['EmployeeID']),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 110 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
        detail.appendTo((e.detailElement as HTMLElement).querySelector('.custom-grid') as HTMLElement);
    }
}



