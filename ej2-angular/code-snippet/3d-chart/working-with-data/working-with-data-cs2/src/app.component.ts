import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Chart3DAllModule} from '@syncfusion/ej2-angular-charts'

import { DataManager, Query } from '@syncfusion/ej2-data';
import { Component } from '@angular/core';

@Component({
imports: [
         Chart3DAllModule
    ],


standalone: true,
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
        url: 'https://services.syncfusion.com/angular/production/api/orders'
        });
        public query: Query = new Query().take(5).where('Estimate', 'lessThan', 3, false);
    ngOnInit(): void {        
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.enableRotation = true;
    }
}


