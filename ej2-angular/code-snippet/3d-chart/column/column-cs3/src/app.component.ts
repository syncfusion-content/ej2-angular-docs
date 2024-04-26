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
    template: `<ejs-chart3d [primaryXAxis]='primaryXAxis' [primaryYAxis]="primaryYAxis"
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' groupName="USA">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y1' groupName="USA">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y2' groupName="UK">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y3' groupName="UK">
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
            { x: '2012', y: 104, y1: 46, y2: 65, y3: 29 },
            { x: '2016', y: 121, y1: 46, y2: 67, y3: 27 },
            { x: '2020', y: 113, y1: 39, y2: 65, y3: 22 }
        ];
        this.primaryXAxis = {
            valueType: "Category"
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
    }
}


