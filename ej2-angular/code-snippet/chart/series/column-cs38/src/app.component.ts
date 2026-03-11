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
            <e-series [dataSource]='data' type='Column' [query]='query' xName='CustomerID' yName='Sno'></e-series>
        </e-series-collection>
    </ejs-chart>`
})

export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: DataManager;
    public query: Query = new Query();
    ngOnInit(): void {
        class SerialNoAdaptor extends ODataAdaptor {
            public override processResponse(): Object[] {
                let i: number = 0;
                // calling base class processResponse function
                let original: Object[] | any = super.processResponse.apply(this, arguments as any);
                // adding serial number
                original.forEach((item: Object | any) => (item['Sno'] = ++i));
                return original;
            }
        }
        this.data = new DataManager({
            url: 'https://services.syncfusion.com/angular/production/api/orders',
            adaptor: new SerialNoAdaptor(),
            offline: true
        });
        this.primaryXAxis = {
            valueType: 'Category',
        };
        this.title = 'Order Details';
    }

}
