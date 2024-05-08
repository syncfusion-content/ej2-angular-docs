import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Chart3DAllModule} from '@syncfusion/ej2-angular-charts'

import { Component } from '@angular/core';

@Component({
imports: [
         Chart3DAllModule
    ],


standalone: true,
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart3d #chart style='display:block;' align='center' [primaryXAxis]='primaryXAxis'
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' pointColorMapping="color">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public enableRotation?: boolean;
    public palettes?: String[];
    ngOnInit(): void {
        this.dataSource = [
            { x: 'Jan', y: 6.96, color: "#ed4c40" },
            { x: 'Feb', y: 8.9, color: "#3285f3"},
            { x: 'Mar', y: 12, color: "#1dd7f3"},
            { x: 'Apr', y: 17.5, color: "#fe1684" },
            { x: 'May', y: 22.1, color: "#4633f2" }
        ];
        this.enableRotation = true;
        this.primaryXAxis = {
            valueType: 'Category',
        };
    }
}


