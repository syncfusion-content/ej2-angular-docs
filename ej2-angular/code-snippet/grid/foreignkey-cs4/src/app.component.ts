import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ForeignKeyService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit, ViewChild } from '@angular/core';
import { ForeignKeyService, AggregateService, getForeignData, CustomSummaryType, AggregateColumnModel, GridComponent, Column } from '@syncfusion/ej2-angular-grids';
import { data, employeeData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        GridModule
    ],

providers: [ForeignKeyService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='280'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                         foreignKeyValue='FirstName' [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column field="EmployeeID" type="Custom" [customAggregate]= 'customAggregateFn'>
                                    <ng-template #footerTemplate let-data>
                                        Count of Margaret:  {{data.Custom}}
                                    </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>`,
    providers: [ForeignKeyService, AggregateService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public employeeData?: object[];

    // Custom Aggregate function for foreign column
    public customAggregateFn: CustomSummaryType = (customData: object, column: AggregateColumnModel) => {
        var count = 0;
        data.forEach((dObj) => {
            count = getValue('FirstName', getForeignData((this.grid as GridComponent).getColumnByField((column as Column).field), dObj)[0]) === 'Margaret' ? count + 1 : count;
        })
        return count;
    }

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData;
    }
}