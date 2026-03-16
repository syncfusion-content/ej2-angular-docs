import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';
@Component({
imports: [
        ChartModule
    ],

providers: [ CategoryService, ColumnSeriesService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='dataManager' type='Column' [query]='query' xName='CustomerID' yName='Freight'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public dataManager: DataManager = new DataManager({
        url: 'https://services.odata.org/V3/Northwind/Northwind.svc/Orders/',
        adaptor: new ODataAdaptor(),
        crossDomain: true
    });
    public query: Query = new Query();
    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.title = 'Order Details';
    }

}
