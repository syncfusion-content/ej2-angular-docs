import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart3d style='display:block;' align='center' [primaryXAxis]='primaryXAxis'
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataManager' type='Column' xName='CustomerID' yName='Freight' [query]="query">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    public dataManager: DataManager = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders',
        adaptor: new ODataAdaptor()
    });
    public query: Query = new Query();
    ngOnInit(): void {        
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.enableRotation = true;
    }
}


