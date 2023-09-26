

import { Component, OnInit } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='dataManager' type='Column' [query]='query' xName='CustomerID' yName='Freight' name='Sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders'
    });
    public query: Query = new Query().take(5).where('Estimate', 'lessThan', 3, false);
    ngOnInit(): void {
        this.primaryXAxis = {
            rangePadding: 'Additional',
            valueType: 'Category',
            title: 'Assignee'
        };
        this.primaryYAxis = {
            title: 'Estimate'
        };
    }

}


