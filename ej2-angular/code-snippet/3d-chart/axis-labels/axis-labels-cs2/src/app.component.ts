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
    template: `<ejs-chart3d style='display:block;' align='center' [primaryXAxis]='primaryXAxis' [primaryYAxis]="primaryYAxis"
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.dataSource = [
            { x: "South Korea", y: 39.4 },
            { x: "India", y: 61.3 },
            { x: "Pakistan", y: 20.4 },
            { x: "Germany", y: 65.1 },
            { x: "Australia", y: 15.8 },
            { x: "Italy", y: 29.2 },
            { x: "United Kingdom", y: 44.6 },
            { x: "Saudi Arabia", y: 9.7 },
            { x: "Russia", y: 40.8 },
            { x: "Mexico", y: 31 },
            { x: "Brazil", y: 75.9 },
            { x: "China", y: 51.4 }
        ];
        this.primaryXAxis = {
            valueType: "Category",
            labelIntersectAction: 'Rotate45'
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
    }
}


